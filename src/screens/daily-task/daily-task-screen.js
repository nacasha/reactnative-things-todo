import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'

import TaskSummaryCard from '../../components/task-summary-card'
import TaskList from '../../containers/task-list'

import styles from './styles'

class DailyTaskScreen extends Component {
  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props

    if (nextProps.tasks !== tasks) {
      return true
    }

    return false
  }

  render() {
    const { tasks } = this.props

    return (
      <ScrollView style={styles.container}>
        <TaskSummaryCard />

        <TaskList tasks={tasks} />
      </ScrollView>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyTaskScreen)
