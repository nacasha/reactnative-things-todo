import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux';

import Avatar from '../../components/avatar';
import MenuList from '../../components/menu-list';

import styles from './styles';

class DrawerContentScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatar: 'https://avatarfiles.alphacoders.com/139/thumb-139883.png',
    }
  }

  shouldComponentUpdate() {
    return false
  }

  get menuList() {
    return [
      { icon: 'plus', label: 'New Task', onPress: () => Actions.taskForm() },
      { icon: 'star', label: 'Important', onPress: () => { } },
      { icon: 'clipboard-check-outline', label: 'Done', onPress: () => Actions.doneTask() },
      { icon: 'clock-outline', label: 'Later', onPress: () => Actions.laterTask() },
      { icon: 'bookmark', label: 'Category', onPress: () => Actions.categories() },
      { icon: 'settings', label: 'Settings', onPress: () => { } },
      { icon: 'logout', label: 'Logout', onPress: () => { } },
    ]
  }

  render() {
    const { avatar } = this.state
    const { menuList } = this

    return (
      <ScrollView style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar image={avatar} />
          <Text style={styles.usernameText}>Izal Fathoni</Text>
        </View>

        <MenuList menuList={menuList} />
      </ScrollView>
    )
  }
}

export default DrawerContentScreen
