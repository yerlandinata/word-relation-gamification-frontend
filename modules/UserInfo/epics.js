import { ofType, combineEpics, ActionsObservable } from "redux-observable";
import { POST_PROFILE_SUCCESS } from "modules/Profile/reducer";
import { map, debounceTime } from "rxjs/operators";
import { updateUserInfo, UPDATE_USER_INFO } from "./reducer";
import { POST_LOGIN_SUCCESS } from "modules/Login/reducer";
import { POST_ANNOTATION_SUCCESS, showAddedScore, SHOW_SCORE, hideAddedScore } from "modules/Game/reducer";

const newProfileEpic = (action$) =>
    action$.pipe(
        ofType(POST_PROFILE_SUCCESS),
        map(action => updateUserInfo({
            ...action.payload.user,
            token: action.payload.token,
            score: 0,
            rank: 'unranked',
        }))
    )

const loginProfileEpic = (action$) =>
    action$.pipe(
        ofType(POST_LOGIN_SUCCESS),
        map(action => 
            updateUserInfo({
                ...action.payload.user,
                token: action.payload.token,
            })
        )
    )

const postAnnotationSuccessEpic = (action$) =>
    action$.pipe(
        ofType(POST_ANNOTATION_SUCCESS),
        debounceTime(250), // wait until score is checked
        map(action => updateUserInfo(action.payload.player))
    )

const userInfoEpics = combineEpics(
    newProfileEpic,
    loginProfileEpic,
    postAnnotationSuccessEpic,
)

export default userInfoEpics
