export const POST_PROFILE = 'Profile/POST'
export const POST_PROFILE_SUCCESS = 'Profile/POST_SUCCESS'
export const POST_PROFILE_FAILURE = 'Profile/POST_FAILURE'

export const postProfile = (phoneNumber, birthDate, fullName, educationLevel) => ({
    type: POST_PROFILE,
    payload: { phoneNumber, birthDate, fullName, educationLevel }
})

export const postProfileSuccess = (user, token) => ({
    type: POST_PROFILE_SUCCESS,
    payload: { user, token }
})

export const postProfileFailure = (error) => ({
    type: POST_PROFILE_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    isLoading: false,
}

const profileReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case POST_PROFILE:
            return {
                isLoading: true
            }
        case POST_PROFILE_FAILURE:
        case POST_PROFILE_SUCCESS:
            return {
                isLoading: false
            }
        default:
            return state
    }
}

export default profileReducer
