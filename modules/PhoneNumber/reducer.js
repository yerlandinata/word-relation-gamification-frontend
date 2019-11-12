export const POST_PHONE_NUMBER = 'PhoneNumber/POST'
export const POST_PHONE_NUMBER_SUCCESS = 'PhoneNumber/POST_SUCCESS'
export const POST_PHONE_NUMBER_FAILURE = 'PhoneNumber/POST_FAILURE'

export const postPhoneNumber = (phoneNumber, name) => ({
    type: POST_PHONE_NUMBER,
    payload: { phoneNumber, name }
})

export const postPhoneNumberSuccess = (phoneNumber, token) => ({
    type: POST_PHONE_NUMBER_SUCCESS,
    payload: { phoneNumber, token }
})

export const postPhoneNumberFailure = (error) => ({
    type: POST_PHONE_NUMBER_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    isLoading: false
}

const phoneNumberReducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        case POST_PHONE_NUMBER:
            return {
                isLoading: true
            }
        case POST_PHONE_NUMBER_FAILURE:
        case POST_PHONE_NUMBER_SUCCESS:
            return {
                isLoading: false
            }
        default:
            return state
    }
}

export default phoneNumberReducer
