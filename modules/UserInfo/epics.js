import { ofType, combineEpics } from "redux-observable";
import { POST_PROFILE_SUCCESS } from "modules/Profile/reducer";
import { map, debounceTime } from "rxjs/operators";
import { updateUserInfo } from "./reducer";
import { POST_LOGIN_SUCCESS } from "modules/Login/reducer";
import { POST_ANNOTATION_SUCCESS, LEVEL_UP_GAME } from "modules/Game/reducer";
import { POST_PHONE_NUMBER_SUCCESS } from "modules/PhoneNumber/reducer";

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

const changePhoneNumberSuccessEpic = (action$) =>
    action$.pipe(
        ofType(POST_PHONE_NUMBER_SUCCESS),
        map(action =>
            updateUserInfo({
                phoneNumber: action.payload.phoneNumber,
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

const resetScoreEpic = (action$, state$) =>
    action$.pipe(
        ofType(LEVEL_UP_GAME),
        map(() => updateUserInfo({
            elapsedTime: 0,
            level: state$.value.userInfoState.level + 1,
        }))
    )

const userInfoEpics = combineEpics(
    newProfileEpic,
    loginProfileEpic,
    postAnnotationSuccessEpic,
    resetScoreEpic,
    changePhoneNumberSuccessEpic,
)

export default userInfoEpics
