import { combineEpics, ofType } from "redux-observable";
import { mapTo, debounceTime } from "rxjs/operators";
import { beginGame } from "./reducer";
import { POST_LOGIN_SUCCESS } from "modules/Login/reducer";
import { POST_PROFILE_SUCCESS } from "modules/Profile/reducer";

const createBeginGameEpic = (actionType) => (action$) =>
    action$.pipe(
        ofType(actionType),
        debounceTime(100),
        mapTo(beginGame())
    )

const beginGameEpic = combineEpics(
    createBeginGameEpic(POST_LOGIN_SUCCESS),
    createBeginGameEpic(POST_PROFILE_SUCCESS),
)

const mainPageEpics = combineEpics(
    beginGameEpic,
)

export default mainPageEpics
