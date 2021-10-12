import React from 'react'
import '../styles/global.scss'
import {Layout} from '../containers/Layout'
import {Login} from '../containers/Login'

const App = () => {
    return (
        <Layout>
            <Login/>
        </Layout>
    )
}

export {App}
