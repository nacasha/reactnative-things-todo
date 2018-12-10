import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import InlineCalendar from '../../components/inline-calendar';
import TaskList from '../../components/task-list';

import styles from './styles';

class MonthlyTaskScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InlineCalendar />

        <TaskList />
      </ScrollView>
    )
  }
}

export default MonthlyTaskScreen
