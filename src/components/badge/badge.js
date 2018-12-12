import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { Colors } from '../../themes';

class Badge extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { color, label } = this.props

    const colors = [
      Colors.success,
      Colors.info,
      Colors.warning,
      Colors.error
    ]
    const badgeColor = colors[color]

    return (
      <View style={styles.container}>
        <View style={styles.priorityContainer}>
          <View style={[styles.triangleCorner, { borderRightColor: badgeColor }]} />
          <View style={[styles.priorityBox, { backgroundColor: badgeColor }]}>
            <Text style={styles.priorityText}>{label}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Badge
