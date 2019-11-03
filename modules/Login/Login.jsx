import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postLogin } from './reducer'

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: '',
            birthDate: '',
            isPhoneInvalid: true,
            isBirthDateInvalid: true,
        }

        this._onBirthDateChange = this._onBirthDateChange.bind(this)
        this._onPhoneChange = this._onPhoneChange.bind(this)
        this._onSubmitLogin = this._onSubmitLogin.bind(this)
        this._onSubmitLoginAnonymous = this._onSubmitLoginAnonymous.bind(this)
    }

    render() {
        return (
            <div className="container-fluid mt-3">

                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">{this.props.isLogin ? 'Player ID' : 'No. HP'}</label>
                        <input type="tel" className={`form-control ${this.state.isPhoneInvalid ? 'is-invalid' : ''}`} id="phoneNumber" placeholder="08123456789" value={this.state.phoneNumber} onChange={this._onPhoneChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">{this.props.isLogin ? 'PIN' : 'Tanggal Lahir DDMMYYYY (contoh: 25121997)'}</label>
                        <input type="tel" className={`form-control ${this.state.isBirthDateInvalid ? 'is-invalid' : ''}`} id="birthDate" placeholder="25121997" value={this.state.birthDate} onChange={this._onBirthDateChange} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={this._onSubmitLogin}
                        disabled={this.props.isLoading || this.state.isBirthDateInvalid || this.state.isPhoneInvalid}
                    >
                        Lanjut
                    </button>
                    {!this.props.isLogin && <button
                        className="btn btn-outline-primary m-2"
                        onClick={this._onSubmitLoginAnonymous}
                    >
                        Lanjut sebagai anonim
                    </button>}
                </form>
                <Center className="mt-2 d-flex flex-column">
                    {!this.props.isLogin ? (<p className="text-center">Permainan ini berhadiah!</p>) : (<p className="text-center">Selamat datang kembali!</p>)}
                    <p className="text-center">Tanggal lahir digunakan sebagai PIN pemain untuk melanjutkan permainan</p>
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

    _onBirthDateChange(event) {
        if (!isNaN(event.target.value) && !event.target.value.includes(' ') && event.target.value.length <= 8) {
            this.setState({
                birthDate: event.target.value,
                isBirthDateInvalid: event.target.value.length < 8,
            })
        }
    }

    _onSubmitLogin(event) {
        event.preventDefault()
        if (this.state.phoneNumber.length >= 8 && this.state.birthDate.length >= 8) {
            this.props.submitLogin(parseInt(this.state.phoneNumber, 10), parseInt(this.state.birthDate, 10))
        }
    }

    _onSubmitLoginAnonymous() {
        event.preventDefault()
        this.props.submitLogin((new Date()).getTime() % 1000003, 1234)
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state.loginState,
    isLogin: ownProps.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
    submitLogin: (phoneNumber, birthDate) => dispatch(postLogin(phoneNumber, birthDate))
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
