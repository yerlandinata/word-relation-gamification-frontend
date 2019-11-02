import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postProfile } from './reducer'

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            educationLevel: '',
            isNameInvalid: true,
            isEducationLevelInvalid: true,
        }

        this._onFullNameChange = this._onFullNameChange.bind(this)
        this._onEducationLevelChange = this._onEducationLevelChange.bind(this)
        this._onSubmitProfile = this._onSubmitProfile.bind(this)
    }

    render() {
        return (
            <div className="container-fluid">
                <Center className="m-3">
                    {!this._isAnonymous() && <p className="text-center">Ayo kita berkenalan ;)</p>}
                    {this._isAnonymous() && <p className="text-center">Pemain anonim tidak bisa mendapatkan hadiah.</p>}
                </Center>
                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">{this._isAnonymous() ? 'Player ID' : 'Player ID (No. HP)'}</label>
                        <input disabled type="tel" className="form-control" id="phoneNumber" value={this.props.phoneNumber} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">{this._isAnonymous() ? 'PIN' : 'PIN (Tanggal Lahir)'}</label>
                        <input disabled className="form-control" id="birthDate" value={this.props.birthDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Nama Lengkap (atau <i>display name</i> saja)</label>
                        <input className={`form-control ${this.state.isNameInvalid ? 'is-invalid' : ''}`} id="fullName" value={this.state.fullName} onChange={this._onFullNameChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="educationLevel">Pendidikan</label>
                        <select className={`form-control ${this.state.isEducationLevelInvalid ? 'is-invalid' : ''}`} value={this.state.educationLevel} onChange={this._onEducationLevelChange}>
                            <option value="">tingkat pendidikan kamu..</option>
                            <option value="Sedang SMA">Sedang SMA</option>
                            <option value="Lulus SMA">Lulus SMA</option>
                            <option value="Sedang S1">Sedang S1</option>
                            <option value="Lulus S1">Lulus S1</option>
                            <option value="Sedang Pascasarjana">Sedang Pascasarjana</option>
                            <option value="Lulus Pascasarjana">Lulus Pascasarjana</option>
                        </select>
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
                <Center className="m-3"><p className="text-center">Data yang Kamu berikan akan dirahasiakan</p></Center>
            </div>
        )
    }

    _isAnonymous() {
        return this.props.birthDate == 1
    }

    _onEducationLevelChange(event) {
        this.setState({
            educationLevel: event.target.value,
            isEducationLevelInvalid: event.target.value == "",
        })
    }

    _onFullNameChange(event) {
        if (event.target.value.length <= 64) {
            this.setState({
                fullName: event.target.value,
                isNameInvalid: event.target.value.length < 3,
            })
        }
    }

    _onSubmitProfile(event) {
        event.preventDefault()
        if (!this.state.isEducationLevelInvalid && !this.state.isNameInvalid) {
            this.props.submitProfile(this.props.phoneNumber, this.props.birthDate, this.state.fullName, this.state.educationLevel)
        }
    }
}

const mapStateToProps = (state) => ({
    ...state.profileState,
})

const mapDispatchToProps = (dispatch) => ({
    submitProfile: (phoneNumber, birthDate, fullName, educationLevel) => dispatch(postProfile(phoneNumber, birthDate, fullName, educationLevel))
})

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default Profile
