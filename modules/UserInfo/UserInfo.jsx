import React from 'react'
import { connect } from 'react-redux'

const UserInfoComponent = ({fullName, score, rank}) => (
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
            <span>Score: {score}</span>
            <span>Rank: {rank}</span>
        </div>
        <span>{fullName}</span>
    </div>
)

const mapStateToProps = (state) => ({
    ...state.userInfoState,
})

const UserInfo = connect(mapStateToProps)(UserInfoComponent)

export default UserInfo
