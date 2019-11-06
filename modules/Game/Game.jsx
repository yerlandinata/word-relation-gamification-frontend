import React from 'react'
import { connect } from 'react-redux'
import UserInfo from 'modules/UserInfo/UserInfo'
import Center from 'modules/shared/Center'
import { WORD_RELATION_TYPES } from './constants'
import GoldStandard from 'modules/GoldStandard/GoldStandard'
import { postAnnotation, restartGame } from './reducer'

class GameComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayHelp: false,
        }

        this._onSubmitAnnotation = this._onSubmitAnnotation.bind(this)
        this._onShowHelp = this._onShowHelp.bind(this)
        this._onHideHelp = this._onHideHelp.bind(this)
    }

    componentDidMount() {
        setTimeout(() => this.setState({displayHelp: true}), 4000)
        setTimeout(() => this.setState({displayHelp: false}), 18000)
    }

    render() {
        return (
            <div className="d-flex flex-column">
                <div className="container mb-3">
                    <UserInfo />
                </div>
                <Center>Clue:</Center>
                <Center>
                    <GoldStandard />
                </Center>
                <Center>
                    {this.state.displayHelp ? (
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
                        )}
                </Center>
                <Center className="m-3">
                    {!this.state.displayHelp && <div>Pilih yang tepat:</div>}
                </Center>
                <Center className="container-fluid d-flex flex-column">
                    {this.state.displayHelp ? this._renderHelp() : this._renderChoices()}
                </Center>
            </div>
        )
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

    _renderHelp() {
        return (
            <div>
                <div className="m-3">
                    <Center>
                        kucing <span className="h5 ml-1 mr-1">&#x21d2;</span> binatang
                    </Center>
                    <Center>
                        kucing adalah sejenis binatang
                    </Center>
                </div>
                <div className="m-3">
                    <Center>
                        hewan <span className="h5 ml-1 mr-1">&#x21d4;</span> binatang
                    </Center>
                    <Center>
                        hewan sama artinya dengan binatang
                    </Center>
                </div>
                <div className="m-3">
                    <Center className="m-2">
                        kabel <span className="h5 ml-1 mr-1">&#x21cf;</span> bintang
                    </Center>
                    <Center>
                        kabel bukan sejenis bintang dan
                    </Center>
                    <Center className="text-center">
                        kabel tidak sama artinya dengan bintang
                    </Center>
                </div>
                <Center className="mt-2 text-center">5 pemain dengan skor tertinggi berhak mendapatkan hadiah tanpa diundi</Center>
            </div>
        )
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
                    <Center className="m-3">Permainan selesai :)</Center>
                    <Center>Skor: {this.props.userInfo.score}</Center>
                    <Center>Ranking: {this.props.userInfo.rank}</Center>
                    <Center className="m-3 text-center">Login gunakan no. HP dan tgl lahir untuk cek ranking lain kali!</Center>
                    <Center className="m-3">
                        <button className="btn btn-primary" onClick={this.props.restartGame}>
                            Reset Score dan Main Lagi!
                        </button>
                    </Center>
                </div>
            )
        }
        return (
            <>{
                Object.values(WORD_RELATION_TYPES).map(
                    (wrt, i) =>
                        <button
                            key={i}
                            className="btn btn-outline-primary m-2"
                            onClick={this._onSubmitAnnotation(wrt.id)}
                        > {(
                            wrt.id != WORD_RELATION_TYPES.SKIP.id ?
                                (<>{this.props.targetPair.lhsWord} <span className="h5">{wrt.symbol}</span> {this.props.targetPair.rhsWord} </>) :
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
    restartGame: () => dispatch(restartGame()),
})

const Game = connect(mapStateToProps, mapDispatchToProps)(GameComponent)

export default Game
