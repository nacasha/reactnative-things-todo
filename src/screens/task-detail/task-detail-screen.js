import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles';
import TaskDetailsCard from '../../components/task-details-card';
import TaskBottomActionBar from './task-bottom-action-bar';

class TaskDetailScreen extends Component {
  render() {
    const { data } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.niceBoxBehind} />
        <TaskDetailsCard data={data} />
        <TaskBottomActionBar
          onPressTrash={() => { }}
          onPressLater={() => { }}
          onPressEdit={() => { }}
          onPressDone={() => { }}
        />
      </View>
    )
  }
}

export default TaskDetailScreen
