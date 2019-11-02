import { SHOW_SCORE } from "modules/Game/reducer";

export const UPDATE_USER_INFO = 'UserInfo/UPDATE'

export const updateUserInfo = ({token, phoneNumber, birthDate, fullName, score, rank}) => ({
    type: UPDATE_USER_INFO,
    payload: {token, phoneNumber, birthDate, fullName, score, rank}
})

const INITIAL_STATE = {
    isLoading: false,
    token: '',
    phoneNumber: '',
    birthDate: '',
    fullName: '',
    score: 0,
    rank: 'unranked',
}

const userInfoReducer = (state = INITIAL_STATE, {type, payload}) => {
    if (payload) {
        Object.keys(payload).forEach(key => payload[key] === undefined ? delete payload[key] : ''); // throw away undefined
    }
    switch (type) {
        case UPDATE_USER_INFO:
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }
}

export default userInfoReducer
