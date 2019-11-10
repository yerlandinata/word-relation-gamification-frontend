import React from 'react'
import { connect } from 'react-redux'
import { postPhoneNumber } from './reducer'
import Center from 'modules/shared/Center'
import { beginGame } from 'modules/MainPage/reducer'

class PhoneNumberComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: '',
            isPhoneInvalid: true,
        }

        this._onPhoneChange = this._onPhoneChange.bind(this)
        this._onSubmitPhoneNumber = this._onSubmitPhoneNumber.bind(this)
    }

    render() {
        return (
            <div className="container-fluid mt-3">

                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">No HP.</label>
                        <input type="tel" className={`form-control ${this.state.isPhoneInvalid ? 'is-invalid' : ''}`} id="phoneNumber" placeholder="08123456789" value={this.state.phoneNumber} onChange={this._onPhoneChange} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={this._onSubmitPhoneNumber}
                        disabled={this.props.isLoading || this.state.isPhoneInvalid}
                    >
                        Kirim
                    </button>
                    <button className="btn m-2 btn-outline-primary" onClick={this.props.cancel}>Kembali</button>
                    <Center className="m-3 text-center">Login gunakan no. HP dan tgl lahir untuk cek ranking lain kali!</Center>
                </form>


            </div>
        )
    }

    _onPhoneChange(event) {
        if (!isNaN(event.target.value) && !event.target.value.includes(' ') && event.target.value.length <= 16) {
            this.setState({
                phoneNumber: event.target.value,
                isPhoneInvalid: event.target.value.length < 8,
            })
        }
    }

    _onSubmitPhoneNumber(event) {
        event.preventDefault()
        if (this.state.phoneNumber.length >= 8) {
            this.props.submitPhone(parseInt(this.state.phoneNumber, 10))
        }
    }

}

const mapStateToProps = (state) => ({
    ...state.phoneNumberState,
})

const mapDispatchToProps = (dispatch) => ({
    submitPhone: (phoneNumber) => dispatch(postPhoneNumber(phoneNumber)),
    cancel: () => dispatch(beginGame()),
})

const PhoneNumber = connect(mapStateToProps, mapDispatchToProps)(PhoneNumberComponent)

export default PhoneNumber
