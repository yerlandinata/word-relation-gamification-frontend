import { POST_LOGIN, postLoginSuccess, postLoginFailure } from './reducer'
import { ofType, combineEpics } from 'redux-observable'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

const LOGIN_OK = 1
const LOGIN_INVALID = 3

const loginEpic = (action$, state$, {publicApi}) =>
    action$.pipe(
        ofType(POST_LOGIN),
        mergeMap(action =>
            publicApi.post(
                'users/login', {
                    id: action.payload.phoneNumber,
                }
            ).pipe(
                map(({response}) =>{
                        switch (response.login_status) {
                            case LOGIN_OK: 
                                return postLoginSuccess({
                                    phoneNumber: response.user.id,
                                    displayName: response.user.display_name,
                                    score: response.user.score,
                                    rank: response.user.rank,
                                    elapsedTime: response.user.elapsed,
                                    level: response.user.level,
                                }, response.token)
                            case LOGIN_INVALID:
                                return postLoginFailure()
                        }
                    }
                ),
                catchError(error =>
                    of(
                        postLoginFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const loginEpics = combineEpics(loginEpic)

export default loginEpics
