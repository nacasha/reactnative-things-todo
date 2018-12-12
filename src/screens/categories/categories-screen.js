import React, { Component } from 'react'
import { View, Text } from 'react-native'

import CategoryList from '../../components/category-list';

import styles from './styles';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentWillMount() {
    categories = [
      { categoryId: '1', label: 'Friends' },
      { categoryId: '2', label: 'Family' },
      { categoryId: '3', label: 'Office' },
      { categoryId: '4', label: 'Health' },
    ]

    this.setState({ categories })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { categories } = this.state

    return (
      <View style={styles.container}>
        <CategoryList categories={categories} />
      </View>
    )
  }
}

export default CategoriesScreen
