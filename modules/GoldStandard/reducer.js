export const FETCH_GOLD_STANDARD = 'GoldStandard/FETCH'
export const FETCH_GOLD_STANDARD_SUCCESS = 'GoldStandard/FETCH_SUCCESS'
export const FETCH_GOLD_STANDARD_FAILURE = 'GoldStandard/FETCH_FAILURE'

export const SET_SAMPLE_GOLD_STANDARD = 'GoldStandard/SET_SAMPLE'
export const RESAMPLE_GOLD_STANDARD = 'GoldStandard/RESAMPLE'


export const fethcGoldStandard = () => ({
    type: FETCH_GOLD_STANDARD,
})

export const fetchGoldStandardSuccess = (goldStandards) => ({
    type: FETCH_GOLD_STANDARD_SUCCESS,
    payload: goldStandards,
})

export const fetchGoldStandardFailure = (error) => ({
    type: FETCH_GOLD_STANDARD_FAILURE,
    payload: { error },
})

export const setSampleGoldStandard = (goldStandards) => ({
    type: SET_SAMPLE_GOLD_STANDARD,
    payload: goldStandards,
})

export const resampleGoldStandard = () => ({
    type: RESAMPLE_GOLD_STANDARD,
})

const INITIAL_STATE = {
    isLoading: false,
    allGoldStandards: [],
    sampleGoldStandards: [],
}

const goldStandardReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_GOLD_STANDARD:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_GOLD_STANDARD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allGoldStandards: payload,
            }
        case FETCH_GOLD_STANDARD_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case SET_SAMPLE_GOLD_STANDARD:
            return {
                ...state,
                sampleGoldStandards: payload
            }
        default:
            return state
    }
}

export default goldStandardReducer
