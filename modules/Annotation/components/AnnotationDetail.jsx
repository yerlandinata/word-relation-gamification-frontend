import React from 'react'
import Center from 'modules/shared/Center'

class AnnotationDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isDetailed: false,
        }

        this._onShowDetail = this._onShowDetail.bind(this)
    }

    render() {
        return this.state.isDetailed ? this._renderDetailed() : this._renderBrief()
    }

    _renderBrief() {
        return (
            <Center>
                <button type="button" className="btn btn-outline-success" onClick={this._onShowDetail}>{this.props.desc}</button>
            </Center>
        )
    }

    _onShowDetail() {
        this.setState({
            isDetailed: true,
        })
    }

    _renderDetailed() {
        return (
            <div className="card border-success">
                <div className="card-body text-success text-center p-2">
                    <h5 className="card-title">{this.props.desc}</h5>
                    <div className="d-flex flex-row justify-content-center">
                        <button type="button" className="btn btn-outline-success m-2" onClick={this.props.onSubmitLowConfidence}>&#x2713;</button>
                        <button type="button" className="btn btn-outline-success m-2" onClick={this.props.onSubmitHighConfidence}>&#x2713; &#x2713; &#x2713;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnnotationDetail
