import { ofType, combineEpics } from 'redux-observable'
import { mapTo, mergeMap, map, catchError, debounceTime } from 'rxjs/operators'
import { fetchPair, FETCH_PAIR, fetchPairSuccess, fetchPairFailure, postAnnotationSuccess, postAnnotationFailure, POST_ANNOTATION, POST_ANNOTATION_SUCCESS, SHOW_SCORE, hideAddedScore, showAddedScore } from './reducer'
import { BEGIN_GAME } from 'modules/MainPage/reducer'
import { of } from 'rxjs'

const SCORE_UPDATE_SCREEN_TIME = 1500

const beginGameEpic = (action$) =>
    action$.pipe(
        ofType(BEGIN_GAME),
        mapTo(fetchPair())
    )

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
                    rank: response.player.rank
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

const gameEpics = combineEpics(
    beginGameEpic,
    fetchPairEpic,
    postAnnotationEpic,
    triggerShowAddedScoreEpic,
    hideAddedScoreEpic,
)

export default gameEpics
