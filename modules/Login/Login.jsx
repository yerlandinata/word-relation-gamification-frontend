import React from 'react'
import { connect } from 'react-redux'
import Center from 'modules/shared/Center'
import { postLogin } from './reducer'

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            phoneNumber: '',
            isPhoneInvalid: true,
        }

        this._onPhoneChange = this._onPhoneChange.bind(this)
        this._onSubmitLogin = this._onSubmitLogin.bind(this)
    }

    render() {
        return (
            <div className="container-fluid mt-3">

                <form className="d-flex flex-column">
                    <div className="form-group">
                        <label htmlFor="phoneNumber">No. HP</label>
                        <input type="tel" className={`form-control ${this.state.isPhoneInvalid ? 'is-invalid' : ''}`} id="phoneNumber" placeholder="08123456789" value={this.state.phoneNumber} onChange={this._onPhoneChange} />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        onClick={this._onSubmitLogin}
                        disabled={this.props.isLoading || this.state.isPhoneInvalid}
                    >
                        Lanjut
                    </button>
                </form>
                {this.props.isError && <Center className="text-danger">No. HP tidak terdaftar</Center>}
                <Center className="mt-2 d-flex flex-column">
                    {!this.props.isLogin ? (<p className="text-center">Permainan ini berhadiah!</p>) : (
                        <div>
                            <p className="text-center">Selamat datang kembali!</p>
                            <p className="text-center">
                                Sebelumnya saya ingin berterima kasih karena
                                Kamu bersedia untuk berpartisipasi dalam permainan ini.
                                Permainan ini adalah bagian dari penelitian saya, Yudhistira Erlandinata (Fasilkom UI), tentang &quot;Relasi Semantik dalam Bahasa Indonesia&quot;.
                                Interaksi dalam permainan akan direkam dan berpengaruh terhadap hasil penelitian ini.
                             </p>
                        </div>
                    )}
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

    _onSubmitLogin(event) {
        event.preventDefault()
        if (this.state.phoneNumber.length >= 8) {
            this.props.submitLogin(parseInt(this.state.phoneNumber, 10))
        }
    }

}

const mapStateToProps = (state, ownProps) => ({
    ...state.loginState,
    isLogin: ownProps.isLogin,
})

const mapDispatchToProps = (dispatch) => ({
    submitLogin: (phoneNumber) => dispatch(postLogin(phoneNumber))
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent)

export default Login
