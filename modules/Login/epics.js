import { POST_LOGIN, postLoginSuccess, postLoginFailure } from './reducer'
import { ofType, combineEpics } from 'redux-observable'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'

const LOGIN_OK = 1
const WRONG_ID_BIRTH_DATE = 3

const loginEpic = (action$, state$, {publicApi}) =>
    action$.pipe(
        ofType(POST_LOGIN),
        mergeMap(action =>
            publicApi.post(
                'users/login', {
                    id: action.payload.phoneNumber,
                    birth_date: action.payload.birthDate
                }
            ).pipe(
                map(({response}) =>{
                        switch (response.login_status) {
                            case LOGIN_OK: 
                                return postLoginSuccess({
                                    phoneNumber: response.user.id,
                                    displayName: response.user.display_name,
                                    birthDate: response.user.birth_date,
                                    score: response.user.score,
                                    rank: response.user.rank,
                                    elapsedTime: response.user.elapsed,
                                    level: response.user.level,
                                }, response.token)
                            case WRONG_ID_BIRTH_DATE:
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
