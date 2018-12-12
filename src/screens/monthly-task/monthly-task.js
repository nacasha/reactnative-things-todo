import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

import styles from './styles';

class MonthlyTaskScreen extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Work in Progress</Text>
      </ScrollView>
    )
  }
}

export default MonthlyTaskScreen
