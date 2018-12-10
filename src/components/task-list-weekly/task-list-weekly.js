import React, { Component } from 'react'
import { View, Text, SectionList } from 'react-native'

import styles from './styles';
import TaskList from '../task-list';

class TaskListWeekly extends Component {
  _keyExtractor = (item) => item.taskId;

  renderItem({ item, index, section }) {
    return <TaskList tasks={item} />
  }

  renderSectionHeader({ section: { date } }) {
    return (
      <Text style={styles.sectionText}>Today</Text>
    )
  }

  render() {
    const { weeklyTasks } = this.props
    const { renderItem, renderSectionHeader } = this

    return (
      <View style={styles.container}>
        <SectionList
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          sections={weeklyTasks}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    )
  }
}

export default TaskListWeekly
