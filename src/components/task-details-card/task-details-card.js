import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import PriorityBadge from '../priority-badge';

class TaskDetailsCard extends Component {
  render() {
    const { title, description, priority, date, category } = this.props.data

    return (
      <View style={styles.container}>
        <PriorityBadge priority={priority} />

        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>28 January 2018</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.category}>
            Category: {category}
          </Text>
        </View>
      </View>
    )
  }
}

export default TaskDetailsCard
