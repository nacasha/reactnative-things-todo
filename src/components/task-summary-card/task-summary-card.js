import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class TaskSummaryCard extends Component {
  get todayDate() {
    const date = new Date()

    var monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    var day = date.getDate()
    var monthIndex = date.getMonth()
    var year = date.getFullYear()

    return day + ' ' + monthNames[monthIndex] + ', ' + year
  }

  get renderDate() {
    const { todayDate } = this

    return (
      <View style={styles.date}>
        <Text style={styles.todayText}>TODAY</Text>
        <Text style={styles.dateText}>{todayDate}</Text>
      </View>
    )
  }

  get renderTaskStatus() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.completedText}>Completed</Text>

        <View style={styles.taskStatus}>
          <Text style={styles.taskCompleteText}>4/</Text>
          <Text style={styles.taskTotalText}>10</Text>
        </View>
      </View>
    )
  }

  get renderSummary() {
    const { renderDate, renderTaskStatus } = this

    return (
      <View style={styles.summary}>
        {renderDate}
        {renderTaskStatus}
      </View>
    )
  }

  get renderGreetings() {
    return (
      <View style={styles.greetingsContainer}>
        <Text style={styles.text}>Good Morning </Text>
        <Text style={styles.username}>Nacasha</Text>
      </View>
    )
  }

  render() {
    const { renderGreetings, renderSummary } = this

    return (
      <View style={styles.container}>
        {renderGreetings}
        {renderSummary}
      </View>
    )
  }
}

export default TaskSummaryCard
