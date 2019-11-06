import React from 'react'
import { connect } from 'react-redux'
import TimeLimit from './components/TimeLimit'


const UserInfoComponent = ({fullName, score, rank, elapsedTime}) => (
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
            <span>Score: {score}</span>
            <span>Rank: {rank}</span>
        </div>
        <div className="d-flex flex-column" style={{width: '50%'}}>
            <span className="text-right">{fullName}</span>
            <TimeLimit elapsedTime={elapsedTime} />
        </div>
    </div>
)



const mapStateToProps = (state) => ({
    ...state.userInfoState,
})

const UserInfo = connect(mapStateToProps)(UserInfoComponent)

export default UserInfo
