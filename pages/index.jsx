import React from 'react'
import { useRouter } from 'next/router'
import MainPage from 'modules/MainPage/MainPage'

const Index = () => {
    const router = useRouter()

    let source = 'default'

    if (router.query.src) {
        source = router.query.src
    }

    return <MainPage source={source} />
}

export default Index
