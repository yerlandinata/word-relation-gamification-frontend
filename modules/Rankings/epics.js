import { ofType, combineEpics } from 'redux-observable'
import { FETCH_RANKINGS, fetchRankingsSuccess, fetchRankingsFailure } from './reducer'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

const fetchRankingsEpic = (action$, state$, { getAuthenticatedApi }) => 
    action$.pipe(
        ofType(FETCH_RANKINGS),
        mergeMap(
            action =>
                getAuthenticatedApi(
                    state$.value.userInfoState.token
                ).get('users/rankings').pipe(
                    map(({response}) => fetchRankingsSuccess(
                        response.map(
                            player => ({
                                fullName: player.full_name,
                                rank: player.rank,
                                score: player.score,
                                level: player.level,
                            })
                        )
                    )),
                    catchError(error => of(fetchRankingsFailure(error.xhr.response)))
                )
        )
    )

const rankingsEpics = combineEpics(
    fetchRankingsEpic,
)

export default rankingsEpics
