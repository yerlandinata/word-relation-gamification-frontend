import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postLogin } from './reducer'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            phone: '',
            birthDate: '',
        }

        this._onBirthDateChange = this._onBirthDateChange.bind(this)
        this._onPhoneChange = this._onPhoneChange.bind(this)
        this._onSubmitLogin = this._onSubmitLogin.bind(this)
    }

    render() {
        return (
            <div className="container-fluid">
                <Center className="m-3"><p className="text-center">5 pemain akan diundi secara acak untuk memenangkan hadiah A.</p></Center>
                <Center className="m-3"><p className="text-center">5 pemain dengan skor tertinggi akan memenangkan hadiah B.</p></Center>
                <div className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="phone">No. HP</label>
                        <input type="tel" className="form-control" id="phone" placeholder="08123456789" value={this.state.phone} onChange={this._onPhoneChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">Tanggal Lahir (DDMMYYYY, contoh: 25121997)</label>
                        <input className="form-control" id="birthDate" placeholder="25121997" value={this.state.birthDate} onChange={this._onBirthDateChange} />
                    </div>
                    <button type="button" className="btn btn-primary m-2" onClick={this._onSubmitLogin} disabled={this.props.isLoading}>Lanjut</button>
                </div>
                <Center className="mt-2 d-flex flex-column">
                    <p className="text-center">Pemenang hadiah akan dihubungi melalui nomor telepon yang diberikan pemain</p>
                    <p className="text-center">Tanggal lahir digunakan sebagai kata sandi pemain untuk melanjutkan permainan</p>
                </Center>
            </div>
        )
    }

    _onPhoneChange(event) {
        if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
            this.setState({
                phone: event.target.value
            })
        }
    }

    _onBirthDateChange(event) {
        if (!isNaN(event.target.value) && !event.target.value.includes(' ')) {
            this.setState({
                birthDate: event.target.value
            })
        }
    }

    _onSubmitLogin() {
        this.props.submitLogin(this.state.phone, this.state.birthDate)
    }
}

const mapStateToProps = (state) => ({
    ...state.loginState,
})

const mapDispatchToProps = (dispatch) => ({
    submitLogin: (phone, birthDate) => dispatch(postLogin(phone, birthDate))
})

const LoginConnected = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginConnected
