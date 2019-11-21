import { combineEpics, ofType } from "redux-observable";
import { mapTo, debounceTime, map } from "rxjs/operators";
import { beginGame, REGISTER_PAGE } from "./reducer";
import { POST_LOGIN_SUCCESS, postLogin } from "modules/Login/reducer";
import { POST_PROFILE_SUCCESS } from "modules/Profile/reducer";
import { POST_PHONE_NUMBER_SUCCESS } from "modules/PhoneNumber/reducer";

const createBeginGameEpic = (actionType) => (action$) =>
    action$.pipe(
        ofType(actionType),
        debounceTime(100),
        mapTo(beginGame())
    )

const beginGameEpic = combineEpics(
    createBeginGameEpic(POST_LOGIN_SUCCESS),
    createBeginGameEpic(POST_PROFILE_SUCCESS),
    createBeginGameEpic(POST_PHONE_NUMBER_SUCCESS),
)

const localstorageLoginEpic = (action$) =>
    action$.pipe(
        ofType(REGISTER_PAGE),
        map(() => {
            const savedPhoneLogin = localStorage.getItem('phone_login')
            if (savedPhoneLogin) {
                return postLogin(parseInt(savedPhoneLogin))
            } else {
                return {type: 'NOP'}
            }
        })
    )

const mainPageEpics = combineEpics(
    beginGameEpic,
    localstorageLoginEpic,
)

export default mainPageEpics
