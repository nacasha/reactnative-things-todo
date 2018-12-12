import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import CategoryItem from '../category-item';

import styles from './styles'

class CategoryList extends Component {
  shouldComponentUpdate() {
    return false
  }

  _keyExtractor = (item) => item.taskId

  renderItem({ item }) {
    return <CategoryItem data={item} />
  }

  renderItemSeparator() {
    return <View style={styles.itemSeparator} />
  }

  render() {
    const { _keyExtractor, renderItem, renderItemSeparator } = this
    const { categories } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={renderItemSeparator}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
          data={categories}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
      </View>
    )
  }
}

export default CategoryList
