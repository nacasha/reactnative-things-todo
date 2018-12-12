import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import styles from './styles';

class Label extends PureComponent {
  render() {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{this.props.children}</Text>
      </View>
    )
  }
}

export default Label
