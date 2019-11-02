import React from 'react'
import Center from 'modules/shared/Center'

const MainMenu = ({onBeginLogin, onBeginRegister}) => (
    <div>
        <Center className="mt-3"><h3 className="text-center">Selamat datang di</h3></Center>
        <Center className="mb-3"><h3 className="text-center"><strong>Main Kata</strong>!</h3></Center>
        <Center className="d-flex flex-column container">
            <button type="button" className="btn btn-outline-primary m-2" onClick={onBeginRegister}>Mulai bermain</button>
            <button type="button" className="btn btn-outline-primary m-3" onClick={onBeginLogin}>Lanjutkan permainan</button>
        </Center>
    </div>
)

export default MainMenu
