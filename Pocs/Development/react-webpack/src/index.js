'use strict'

import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from 'react-dom'
// short recrutation para não usar o reactDOM e sim suas classes diretas
import { AppContainer } from 'react-hot-loader'
import App from './app'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}
