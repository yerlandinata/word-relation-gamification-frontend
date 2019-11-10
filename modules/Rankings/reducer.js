export const FETCH_RANKINGS = 'Rankings/FETCH'
export const FETCH_RANKINGS_SUCCESS = 'Rankings/FETCH_SUCCESS'
export const FETCH_RANKINGS_FAILURE = 'Rankings/FETCH_FAILURE'

export const fethcRankings = () => ({
    type: FETCH_RANKINGS,
})

export const fetchRankingsSuccess = (rankings) => ({
    type: FETCH_RANKINGS_SUCCESS,
    payload: rankings,
})

export const fetchRankingsFailure = (error) => ({
    type: FETCH_RANKINGS_FAILURE,
    payload: { error },
})

const INITIAL_STATE = {
    isLoading: false,
    players: [],
}

const rankingReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_RANKINGS:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_RANKINGS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                players: payload,
            }
        case FETCH_RANKINGS_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}

export default rankingReducer
