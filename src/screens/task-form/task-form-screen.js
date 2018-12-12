import React, { Component } from 'react'
import { View,  } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import TaskReduxForm from '../../components/redux-form/task-redux-form'
import { TaskActions } from '../../redux/task-redux'

import styles from './styles'

class TaskFormScreen extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  shouldComponentUpdate() {
    return false
  }

  onSubmit(data) {
    const { createTask } = this.props

    const task = {
      taskId: new Date().getTime(),
      status: 0,
      ...data
    }

    createTask(task)
    Actions.pop()
  }

  render() {
    const { onSubmit } = this

    return (
      <View style={styles.container}>
        <TaskReduxForm onSubmit={onSubmit} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(TaskActions.createTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFormScreen)
