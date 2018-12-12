import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './styles';
import TaskList from '../task-list';
import PriorityBadge from '../priority-badge';

class TaskListWithSection extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
  }

  shouldComponentUpdate() {
    return false
  }

  renderItem({ item }) {
    const { weekly, withBadge, badgeColor = 0 } = this.props

    return (
      <View style={{ marginTop: withBadge ? 15 : 0 }}>
        {weekly && <Text style={styles.sectionText}>Today</Text>}

        {/* TODO */}
        <TaskList tasks={item.tasks} badge={withBadge && 'Dsd'} badgeColor={badgeColor} />
      </View>
    )
  }

  render() {
    const { tasks } = this.props
    const { renderItem } = this

    return (
      <View style={styles.container}>
        <FlatList
          renderItem={renderItem}
          data={tasks}
          keyExtractor={(item, index) => item.section + index}
          initialNumToRender={2}
          removeClippedSubviews={true}
        />
      </View>
    )
  }
}

export default TaskListWithSection
