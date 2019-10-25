import React from 'react'
import Center from 'modules/shared/Center'

const MainMenu = ({onBeginAnon, onBeginLogin}) => (
    <div>
        <Center className="mt-3"><h3 className="text-center">Selamat datang di</h3></Center>
        <Center className="mb-3"><h3 className="text-center"><strong>Main Kata</strong>!</h3></Center>
        <div className="d-flex flex-column">
            <button type="button" className="btn btn-outline-primary m-2" onClick={onBeginAnon}>Bermain tanpa hadiah</button>
            <button type="button" className="btn btn-outline-primary m-2" onClick={onBeginLogin}>Bermain dengan hadiah</button>
        </div>
        <Center className="mt-2"><span className="text-center">Beberapa data pribadi Anda akan dibutuhkan untuk memperoleh hadiah</span></Center>
    </div>
)

export default MainMenu
