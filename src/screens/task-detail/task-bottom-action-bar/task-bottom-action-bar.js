import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';

class TaskBottomActionBar extends Component {
  shouldComponentUpdate() {
    return false
  }

  renderButton(icon, onPress) {
    return (
      <TouchableNativeFeedback onPress={() => onPress()}>
        <View style={styles.button}>
          <Icon name={icon} style={styles.iconButton} />
        </View>
      </TouchableNativeFeedback>
    )
  }

  render() {
    const { renderButton } = this
    const { onPressEdit, onPressTrash, onPressLater, onPressDone } = this.props

    return (
      <View style={styles.container}>
        {renderButton('delete-outline', onPressTrash)}
        {renderButton('square-edit-outline', onPressEdit)}
        {renderButton('clock-outline', onPressLater)}
        {renderButton('clipboard-check-outline', onPressDone)}
      </View>
    )
  }
}

export default TaskBottomActionBar
