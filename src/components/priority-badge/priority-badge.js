import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { Colors } from '../../themes';

class PriorityBadge extends Component {
  render() {
    const { priority } = this.props

    const colors = [
      Colors.success,
      Colors.info,
      Colors.warning,
      Colors.error
    ]
    const labels = [
      'Have to do',
      'Nice to have',
      'Important',
      'Urgent'
    ]
    const badgeColor = colors[priority]

    return (
      <View style={styles.container}>
        <View style={styles.priorityContainer}>
          <View style={[styles.triangleCorner, { borderRightColor: badgeColor }]}/>
          <View style={[styles.priorityBox, { backgroundColor: badgeColor }]}>
            <Text style={styles.priorityText}>{labels[priority]}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PriorityBadge
