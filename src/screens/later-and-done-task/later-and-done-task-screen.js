import React, { Component } from 'react'
import { View } from 'react-native'

import TaskListWeekly from '../../components/task-list-weekly';

import styles from './styles';

class LaterAndDoneTaskScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weeklyTasks: [
        {
          date: new Date(2018, 11, 20),
          data: [
            { id: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
            { id: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
            { id: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
            { id: '8', date: new Date(), title: 'Watch movies with Karina', category: 'Friend', starred: true, priority: 2 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 21),
          data: [
            { id: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
            { id: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
            { id: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 22),
          data: [
            { id: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 23),
          data: [
            { id: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
            { id: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 24),
          data: [
            { id: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
            { id: '2', date: new Date(), title: 'Meet Joshep', category: 'Friend', starred: false, priority: 1 },
            { id: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 25),
          data: [
            { id: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
            { id: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
            { id: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 26),
          data: [
            { id: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
            { id: '6', date: new Date(), title: 'Meeting with client', category: 'Official', starred: false, priority: 3 },
            { id: '8', date: new Date(), title: 'Watch movies with Karina', category: 'Friend', starred: true, priority: 2 },
            { id: '9', date: new Date(), title: 'Take john to school', category: 'Family', starred: true, priority: 1 },
            { id: '10', date: new Date(), title: 'Walk for an hour', category: 'Fitness', starred: false, priority: 0 }
          ]
        },
        {
          date: new Date(2018, 11, 27),
          data: [
            { id: '1', date: new Date(), title: 'Launch with Julie', category: 'Family', starred: true, priority: 0 },
            { id: '2', date: new Date(), title: 'Meet Joshep', category: 'Friend', starred: false, priority: 1 },
            { id: '3', date: new Date(), title: 'Go to Pharmecy', category: 'Health', starred: false, priority: 0 },
            { id: '4', date: new Date(), title: 'Take Zsombek for a walk', category: 'Family', starred: false, priority: 2 },
            { id: '5', date: new Date(), title: 'Go to gym', category: 'Fitness', starred: true, priority: 0 },
          ]
        },
      ]
    }
  }

  render() {
    const { weeklyTasks } = this.state

    return (
      <View style={styles.container}>
        <TaskListWeekly weeklyTasks={weeklyTasks} />
      </View>
    )
  }
}

export default LaterAndDoneTaskScreen
