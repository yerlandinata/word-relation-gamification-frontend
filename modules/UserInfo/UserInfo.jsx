import React from 'react'
import { connect } from 'react-redux'
import TimeLimit from './components/TimeLimit'


const UserInfoComponent = ({displayName, score, rank, elapsedTime, level}) => (
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
            <span>Annotation Count: {score}</span>
        </div>
        <div className="d-flex flex-column" style={{width: '50%'}}>
            <span className="text-right mb-2">{displayName}</span>
            {/* <TimeLimit elapsedTime={elapsedTime} /> */}
            <span className="text-right">{Math.floor(elapsedTime/60000)} m {Math.floor((elapsedTime % 60000)/1000)} s</span>
        </div>
    </div>
)



const mapStateToProps = (state) => ({
    ...state.userInfoState,
})

const UserInfo = connect(mapStateToProps)(UserInfoComponent)

export default UserInfo
