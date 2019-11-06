import { ofType, combineEpics } from "redux-observable";
import { POST_PROFILE_SUCCESS } from "modules/Profile/reducer";
import { map, debounceTime } from "rxjs/operators";
import { updateUserInfo } from "./reducer";
import { POST_LOGIN_SUCCESS } from "modules/Login/reducer";
import { POST_ANNOTATION_SUCCESS, RESTART_GAME } from "modules/Game/reducer";

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

const resetScoreEpic = (action$) =>
    action$.pipe(
        ofType(RESTART_GAME),
        map(() => updateUserInfo({
            score: 0,
            rank: 'unranked',
            elapsedTime: 0,
        }))
    )

const userInfoEpics = combineEpics(
    newProfileEpic,
    loginProfileEpic,
    postAnnotationSuccessEpic,
    resetScoreEpic,
)

export default userInfoEpics
