import { ofType, combineEpics } from 'redux-observable'
import { mergeMap, map, catchError, debounceTime } from 'rxjs/operators'
import { FETCH_PAIR, fetchPairSuccess, fetchPairFailure, postAnnotationSuccess, postAnnotationFailure, POST_ANNOTATION, POST_ANNOTATION_SUCCESS, SHOW_SCORE, hideAddedScore, showAddedScore, RESTART_GAME } from './reducer'
import { of } from 'rxjs'

const SCORE_UPDATE_SCREEN_TIME = 1500

const fetchPairEpic = (action$, state$, { getAuthenticatedApi }) =>
    action$.pipe(
        ofType(FETCH_PAIR),
        mergeMap(
            action =>
                getAuthenticatedApi(
                    state$.value.userInfoState.token
                ).get('users/word_pairs').pipe(
                    map(({ response }) => fetchPairSuccess({
                        id: response.id,
                        lhsWord: response.word_1,
                        rhsWord: response.word_2,
                        beginTime: (new Date()).getTime(),
                    })),
                    catchError(error => of(fetchPairFailure(error.xhr.response)))
                )

        )
    )

const restartGameEpic = (action$, state$, { getAuthenticatedApi }) =>
    action$.pipe(
        ofType(RESTART_GAME),
        mergeMap(
            action =>
                getAuthenticatedApi(
                    state$.value.userInfoState.token
                ).post('users/restart_game', {}).pipe(
                    map(({ response }) => fetchPairSuccess({
                        id: response.id,
                        lhsWord: response.word_1,
                        rhsWord: response.word_2,
                        beginTime: (new Date()).getTime(),
                    })),
                    catchError(error => of(fetchPairFailure(error.xhr.response)))
                )

        )
    )

const postAnnotationEpic = (action$, state$, { getAuthenticatedApi }) =>
    action$.pipe(
        ofType(POST_ANNOTATION),
        mergeMap(
            ({ payload }) => getAuthenticatedApi(
                state$.value.userInfoState.token
            ).post('users/word_pairs/annotations', {
                wp_id: payload.wordPairId,
                wrt_id: payload.wordRelationTypeId,
                player_time_ms: payload.time,
            }).pipe(
                map(({ response }) => postAnnotationSuccess({
                    score: response.player.score,
                    rank: response.player.rank,
                    elapsedTime: response.player.elapsed,
                }, response.next_word_pair ? {
                    id: response.next_word_pair.id,
                    lhsWord: response.next_word_pair.word_1.replace(/_/g, ' '),
                    rhsWord: response.next_word_pair.word_2.replace(/_/g, ' '),
                    beginTime: (new Date()).getTime() + SCORE_UPDATE_SCREEN_TIME,
                } : {})),
                catchError(error => of(postAnnotationFailure(JSON.stringify(error))))
            )
        )
    )

const triggerShowAddedScoreEpic = (action$, state$) =>
    action$.pipe(
        ofType(POST_ANNOTATION_SUCCESS),
        map(action =>
            showAddedScore(action.payload.player.score - state$.value.userInfoState.score)
        )
    )

const hideAddedScoreEpic = (action$) =>
    action$.pipe(
        ofType(SHOW_SCORE),
        debounceTime(SCORE_UPDATE_SCREEN_TIME),
        map(action => hideAddedScore())
    )

const scoreUpdateSoundEffectsEpic = (action$, state$) =>
    action$.pipe(
        ofType(SHOW_SCORE),
        map(action => {
            let sfxUrl
            const level = state$.value.userInfoState.level
            switch (action.payload.score) {
                case 1 * level:
                    sfxUrl = 'https://freesound.org/data/previews/131/131660_2398403-lq.mp3'
                    break;
                case 2 * level:
                    sfxUrl = 'https://freesound.org/data/previews/397/397355_4284968-lq.mp3'
                    break;
                case -2 * level:
                    sfxUrl = 'https://freesound.org/data/previews/331/331912_3248244-lq.mp3'
                    break;
                default:
                    break;
            }
            if (sfxUrl) {
                new Audio(sfxUrl).play()
            }
            return {type: 'NOP'}
        })
    )

const gameEpics = combineEpics(
    fetchPairEpic,
    postAnnotationEpic,
    triggerShowAddedScoreEpic,
    hideAddedScoreEpic,
    scoreUpdateSoundEffectsEpic,
    restartGameEpic,
)

export default gameEpics
