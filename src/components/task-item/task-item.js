import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Interactable from 'react-native-interactable'

import styles from './styles'
import { Colors } from '../../themes'
import { Actions } from 'react-native-router-flux';

class TaskItem extends Component {
  get renderDoneAction() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.doneAction}>
          <Icon name="clipboard-check-outline" style={styles.taskActionIcon} />
          <Text style={styles.taskActionLabel}>Done</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  get renderLaterAction() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.laterAction}>
          <Text style={styles.taskActionLabel}>Later</Text>
          <Icon name="clock-outline" style={styles.taskActionIcon} />
        </View>
      </TouchableNativeFeedback>
    )
  }

  get renderTaskPriority() {
    const { starred, priority } = this.props.data

    const taskPriority = [
      Colors.success,
      Colors.info,
      Colors.warning,
      Colors.error
    ]

    return(
      <View style={styles.taskPriority} pointerEvents="none">
        <Icon
          name={starred ? 'star' : 'star-outline' }
          color={starred ? Colors.gold : Colors.transparent}
          style={styles.taskPriorityIcon}
        />
        <Icon
          name="circle"
          color={taskPriority[priority]}
          style={styles.taskPriorityIcon}
        />
      </View>
    )
  }

  get renderTaskTitle() {
    const { title, category } = this.props.data

    return (
      <View style={styles.taskTitle} pointerEvents="none">
        <Text style={styles.taskTitleText}>{title}</Text>
        <Text style={styles.taskCategoryText}>{category}</Text>
      </View>
    )
  }

  get renderTaskTime() {
    return (
      <View style={styles.taskTime} pointerEvents="none">
        <Text style={styles.timeText}>12.30</Text>
        <Text style={styles.timeAmPmText}>PM</Text>
      </View>
    )
  }

  render() {
    const {
      renderTaskTime,
      renderTaskTitle,
      renderTaskPriority,
      renderDoneAction,
      renderLaterAction
    } = this

    const { data } = this.props
    const taskOnPress = () => Actions.taskDetails({ data })

    return (
      <View style={styles.container} >
        {renderDoneAction}
        {renderLaterAction}
        <Interactable.View
          horizontalOnly={true}
          boundaries={{ left: -100, right: 100 }}
          snapPoints={[{ x: 100 }, { x: 0 }, { x: -100 }]}>
          <TouchableNativeFeedback onPress={taskOnPress}>
            <View style={styles.taskContainer}>
              {renderTaskTime}
              {renderTaskTitle}
              {renderTaskPriority}
            </View>
          </TouchableNativeFeedback>
        </Interactable.View>
      </View>
    )
  }
}

export default TaskItem
