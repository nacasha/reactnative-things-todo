import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

import styles from './styles';

class TaskSearchbar extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search Task"
          spellCheck={false}
          autoCorrect={false}
          style={styles.searchbox}
        />
      </View>
    )
  }
}

export default TaskSearchbar
