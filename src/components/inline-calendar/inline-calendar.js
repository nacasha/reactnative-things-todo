import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Swiper from 'react-native-swiper';

import styles from './styles'

class InlineCalendar extends Component {
  renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    )
  }

  get renderSevenDaysWeek() {
    const { renderItem } = this

    return (
      <FlatList
        data={['1', '2', '3', '4', '5', '6', '7']}
        renderItem={renderItem}
        horizontal={true}
        scrollEnabled={false}
        keyExtractor={(item) => item}
      />
    )
  }

  render() {
    const { renderSevenDaysWeek } = this

    return (
      <View style={styles.container}>
        <View style={styles.dateTextContainer}>
          <Text style={styles.dateText}>December, 2018</Text>
        </View>

        <Swiper style={styles.wrapper} showsPagination={false} horizontal={true}>
          <View style={styles.slide}>
            {renderSevenDaysWeek}
          </View>
          <View style={styles.slide}>
            {renderSevenDaysWeek}
          </View>
          <View style={styles.slide}>
            {renderSevenDaysWeek}
          </View>
        </Swiper>
      </View>
    )
  }
}

export default InlineCalendar
