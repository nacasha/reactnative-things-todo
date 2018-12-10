import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import AppRouter from './config/router';
import { Colors } from './themes';

export default class App extends Component {
  render() {
    StatusBar.setBackgroundColor(Colors.primaryDark)

    return <AppRouter />
  }
}
