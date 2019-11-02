export const SET_INITIAL_PROFILE = 'Profile/INIT'
export const POST_PROFILE = 'Profile/POST'
export const POST_PROFILE_SUCCESS = 'Profile/POST_SUCCESS'
export const POST_PROFILE_FAILURE = 'Profile/POST_FAILURE'

export const initProfile = (phoneNumber, birthDate) => ({
    type: SET_INITIAL_PROFILE,
    payload: {phoneNumber, birthDate}
})

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
    phoneNumber: '',
    birthDate: '',
}

const profileReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_INITIAL_PROFILE: {
            return {
                ...state,
                ...payload,
            }
        }
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
