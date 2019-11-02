import { PROFILE_PAGE } from "modules/MainPage/reducer";
import { ofType, combineEpics } from "redux-observable";
import { map, mergeMap, catchError } from "rxjs/operators";
import { initProfile, POST_PROFILE, postProfileSuccess, postProfileFailure } from "./reducer";
import { of } from "rxjs";

const initProfileEpic = (action$) =>
    action$.pipe(
        ofType(PROFILE_PAGE),
        map(action => initProfile(action.payload.phoneNumber, action.payload.birthDate))
    )

const postProfileEpic = (action$, state$, {publicApi}) =>
    action$.pipe(
        ofType(POST_PROFILE),
        mergeMap(action =>
            publicApi.post(
                'users/register', {
                    id: action.payload.phoneNumber,
                    birth_date: action.payload.birthDate,
                    full_name: action.payload.fullName,
                    education_level: action.payload.educationLevel,
                }
            ).pipe(
                map(({response}) => postProfileSuccess({
                    ...action.payload,
                    score: 0,
                    rank: 'unranked',
                }, response.token)
                ),
                catchError(error =>
                    of(
                        postProfileFailure(
                            error.xhr.response,
                        )
                    )
                )
            )
        )
    )

const profileEpics = combineEpics(
    initProfileEpic,
    postProfileEpic,
)

export default profileEpics
