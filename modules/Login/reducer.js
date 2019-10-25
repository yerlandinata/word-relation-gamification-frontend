export const POST_LOGIN = 'Login/POST'
export const POST_LOGIN_SUCCESS = 'Login/POST_SUCCESS'
export const POST_LOGIN_FAILURE = 'Login/POST_FAILURE'

export const postLogin = (phoneNumber, birthDate) => ({
    type: POST_LOGIN,
    payload: { phoneNumber, birthDate }
})

export const postLoginSuccess = (isNewUser) => ({
    type: POST_LOGIN_SUCCESS,
    payload: { isNewUser }
})

export const postLoginFailure = (error) => ({
    type: POST_LOGIN_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    isLoading: false
}

const reducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case POST_LOGIN:
            return {
                isLoading: true
            }
        case POST_LOGIN_FAILURE:
        case POST_LOGIN_SUCCESS:
            return {
                isLoading: false
            }
        default:
            return state
    }
}

export default reducer
