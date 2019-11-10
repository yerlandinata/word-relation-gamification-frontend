export const BEGIN_GAME = 'MainPage/BEGIN_GAME'
export const LOGIN_PAGE = 'MainPage/LOGIN'
export const REGISTER_PAGE = 'MainPage/REGISTER'
export const PROFILE_PAGE = 'MainPage/PROFILE'
export const PHONE_NUMBER_PAGE = 'MainPage/PHONE'

export const beginGame = () => ({
    type: BEGIN_GAME,
})

export const showRegisterPage = () => ({
    type: REGISTER_PAGE,
})

export const showLoginPage = () => ({
    type: LOGIN_PAGE,
})

export const showSetPhoneNumberPage = () => ({
    type: PHONE_NUMBER_PAGE,
})

export const STATE_MAIN_MENU = 'main'
export const STATE_REGISTER = 'register'
export const STATE_LOGIN = 'login'
export const STATE_PROFILE = 'profile'
export const STATE_PLAYING_GAME = 'playing'
export const STATE_SET_PHONE = 'phone'
export const STATE_SHOWING_RANK = 'ranking'

const INITIAL_STATE = STATE_MAIN_MENU

const reducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case BEGIN_GAME:
            return STATE_PLAYING_GAME
        case REGISTER_PAGE:
            return STATE_REGISTER
        case LOGIN_PAGE:
            return STATE_LOGIN
        case PROFILE_PAGE:
            return STATE_PROFILE
        case PHONE_NUMBER_PAGE:
            return STATE_SET_PHONE
        default:
            return state
    }
}

export default reducer
