import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import TaskItem from '../../components/task-item'
import Badge from '../../components/badge'

import styles from './styles'
import { TaskActions } from '../../redux/task-redux';

class TaskList extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
    this.onDoneAction = this.onDoneAction.bind(this)
    this.onLaterAction = this.onLaterAction.bind(this)
  }

  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props

    if (nextProps.tasks !== tasks) {
      return true
    }

    return false
  }

  onLaterAction(taskId) {
    this.props.updateTaskStatus(taskId, 2)
  }

  onDoneAction(taskId) {
    this.props.updateTaskStatus(taskId, 1)
  }

  keyExtractor = (item) => item.taskId.toString()

  renderItem({ item }) {
    const { onDoneAction, onLaterAction } = this

    return (
      <TaskItem
        data={item}
        onDoneAction={onDoneAction}
        onLaterAction={onLaterAction}
      />
    )
  }

  renderItemSeparator() {
    return <View style={styles.itemSeparator} />
  }

  render() {
    const { tasks, badge, badgeColor } = this.props
    const { keyExtractor, renderItem, renderItemSeparator } = this

    return (
      <View style={styles.container}>
        {badge && <Badge color={badgeColor} label={badge} />}
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={renderItemSeparator}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          data={tasks}
          extraData={tasks}
          initialNumToRender={6}
          removeClippedSubviews={true}
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
    updateTaskStatus: (id, s) => dispatch(TaskActions.updateTaskStatus(id, s))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
