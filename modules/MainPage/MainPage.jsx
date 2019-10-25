import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import WordPair from 'modules/WordPair/WordPair'
import { beginGame, STATE_PLAYING_GAME, STATE_MAIN_MENU, showLoginPage, STATE_LOGIN } from './reducer'
import AnnotationList from 'modules/Annotation/AnnotationList'
import MainMenu from './components/MainMenu'
import Login from 'modules/Login/Login'

class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 d-flex flex-column">
                    {(this.props.activity == STATE_LOGIN) && <Login />}
                    {(this.props.activity == STATE_MAIN_MENU) && <MainMenu onBeginAnon={this.props.beginGame} onBeginLogin={this.props.showLoginPage} />}
                    {(this.props.activity == STATE_PLAYING_GAME) && this._renderGame()}
                </div>
            </div>
        )
    }

    _renderGame() {
        return (
            <>
                <Center className="mb-3">
                    <h1>Ayo main kata</h1>
                </Center>
                <Center>
                    <WordPair />
                </Center>
                <Center className="m-3">
                    <div>Jawab:</div>
                </Center>
                <Center>
                    <AnnotationList />
                </Center>
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    activity: state.mainPageState
})

const mapDispatchToProps = (dispatch) => ({
    beginGame: () => dispatch(beginGame()),
    showLoginPage: () => dispatch(showLoginPage())
})

const MainPageConnected = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageConnected
