import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { fethcRankings } from './reducer'

class RankingsComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRankings()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <span className="col-2 text-center">Rank</span>
                    <span className="col-6 text-center">Nama</span>
                    <span className="col-2 text-right">Skor</span>
                    <span className="col-2 text-right">Level</span>
                </div>
                {this.props.isLoading ? 'loading...' : this.props.players.map(
                    (player, i) => (
                        <div className="row" key={i}>
                            <span className="col-2">{player.rank}</span>
                            <span className="col-6 text-center">{player.fullName}</span>
                            <span className="col-2 text-right">{player.score}</span>
                            <span className="col-2 text-right">{player.level}</span>
                        </div>
                    )
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.rankingState,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRankings: () => dispatch(fethcRankings())
})

const Rankings = connect(mapStateToProps, mapDispatchToProps)(RankingsComponent)

export default Rankings
