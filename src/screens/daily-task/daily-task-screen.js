import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import TaskSummaryCard from '../../components/task-summary-card';
import TaskList from '../../components/task-list';

import styles from './styles';

class DailyTaskScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    tasks = [
      { taskId: '1', date: new Date(), title: 'Launch with Julie', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Family', starred: true, priority: 0 },
      { taskId: '2', date: new Date(), title: 'Meet Joshep', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Friend', starred: false, priority: 1 },
      { taskId: '3', date: new Date(), title: 'Go to Pharmecy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Health', starred: false, priority: 0 },
      { taskId: '4', date: new Date(), title: 'Take Zsombek for a walk', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Family', starred: false, priority: 2 },
      { taskId: '5', date: new Date(), title: 'Go to gym', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Fitness', starred: true, priority: 0 },
      { taskId: '6', date: new Date(), title: 'Meeting with client', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Official', starred: false, priority: 3 },
      { taskId: '7', date: new Date(), title: 'Presentasion with client', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Official', starred: true, priority: 3 },
      { taskId: '8', date: new Date(), title: 'Watch movies with Karina', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Friend', starred: true, priority: 2 },
      { taskId: '9', date: new Date(), title: 'Take john to school', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Family', starred: true, priority: 1 },
      { taskId: '10', date: new Date(), title: 'Walk for an hour', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500', category: 'Fitness', starred: false, priority: 0 }
    ]

    this.setState({ tasks })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TaskSummaryCard />

        <TaskList tasks={tasks} />
      </ScrollView>
    )
  }
}

export default DailyTaskScreen
