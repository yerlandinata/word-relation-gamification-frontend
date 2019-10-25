import React from 'react'
import Center from 'modules/shared/Center'

class WordPairExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowing: false
        }

        this._onShowHintClick = this._onShowHintClick.bind(this)
    }

    render() {
        return this.state.isShowing ? this._renderShowing() : this._renderHiding()
    }

    _renderShowing() {
        return (
            <Center>
                {this.props.sentence}
            </Center>
        )
    }

    _renderHiding() {
        return (
            <button type="button" className="btn btn-outline-primary" onClick={this._onShowHintClick}>Hint</button>
        )
    }

    _onShowHintClick() {
        this.setState({
            isShowing: true
        })
    }
}

export default WordPairExample
