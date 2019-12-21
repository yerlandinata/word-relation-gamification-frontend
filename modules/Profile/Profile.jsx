import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postProfile } from './reducer'

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            isNameInvalid: true,
        }

        this._ondisplayNameChange = this._ondisplayNameChange.bind(this)
        this._onSubmitProfile = this._onSubmitProfile.bind(this)
    }

    render() {
        return (
            <div className="container-fluid">
                <Center className="m-3">
                    <p className="text-center">Ayo kita berkenalan ;)</p>
                </Center>
                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="displayName"><i>Display Name</i> (untuk public scoreboard)</label>
                        <input className={`form-control ${this.state.isNameInvalid ? 'is-invalid' : ''}`} id="displayName" value={this.state.displayName} onChange={this._ondisplayNameChange}/>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={this._onSubmitProfile}
                        disabled={this.props.isLoading || this.state.isNameInvalid}
                    >
                        Lanjut
                    </button>
                </form>
                <Center className="d-flex flex-column m-3">
                    <p className="text-center">Salam kenal! Nama ku Yudhistira Erlandinata, perancang game ini.</p>
                    <p className="text-center">
                        Sebelumnya saya ingin berterima kasih karena
                        Kamu bersedia untuk berpartisipasi dalam permainan ini.
                        Permainan ini adalah bagian dari penelitian saya tentang &quot;Relasi Semantik dalam Bahasa Indonesia&quot;.
                        Interaksi dalam permainan akan direkam dan berpengaruh terhadap hasil penelitian ini.
                    </p>
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

    _onSubmitProfile(event) {
        event.preventDefault()
        if (!this.state.isNameInvalid) {
            this.props.submitProfile(
                (new Date()).getTime() % 1000003,
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
    submitProfile: (phoneNumber, displayName, campaignSource) => dispatch(postProfile(phoneNumber, displayName, campaignSource))
})

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)

export default Profile
