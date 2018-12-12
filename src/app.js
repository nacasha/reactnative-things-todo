import React, { Component } from 'react'
import { StatusBar, YellowBox } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Colors } from './themes'
import AppRouter from './config/router'
import configureStore from './config/configure-store';


if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  // whyDidYouUpdate(React, { exclude: /^YellowBox/ })
}

console.disableYellowBox = true

const { store, persistor } = configureStore()

export default class App extends Component {
  render() {
    StatusBar.setBackgroundColor(Colors.primaryDark)

    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </StoreProvider>
    )
  }
}
