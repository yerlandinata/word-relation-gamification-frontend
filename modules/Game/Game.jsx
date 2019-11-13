import React from 'react'
import { connect } from 'react-redux'
import UserInfo from 'modules/UserInfo/UserInfo'
import Center from 'modules/shared/Center'
import { WORD_RELATION_TYPES } from './constants'
import GoldStandard from 'modules/GoldStandard/GoldStandard'
import { postAnnotation, levelUpGame, fetchPair } from './reducer'
import Tutorial from './components/Tutorial'
import { showSetPhoneNumberPage } from 'modules/MainPage/reducer'
import Rankings from 'modules/Rankings/Rankings'

class GameComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayHelp: false,
            showTutorial: false,
        }

        this._onSubmitAnnotation = this._onSubmitAnnotation.bind(this)
        this._onShowHelp = this._onShowHelp.bind(this)
        this._onHideHelp = this._onHideHelp.bind(this)
        this._onExitTutorial = this._onExitTutorial.bind(this)
    }

    componentDidMount() {
        if (this.props.userInfo.score == 0) {
            this.setState({showTutorial: true})
        } else {
            this.props.fetchFirstPair()
        }
    }

    render() {
        return this.state.showTutorial ? <Tutorial onExit={this._onExitTutorial} /> : !this.props.isError ? (
            <div className="d-flex flex-column">
                <div className="container mb-3">
                    <UserInfo />
                </div>
                <Center className="m-3">
                    {!this.state.displayHelp && <div>Pilih yang tepat:</div>}
                </Center>
                <Center className="container-fluid d-flex flex-column">
                    {this.state.displayHelp ? <GoldStandard /> : this._renderChoices()}
                </Center>
                <Center>
                    {!this.props.isShowingAddedScore && this.props.targetPair && (this.state.displayHelp ? (
                        <button
                            className={`btn btn-sm btn-primary m-2`}
                            onClick={this._onHideHelp}
                        >
                            Lanjutkan permainan
                        </button>
                    ) : (
                            <button
                                className={`btn btn-sm btn-info m-2`}
                                onClick={this._onShowHelp}
                            >
                                Bantuan permainan
                            </button>
                        ))}
                </Center>
            </div>
        ) : <Center>Permainan berakhir!</Center>
    }

    _onExitTutorial() {
        this.setState({showTutorial: false})
        this.props.fetchFirstPair()
    }

    _onShowHelp() {
        setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500)
        this.setState({
            displayHelp: true,
        })
    }

    _onHideHelp() {
        this.setState({
            displayHelp: false,
        })
    }

    _renderChoices() {
        if (this.props.isLoading) {
            return <Center>loading..</Center>
        } else if (this.props.isShowingAddedScore) {
            return <Center className={this.props.addedScore > 0 ? 'text-success' : 'text-danger'}>
                {this.props.addedScore > 0 && '+'} <h3>{this.props.addedScore}</h3>
            </Center>
        } else if (!this.props.targetPair) {
            return (
                <div>
                    <Center className="m-3">Level {this.props.userInfo.level} selesai :)</Center>
                    <Center>Skor: {this.props.userInfo.score}</Center>
                    <Center>Ranking: {this.props.userInfo.rank}</Center>
                    {this.props.userInfo.phoneNumber < 1000006 && 
                    <Center>
                        <button className="btn btn-primary m-2" onClick={this.props.setPhoneNumber}>
                            Atur nomor HP untuk mendapat hadiah
                        </button>                    
                    </Center>
                    }
                    <Center className="m-3 d-flex flex-column">
                        <button className={`btn btn${this.props.userInfo.phoneNumber < 1000006 ? '-outline' : ''}-primary`} onClick={this.props.levelUpGame}>
                            Lanjut ke level berikutnya
                        </button>
                    </Center>
                    <div className="mt-3">
                        <Rankings />
                    </div> 
                </div>
            )
        }
        return (
            <>{
                Object.values(WORD_RELATION_TYPES).map(
                    (wrt, i) =>
                        <button
                            key={i}
                            className="btn btn-outline-primary m-2 p-1"
                            onClick={this._onSubmitAnnotation(wrt.id)}
                        > {(
                            wrt.id != WORD_RELATION_TYPES.SKIP.id ?
                                (<>{this.props.targetPair.lhsWord} <span className="h4 mr-1 ml-1">{wrt.symbol}</span> {this.props.targetPair.rhsWord} </>) :
                                (<>skip</>)
                        )}
                        </button>
                )
            }</>
        )
    }

    _onSubmitAnnotation(wrtId) {
        return () =>
            this.props.submitAnnotation(
                this.props.targetPair.id, wrtId, (new Date()).getTime() - this.props.targetPair.beginTime
            )
    }
}

const mapStateToProps = (state) => ({
    ...state.gameState,
    userInfo: state.userInfoState,
})

const mapDispatchToProps = (dispatch) => ({
    submitAnnotation: (wordPairId, wordRelationTypeId, time) => dispatch(postAnnotation(wordPairId, wordRelationTypeId, time)),
    levelUpGame: () => dispatch(levelUpGame()),
    fetchFirstPair: () => dispatch(fetchPair()),
    setPhoneNumber: () => dispatch(showSetPhoneNumberPage()),
})

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent)

export default Game
