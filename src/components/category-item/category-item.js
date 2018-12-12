import React, { Component } from 'react'
import { View, Text, TextInput, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'
import { Actions } from 'react-native-router-flux';
import { Colors } from '../../themes';
import CategoryReduxForm from '../redux-form/category-redux-form/category-redux-form';

class CategoryItem extends Component {
  shouldComponentUpdate() {
    return false
  }

  get renderEditAction() {
    const onPress = () => Actions.categoryForm()

    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.action}>
          <Icon name="folder-edit" style={[styles.actionIcon, { color: Colors.info }]} />
        </View>
      </TouchableNativeFeedback>
    )
  }

  get renderTrashAction() {
    return (
      <TouchableNativeFeedback>
        <View style={styles.action}>
          <Icon name="trash-can-outline" style={[styles.actionIcon, { color: Colors.error }]} />
        </View>
      </TouchableNativeFeedback>
    )
  }

  get renderCategoryTitle() {
    const { label } = this.props.data

    return (
      <View style={styles.taskTitle} pointerEvents="none">
        <Text style={styles.taskTitleText}>{label}</Text>
      </View>
    )
  }

  render() {
    const {
      renderCategoryTitle,
      renderEditAction,
      renderTrashAction,
    } = this

    const { hideAction } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          {renderCategoryTitle}
        </View>
        {hideAction || renderEditAction}
        {hideAction || renderTrashAction}
      </View>
    )
  }
}

export default CategoryItem
