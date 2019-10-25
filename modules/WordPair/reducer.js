export const FETCH_PAIR = 'WordPair/FETCH'
export const FETCH_PAIR_SUCCESS = 'WordPair/FETCH_SUCCESS'
export const FETCH_PAIR_FAILURE = 'WordPair/FETCH_FAILURE'

export const fetchPair = () => ({
    type: FETCH_PAIR,
})

export const fetchPairSuccess = (wordPair) => ({
    type: FETCH_PAIR_SUCCESS,
    payload: { wordPair }
})

export const fetchPairFailure = (error) => ({
    type: FETCH_PAIR_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    id: null,
    word1: '',
    word2: '',
    example: '',
    isLoading: true,
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_PAIR:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_PAIR_SUCCESS:
            return {
                isLoading: false,
                ...payload.wordPair,
            }
        case FETCH_PAIR_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

export default reducer
