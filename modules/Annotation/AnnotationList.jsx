import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import AnnotationDetail from './components/AnnotationDetail'
import { postAnnotation } from './reducer'

class AnnotationList extends React.Component {
    constructor(props) {
        super(props)

        this._createAnnotationDescription = this._createAnnotationDescription.bind(this)
    }

    render() {
        return this.props.isLoading ? (<Center>loading..</Center>) : (
            <Center className="d-flex flex-column">
                {this.props.wordRelationTypes.map(
                    (wrt, i) =>
                        <div key={i} className="m-2">
                            <AnnotationDetail
                                desc={this._createAnnotationDescription(wrt.description)}
                                onSubmitLowConfidence={this._createLowConfidenceSubmissionHandler(wrt.id)}
                                onSubmitHighConfidence={this._createHighConfidenceSubmissionHandler(wrt.id)}
                            />
                        </div>
                )}
            </Center>
        )
    }

    _createAnnotationDescription(desc) {
        return desc.replace(/\%a/g, this.props.wordPair.word1).replace(/\%b/g, this.props.wordPair.word2)
    }

    _createLowConfidenceSubmissionHandler(wrtId) {
        return () => this.props.submitLowConfidence(this.props.wordPair.id, wrtId)
    }

    _createHighConfidenceSubmissionHandler(wrtId) {
        return () => this.props.submitHighConfidence(this.props.wordPair.id, wrtId)
    }
}

const mapStateToProps = (state) => ({
    ...state.annotationState,
    wordPair: state.wordPairState
})

const mapDispatchToProps = (dispatch) => ({
    submitLowConfidence: (wordPairId, wrtId) => dispatch(postAnnotation(wordPairId, wrtId, false)),
    submitHighConfidence: (wordPairId, wrtId) => dispatch(postAnnotation(wordPairId, wrtId, true))
})

const AnnotationListConnected = connect(mapStateToProps, mapDispatchToProps)(AnnotationList)

export default AnnotationListConnected
