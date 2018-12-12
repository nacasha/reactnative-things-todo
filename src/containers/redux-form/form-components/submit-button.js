import React, { PureComponent } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'

import styles from './styles';

class SubmitButton extends PureComponent {
  get buttonText() {
    const { text } = this.props

    return text.toUpperCase()
  }

  render() {
    const { onPress } = this.props
    const { buttonText } = this

    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>{buttonText}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default SubmitButton
