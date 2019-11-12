export const POST_LOGIN = 'Login/POST'
export const POST_LOGIN_SUCCESS = 'Login/POST_SUCCESS'
export const POST_LOGIN_FAILURE = 'Login/POST_FAILURE'

export const postLogin = (phoneNumber) => ({
    type: POST_LOGIN,
    payload: { phoneNumber }
})

export const postLoginSuccess = (user, token) => ({
    type: POST_LOGIN_SUCCESS,
    payload: { user, token }
})

export const postLoginFailure = (error) => ({
    type: POST_LOGIN_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
}

const reducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case POST_LOGIN:
            return {
                isLoading: true,
                isError: false,
            }
        case POST_LOGIN_FAILURE:
            return {
                isLoading: false,
                isError: true,
            }
        case POST_LOGIN_SUCCESS:
            return {
                isLoading: false,
                isError: false,
            }
        default:
            return state
    }
}

export default reducer
