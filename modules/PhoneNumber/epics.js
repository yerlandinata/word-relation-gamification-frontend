import { ofType, combineEpics } from 'redux-observable'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { POST_PHONE_NUMBER, postPhoneNumberSuccess, postPhoneNumberFailure } from './reducer'

const postPhoneNumberEpic = (action$, state$, { getAuthenticatedApi }) =>
    action$.pipe(
        ofType(POST_PHONE_NUMBER),
        mergeMap(action =>
            getAuthenticatedApi(
                state$.value.userInfoState.token
            ).post(
                'users/phone_number', {
                    new_id: action.payload.phoneNumber,
                    full_name: action.payload.name,
                }
            ).pipe(
                map(({response}) => postPhoneNumberSuccess(action.payload.phoneNumber, response.token)
                ),
                catchError(error =>
                    of(
                        postPhoneNumberFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const phoneNumberEpics = combineEpics(postPhoneNumberEpic)

export default phoneNumberEpics
