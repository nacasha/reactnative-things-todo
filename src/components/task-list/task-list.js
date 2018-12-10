import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import styles from './styles';
import TaskItem from '../task-item';

class TaskList extends Component {
  _keyExtractor = (item) => item.taskId;

  renderItem({ item }) {
    return <TaskItem data={item} />
  }

  renderItemSeparator() {
    return <View style={styles.itemSeparator} />
  }

  render() {
    const { tasks } = this.props
    const { _keyExtractor, renderItem, renderItemSeparator } = this

    return (
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={renderItemSeparator}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
          data={tasks}
        />
      </View>
    )
  }
}

export default TaskList
