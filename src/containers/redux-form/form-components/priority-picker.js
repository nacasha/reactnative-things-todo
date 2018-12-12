import React, { Component } from 'react'
import { View, TouchableNativeFeedback } from 'react-native'

import styles from './styles';
import { Colors } from '../../../themes';

class PriorityPicker extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.input.value !== this.props.input.value) {
      return true
    }

    return false
  }

  renderButton(active, color, onPress) {
    return (
      <View style={styles.priorityButton}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#AAF', true)}>
          <View style={styles.priorityButtonInside}>
            <View style={[
              styles.priorityButtonIcon,
              active && styles.priorityButtonIconActive,
              { backgroundColor: color }
            ]} />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  render() {
    const { renderButton } = this
    const { input, label, options, meta: { touched, error, warning, hasError } } = this.props

    return (
      <View style={[styles.formInput, { flexDirection: 'row' }]}>
        {renderButton(input.value == 0, Colors.success, () => input.onChange(0) )}
        {renderButton(input.value == 1, Colors.info, () => input.onChange(1) )}
        {renderButton(input.value == 2, Colors.warning, () => input.onChange(2) )}
        {renderButton(input.value == 3, Colors.error, () => input.onChange(3) )}
      </View>
    )
  }
}

export default PriorityPicker
