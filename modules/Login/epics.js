import { POST_LOGIN, postLoginSuccess, postLoginFailure } from "./reducer"
import { ofType, combineEpics } from "redux-observable"
import { mergeMap, map, catchError } from "rxjs/operators"
import { request } from "universal-rxjs-ajax"
import { ajax } from 'rxjs/ajax'
import { of } from "rxjs"
import { showEditProfilePage } from "modules/MainPage/reducer"

const createXHR = () => new XMLHttpRequest()

const LOGIN_OK = 1
const USER_DOES_NOT_EXISTS = 2
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
                                    fullName: response.user.full_name,
                                    birthDate: response.user.birth_date,
                                    score: response.user.score,
                                    rank: response.user.rank,
                                    elapsedTime: response.user.elapsed,
                                }, response.token)
                            case WRONG_ID_BIRTH_DATE:
                                return postLoginFailure()
                            case USER_DOES_NOT_EXISTS:
                                return showEditProfilePage(action.payload.phoneNumber, action.payload.birthDate)
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
