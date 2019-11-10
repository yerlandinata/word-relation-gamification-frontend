import React from 'react'
import { connect } from 'react-redux'
import TimeLimit from './components/TimeLimit'


const UserInfoComponent = ({fullName, score, rank, elapsedTime, level}) => (
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
            <span>Score: {score}</span>
            <span>Rank: {rank}</span>
            <span>Level: {level}</span>
        </div>
        <div className="d-flex flex-column" style={{width: '50%'}}>
            <span className="text-right mb-2">{fullName}</span>
            <TimeLimit elapsedTime={elapsedTime} />
        </div>
    </div>
)



const mapStateToProps = (state) => ({
    ...state.userInfoState,
})

const UserInfo = connect(mapStateToProps)(UserInfoComponent)

export default UserInfo
