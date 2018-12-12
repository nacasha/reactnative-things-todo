import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import TaskItem from '../task-item'
import Badge from '../badge'

import styles from './styles'

class TaskList extends Component {
  shouldComponentUpdate(nextProps) {
    const { tasks } = this.props

    if (nextProps.tasks !== tasks) {
      return true
    }

    return false
  }

  _keyExtractor = (item) => item.taskId

  renderItem({ item }) {
    return <TaskItem data={item} />
  }

  renderItemSeparator() {
    return <View style={styles.itemSeparator} />
  }

  render() {
    const { tasks, badge, badgeColor } = this.props
    const { _keyExtractor, renderItem, renderItemSeparator } = this

    return (
      <View style={styles.container}>
        {badge && <Badge color={badgeColor} label={badge} />}
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={renderItemSeparator}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
          data={tasks}
          extraData={tasks}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
      </View>
    )
  }
}

export default TaskList
