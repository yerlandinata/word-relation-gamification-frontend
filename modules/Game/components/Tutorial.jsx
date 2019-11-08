import React from 'react'
import Center from 'modules/shared/Center'
import getConfig from "next/config";
import { WORD_RELATION_TYPES } from '../constants';
import GoldStandard from 'modules/GoldStandard/GoldStandard';
import UserInfo from 'modules/UserInfo/UserInfo';

const { publicRuntimeConfig } = getConfig();

const TUTORIAL_STAGE = {
    BRIEF: 0,
    CHOICES: 1,
    ARROWS: 2,
    CHOOSE: 3,
    CLUE: 4,
    PRIZE: 5,
}

class Tutorial extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: TUTORIAL_STAGE.BRIEF
        }

        this._onNextButtonPressed = this._onNextButtonPressed.bind(this)
        this._onBackButtonPressed = this._onBackButtonPressed.bind(this)
    }

    componentDidMount() {
        this.setState({ stage: TUTORIAL_STAGE.BRIEF })
    }

    render() {
        switch (this.state.stage) {
            case TUTORIAL_STAGE.BRIEF:
                return (<>{this._renderBrief()}</>)
            case TUTORIAL_STAGE.CHOICES:
                return (<>{this._renderChoices()}</>)
            case TUTORIAL_STAGE.ARROWS:
                return (<>{this._renderArrows()}</>)
            case TUTORIAL_STAGE.CHOOSE:
                return (<>{this._renderCorrectExample()}</>)
            case TUTORIAL_STAGE.CLUE:
                return (<>{this._renderClues()}</>)
            default:
                return (<>{this._renderPrize()}</>)

        }
    }

    _renderBrief() {
        return (
            <div className="d-flex flex-column mt-5">
                <Center className="text-center mt-5 mb-2">
                    Selamat datang di permainan Main Kata! <br />
                    Ini adalah permainan tebak-tebakan hubungan antara dua buah kata.<br />
                    Kamu harus membuat tebakan benar sebanyak mungkin dalam waktu {Math.floor((publicRuntimeConfig.gameTimeLimitMs) / 60000)} menit
                </Center>
                <Center>
                    {this._renderNavButtons()}
                </Center>
            </div>
        )
    }

    _renderChoices() {
        return (
            <div>
                <Center>
                    {this._renderNavButtons()}
                </Center>
                <Center className="text-center mt-3 mb-2">
                    Permainan terdiri atas beberapa ronde.<br />
                    Setiap rondenya, kamu akan diberi sebuah pasangan kata.<br />
                    Kamu harus menebak hubungan kata yang diberikan.<br />
                    Sebagai contoh, kali ini pasangan kata yang diberikan adalah anjing dan binatang.<br />
                    Pilihan hubungan kata yang diberikan selalu sama, yaitu seperti berikut:
                </Center>
                <Center className="d-flex flex-column">
                    {
                        Object.values(WORD_RELATION_TYPES).map(
                            (wrt, i) =>
                                <button
                                    key={i}
                                    className="btn btn-outline-primary m-2"
                                > {(
                                    wrt.id != WORD_RELATION_TYPES.SKIP.id ?
                                        (<>anjing <span className="h5">{wrt.symbol}</span> binatang </>) :
                                        (<>skip</>)
                                )}
                                </button>
                        )
                    }
                </Center>
            </div>
        )
    }

    _renderArrows() {
        return (
            <div className="d-flex flex-column">
                <Center className="text-center mt-3 mb-2">
                    Terdapat tiga jenis pilihan dan pilihan skip untuk setiap pasangan kata.<br />
                    Berikut adalah penjelasan untuk masing-masing pilihan:
                </Center>
                <div>
                    <div className="m-3">
                        <Center>
                            kucing <span className="h5 ml-1 mr-1">&#x21d2;</span> binatang
                        </Center>
                        <Center className="text-center">
                            kucing adalah sejenis binatang
                        </Center>
                    </div>
                    <div className="m-3">
                        <Center>
                            hewan <span className="h5 ml-1 mr-1">&#x21d4;</span> binatang
                        </Center>
                        <Center className="text-center">
                            hewan sama artinya dengan binatang (sinonim)
                        </Center>
                    </div>
                    <div className="m-3">
                        <Center className="m-2">
                            kabel <span className="h5 ml-1 mr-1">&#x21cf;</span> bintang
                        </Center>
                        <Center className="text-center">
                            kabel bukan sejenis bintang dan
                        </Center>
                        <Center className="text-center">
                            kabel tidak sama artinya dengan bintang
                        </Center>
                    </div>
                </div>
                <Center>
                    {this._renderNavButtons()}
                </Center>
            </div>
        )
    }

    _renderCorrectExample() {
        return (
            <div>
                <Center>
                    {this._renderNavButtons()}
                </Center>
                <Center className="text-center mt-3 mb-2">
                    Kembali ke contoh awal, jika diberikan pasangan kata anjing dan binatang,<br />
                    maka pilihan yang benar adalah:
                </Center>
                <Center className="d-flex flex-column">
                    {
                        Object.values(WORD_RELATION_TYPES).map(
                            (wrt, i) =>
                                <button
                                    key={i}
                                    className={`btn btn${wrt != WORD_RELATION_TYPES.HYPONYMY ? '-outline' : ''}-primary m-2`}
                                > {(
                                    wrt.id != WORD_RELATION_TYPES.SKIP.id ?
                                        (<>anjing <span className="h5">{wrt.symbol}</span> binatang </>) :
                                        (<>skip</>)
                                )}
                                </button>
                        )
                    }
                </Center>
            </div>
        )
    }

    _renderClues() {
        return (
            <div className="d-flex flex-column">
                <Center>
                    {this._renderNavButtons()}
                </Center>
                <Center className="text-center mt-3 mb-2">
                    Pada setiap ronde, kamu juga akan diberikan beberapa clue.<br />
                    Clue yang diberikan berupa contoh pasangan kata dan hubungannya yang benar.<br />
                    Clue akan ditampilkan seperti berikut:
                </Center>
                <Center>
                    <GoldStandard />
                </Center>
            </div>
        )
    }

    _renderPrize() {
        return (
            <div className="d-flex flex-column">
                <div className="container mb-3">
                    <UserInfo />
                </div>
                <Center className="mt-3 mb-2 d-flex flex-column">
                    <p className="text-center">
                        Skor, ranking, dan sisa waktu ditampilkan di bagian atas layar Kamu. <br/>
                        Jika Kamu berhasil mencapai ranking final 10 besar, maka Kamu berhak mendapatkan hadiah berupa voucher GOPAY/OVO senilai Rp20.000. <br/>
                        Tetapi, ranking final dihitung di akhir bulan November 2019 <br/>
                        Jadi, ranking yang ditampilkan sekarang hanyalah ranking sementara. <br/>
                        Kamu bisa kembali lagi dan login lain kali untuk mengecek ranking kamu. <br/>
                        Jika ranking Kamu turun, Kamu bisa coba bermain lagi!
                    </p>
                    <p className="text-center">
                        <i>Jika kamu tadi tidak memberikan nomor telepon, bagaimana kami bisa menghubungi kamu untuk memberikan hadiah, duh!</i>
                    </p>
                </Center>
                <Center>
                    {this._renderNavButtons()}
                </Center>
            </div>
        )
    }

    _renderNavButtons() {
        return (
            <div className="d-flex flex-row mt-3 justify-content-center">
                {this.state.stage != TUTORIAL_STAGE.BRIEF && <button onClick={this._onBackButtonPressed} className="btn btn-sm btn-outline-primary m-2">Kembali</button>}
                {this.state.stage != TUTORIAL_STAGE.PRIZE && <button onClick={this._onNextButtonPressed} className="btn btn-sm btn-primary m-2">Lanjut</button>}
                {this.state.stage == TUTORIAL_STAGE.PRIZE && <button onClick={this.props.onExit} className="btn btn-md btn-primary m-2">Mulai bermain!</button>}
            </div>
        )
    }

    _onNextButtonPressed() {
        this.setState({ stage: this.state.stage + 1 })
    }

    _onBackButtonPressed() {
        this.setState({ stage: this.state.stage - 1 })
    }

}

export default Tutorial
