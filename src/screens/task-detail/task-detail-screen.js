import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles';
import TaskDetailsCard from '../../components/task-details-card';
import TaskBottomActionBar from './task-bottom-action-bar';
import { TaskActions } from '../../redux/task-redux';

class TaskDetailScreen extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { data } = this.props.navigation.state.params
    const { taskId } = data
    const { removeTask, updateTaskStatus } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.niceBoxBehind} />
        <TaskDetailsCard data={data} />
        <TaskBottomActionBar
          onPressTrash={() => removeTask(taskId)}
          onPressLater={() => updateTaskStatus(taskId, 2) }
          onPressEdit={() => { }}
          onPressDone={() => updateTaskStatus(taskId, 1) }
        />
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.task.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (id) => dispatch(TaskActions.removeTask(id)),
    updateTaskStatus: (id, s) => dispatch(TaskActions.updateTaskStatus(id, s))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailScreen)
