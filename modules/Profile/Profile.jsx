import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postProfile } from './reducer'

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            birthDate: '',
            isBirthDateInvalid: true,
            isNameInvalid: true,
        }

        this._ondisplayNameChange = this._ondisplayNameChange.bind(this)
        this._onSubmitProfile = this._onSubmitProfile.bind(this)
        this._onBirthDateChange = this._onBirthDateChange.bind(this)
    }

    render() {
        return (
            <div className="container-fluid">
                <Center className="m-3">
                    <p className="text-center">Ayo kita berkenalan ;)</p>
                </Center>
                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="displayName"><i>Display Name</i> (untuk scoreboard)</label>
                        <input className={`form-control ${this.state.isNameInvalid ? 'is-invalid' : ''}`} id="displayName" value={this.state.displayName} onChange={this._ondisplayNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">Tanggal lahir DDMMYYYY (contoh: 25121997)</label>
                        <input type="tel" className={`form-control ${this.state.isBirthDateInvalid ? 'is-invalid' : ''}`} placeholder="25121997" id="birthDate" value={this.state.birthDate} onChange={this._onBirthDateChange} />
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary m-2"
                        onClick={this._onSubmitProfile}
                        disabled={this.props.isLoading || this.state.isEducationLevelInvalid || this.state.isNameInvalid}
                    >
                        Lanjut
                    </button>
                </form>
                <Center className="d-flex flex-column m-3">
                    <p className="text-center">Oh, kita kan berkenalan! Salam kenal! Nama ku Yudhistira Erlandinata, perancang game ini.</p>
                </Center>
            </div>
        )
    }

    _ondisplayNameChange(event) {
        if (event.target.value.length <= 64) {
            this.setState({
                displayName: event.target.value,
                isNameInvalid: event.target.value.length < 3,
            })
        }
    }

    _onBirthDateChange(event) {
        if (!isNaN(event.target.value) && !event.target.value.includes(' ') && event.target.value.length <= 8) {
            this.setState({
                birthDate: event.target.value,
                isBirthDateInvalid: event.target.value.length < 8,
            })
        }
    }

    _onSubmitProfile(event) {
        event.preventDefault()
        if (!this.state.isNameInvalid && !this.state.isBirthDateInvalid) {
            this.props.submitProfile(
                (new Date()).getTime() % 1000003,
                parseInt(this.state.birthDate, 10),
                this.state.displayName,
                this.props.source,
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state.profileState,
    source: ownProps.source,
})

const mapDispatchToProps = (dispatch) => ({
    submitProfile: (phoneNumber, birthDate, displayName, educationLevel) => dispatch(postProfile(phoneNumber, birthDate, displayName, educationLevel))
})

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default Profile
