import React, { Component } from 'react'
import { View, Text, FlatList, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

class MenuList extends Component {
  renderItem({ item }) {
    const { icon, label, onPress } = item

    return (
      <TouchableNativeFeedback onPress={() => onPress()}>
        <View style={styles.item}>
          <Icon name={icon} style={styles.icon} />
          <Text style={styles.text}>{label}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  _keyExtractor = (item) => item.icon

  render() {
    const { menuList } = this.props
    const { _keyExtractor, renderItem } = this

    return (
      <View style={styles.container}>
        <FlatList
          data={menuList}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
        />
      </View>
    )
  }
}

export default MenuList
