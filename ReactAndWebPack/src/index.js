'use strict'

import React from 'react' 
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader' 
import App from './app'

const handleApp = document.getElementById('app')
      
const renderApp = (NextApp) => {
    render (
        <AppContainer>
            <NextApp />
        </ AppContainer>,
        handleApp
    )
}

renderApp(App)

if(module.hot) {
  module.hot.accept('./app', () => {
     const NextApp = require('./app').default
     renderApp(NextApp)
   })
}