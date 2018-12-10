import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import InlineCalendar from '../../components/inline-calendar';
import TaskList from '../../components/task-list';

import styles from './styles';
import TaskListWeekly from '../../components/task-list-weekly';

class WeeklyTaskScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weeklyTasks: [
        {
          date: new Date(2018, 11, 20),
          data: [
            [
              { taskId: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
              { taskId: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
              { taskId: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
              { taskId: '8', date: new Date(), title: 'Watch movies with Karina', category: 'Friend', starred: true, priority: 2 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 21),
          data: [
            [
              { taskId: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
              { taskId: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
              { taskId: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 22),
          data: [
            [
              { taskId: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 23),
          data: [
            [
              { taskId: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
              { taskId: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 24),
          data: [
            [
              { taskId: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
              { taskId: '2', date: new Date(), title: 'Meet Joshep', category: 'Friend', starred: false, priority: 1 },
              { taskId: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 25),
          data: [
            [
              { taskId: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
              { taskId: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
              { taskId: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 26),
          data: [
            [
              { taskId: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
              { taskId: '6', date: new Date(), title: 'Meeting with client', category: 'Official', starred: false, priority: 3 },
              { taskId: '8', date: new Date(), title: 'Watch movies with Karina', category: 'Friend', starred: true, priority: 2 },
              { taskId: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
              { taskId: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
            ]
          ]
        },
        {
          date: new Date(2018, 11, 27),
          data: [
            [
              { taskId: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
              { taskId: '2', date: new Date(), title: 'Meet Joshep', category: 'Friend', starred: false, priority: 1 },
              { taskId: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
              { taskId: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
              { taskId: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
            ]
          ]
        },
      ]
    }
  }

  render() {
    const { weeklyTasks } = this.state

    return (
      <View style={styles.container}>
        <InlineCalendar />

        <TaskListWeekly weeklyTasks={weeklyTasks} />
      </View>
    )
  }
}

export default WeeklyTaskScreen
