import React from 'react'
import { connect } from 'react-redux'
import { beginGame, STATE_PLAYING_GAME, STATE_MAIN_MENU, showLoginPage, STATE_LOGIN, STATE_PROFILE, STATE_REGISTER, showRegisterPage } from './reducer'
import MainMenu from './components/MainMenu'
import Login from 'modules/Login/Login'
import Profile from 'modules/Profile/Profile'
import Game from 'modules/Game/Game'

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 d-flex flex-column">
                    {(this.props.activity == STATE_REGISTER) && <Login />}
                    {(this.props.activity == STATE_LOGIN) && <Login isLogin />}
                    {(this.props.activity == STATE_PROFILE) && <Profile />}
                    {(this.props.activity == STATE_MAIN_MENU) && 
                        <MainMenu onBeginAnon={this.props.beginGame} onBeginRegister={this.props.showRegisterPage} onBeginLogin={this.props.showLoginPage} />}
                    {(this.props.activity == STATE_PLAYING_GAME) && <Game />}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    activity: state.mainPageState
})

const mapDispatchToProps = (dispatch) => ({
    beginGame: () => dispatch(beginGame()),
    showLoginPage: () => dispatch(showLoginPage()),
    showRegisterPage: () => dispatch(showRegisterPage()),
})

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent)

export default MainPage
