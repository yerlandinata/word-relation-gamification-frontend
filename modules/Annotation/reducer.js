export const POST_ANNOTATION = 'Annotation/POST'
export const POST_ANNOTATION_SUCCESS = 'Annotation/POST_SUCCESS'
export const POST_ANNOTATION_FAILURE = 'Annotation/POST_FAILURE'

export const FETCH_WORD_RELATION_TYPES = 'Annotation/FETCH'
export const FETCH_WORD_RELATION_TYPES_SUCCESS = 'Annotation/FETCH_SUCCESS'
export const FETCH_WORD_RELATION_TYPES_FAILURE = 'Annotation/FETCH_FAILURE'

export const fetchWordRelationTypes = () => ({
    type: FETCH_WORD_RELATION_TYPES,
})

export const fetchWordRelationTypesSuccess = (wordRelationTypes) => ({
    type: FETCH_WORD_RELATION_TYPES_SUCCESS,
    payload: wordRelationTypes
})

export const fetchWordRelationTypesFailure = (error) => ({
    type: FETCH_WORD_RELATION_TYPES_FAILURE,
    payload: { error }
})

export const postAnnotation = (wordPairId, wordRelationTypeId, isHighConfidence) => ({
    type: POST_ANNOTATION,
    payload: { wordPairId, wordRelationTypeId, isHighConfidence }
})

export const postAnnotationSuccess = (score) => ({
    type: POST_ANNOTATION_SUCCESS,
    payload: { score }
})

export const postAnnotationFailure = (error) => ({
    type: POST_ANNOTATION_FAILURE,
    payload: { error }
})

const INITIAL_STATE = {
    wordRelationTypes: [],
    isLoading: true,
}

const reducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case POST_ANNOTATION:
        case FETCH_WORD_RELATION_TYPES:
            return {
                ...state,
                isLoading: true,
            }
        case POST_ANNOTATION_FAILURE:
        case POST_ANNOTATION_SUCCESS:
        case FETCH_WORD_RELATION_TYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case FETCH_WORD_RELATION_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                wordRelationTypes: payload
            }
        default:
            return state
    }
}

export default reducer
