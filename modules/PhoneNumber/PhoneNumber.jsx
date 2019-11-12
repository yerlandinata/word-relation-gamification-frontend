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
            name: '',
            isPhoneInvalid: true,
            isNameInvalid: true,
        }

        this._onPhoneChange = this._onPhoneChange.bind(this)
        this._onNameChange = this._onNameChange.bind(this)
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
                    <div className="form-group">
                        <label htmlFor="name">Atas nama:</label>
                        <input className={`form-control ${this.state.isNameInvalid ? 'is-invalid' : ''}`} id="name" placeholder="Nama Lengkap Kamu" value={this.state.name} onChange={this._onNameChange} />
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
                    <Center className="m-3 text-center">Login gunakan no. HP untuk cek ranking dan main lagi!</Center>
                </form>

                <Center className="d-flex flex-column text-justify">
                    <p className="mb-3">Data yang Kamu berikan di halaman ini akan dirahasiakan.</p>
                    <p>
                        Permainan ini adalah bagian dari penelitian &quot;Ekstraksi Relasi Kata&quot;
                        yang dikerjakan oleh Yudhistira Erlandinata, Mahasiswa Fakultas Ilmu Komputer Universitas Indonesia. <br/>
                        (yudhistira.erlandinata@ui.ac.id)
                    </p>
                    <p>
                        Apabila Kamu menang, Kamu akan dihubungi oleh Yudhistira di awal Januari 2020
                    </p>
                    <p>
                        Untuk memastikan bahwa yang menghubungi Kamu adalah Yudhistira, ini adalah informasi yang hanya diketahui oleh kita berdua, untuk verifikasi:
                    </p>
                    <p className="text-center">Nama pemain: {this.props.userInfo.displayName}</p>
                    <p className="text-center">per {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })} mencapai:</p>
                    <p className="text-center">Skor: {this.props.userInfo.score} Level: {this.props.userInfo.level}</p>
                </Center>

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

    _onNameChange(event) {
        if (!(/\d/.test(event.target.value)) && event.target.value.length <= 64) {
            this.setState({
                name: event.target.value,
                isNameInvalid: event.target.value.length < 3,
            })
        }
    }

    _onSubmitPhoneNumber(event) {
        event.preventDefault()
        if (!this.state.isPhoneInvalid && !this.state.isNameInvalid) {
            this.props.submitPhone(parseInt(this.state.phoneNumber, 10), this.state.name)
        }
    }

}

const mapStateToProps = (state) => ({
    ...state.phoneNumberState,
    userInfo: state.userInfoState,
})

const mapDispatchToProps = (dispatch) => ({
    submitPhone: (phoneNumber, name) => dispatch(postPhoneNumber(phoneNumber, name)),
    cancel: () => dispatch(beginGame()),
})

const PhoneNumber = connect(mapStateToProps, mapDispatchToProps)(PhoneNumberComponent)

export default PhoneNumber
