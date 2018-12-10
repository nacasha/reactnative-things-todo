import React, { Component } from 'react'
import { View, Text, TouchableNativeFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import TaskSearchbar from '../task-searchbar';

class AppNavbar extends Component {
  renderButton(icon, onPress) {
    return (
      <View style={styles.button}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#AAF', true)}>
          <View style={styles.buttonInside}>
            <Icon name={icon} style={styles.buttonIcon}/>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  get renderDrawerButton() {
    const openDrawer = () => Actions.drawerOpen

    return this.renderButton('menu', openDrawer())
  }

  get renderBackButton() {
    const popScreen = () => Actions.pop()

    return this.renderButton('arrow-left', popScreen)
  }

  get renderTitle() {
    const { title = 'ThingsTODO' } = this.props.data

    return (
      <Text style={styles.title}>
        {title}
      </Text>
    )
  }

  get renderLeftComponent() {
    const { renderBackButton, renderDrawerButton } = this
    const { title } = this.props.data

    if (title) {
      return renderBackButton
    }
    return renderDrawerButton
  }

  get renderRightComponent() {
    return (
      <View style={styles.rightComponent}>
        {this.renderButton('bell', () => { })}
        {this.renderButton('plus', () => { })}
      </View>
    )
  }

  get renderTaskSearchbar() {
    return <TaskSearchbar />
  }

  render() {
    const {
      renderLeftComponent,
      renderTitle,
      renderRightComponent,
      renderTaskSearchbar
    } = this

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {renderLeftComponent}
          {renderTitle}
          {renderRightComponent}
        </View>
        {renderTaskSearchbar}
      </View>
    )
  }
}

export default AppNavbar
