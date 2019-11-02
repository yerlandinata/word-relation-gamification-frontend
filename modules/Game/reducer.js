export const FETCH_PAIR = 'WordPair/FETCH'
export const FETCH_PAIR_SUCCESS = 'WordPair/FETCH_SUCCESS'
export const FETCH_PAIR_FAILURE = 'WordPair/FETCH_FAILURE'

export const POST_ANNOTATION = 'Annotation/POST'
export const POST_ANNOTATION_SUCCESS = 'Annotation/POST_SUCCESS'
export const POST_ANNOTATION_FAILURE = 'Annotation/POST_FAILURE'

export const SHOW_SCORE = 'Score/SHOW'
export const HIDE_SCORE = 'Score/HIDE'

export const fetchPair = () => ({
    type: FETCH_PAIR,
})

export const fetchPairSuccess = ({id, lhsWord, rhsWord, beginTime}) => ({
    type: FETCH_PAIR_SUCCESS,
    payload: { id, lhsWord, rhsWord, beginTime }
})

export const fetchPairFailure = (error) => ({
    type: FETCH_PAIR_FAILURE,
    payload: { error }
})

export const postAnnotation = (wordPairId, wordRelationTypeId, time) => ({
    type: POST_ANNOTATION,
    payload: { wordPairId, wordRelationTypeId, time }
})

export const postAnnotationSuccess = ({score, rank}, {id, lhsWord, rhsWord, beginTime}) => ({
    type: POST_ANNOTATION_SUCCESS,
    payload: {
        player: {score, rank},
        nextWordPair: id ? {id, lhsWord, rhsWord, beginTime} : null,
    }
})

export const postAnnotationFailure = (error) => ({
    type: POST_ANNOTATION_FAILURE,
    payload: { error }
})

export const showAddedScore = (score) => ({
    type: SHOW_SCORE,
    payload: { score }
})

export const hideAddedScore = () => ({
    type: HIDE_SCORE,
})

const INITIAL_STATE = {
    isLoading: false,
    isShowingAddedScore: false,
    addedScore: 0,
    targetPair: null,
}

const gameReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case POST_ANNOTATION:
        case FETCH_PAIR:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_PAIR_SUCCESS:
            return {
                ...state,
                isLoading: false,
                targetPair: {...payload},
            }
        case POST_ANNOTATION_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                targetPair: payload.nextWordPair,
            }
        case POST_ANNOTATION_FAILURE:
        case FETCH_PAIR_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case SHOW_SCORE:
            return {
                ...state,
                isShowingAddedScore: true,
                addedScore: payload.score,
            }
        case HIDE_SCORE:
            return {
                ...state,
                isShowingAddedScore: false,
                addedScore: 0,
            }
        default:
            return state
    }
}

export default gameReducer
