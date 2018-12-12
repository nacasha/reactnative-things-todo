import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import Swiper from 'react-native-swiper';
import Moment from 'moment'

import styles from './styles'

class InlineCalendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weekOfYear: 0
    }

    this.renderSevenDaysWeek = this.renderSevenDaysWeek.bind(this)
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this)
  }

  componentWillMount() {
    const weekOfYear = Moment().weeks()

    this.setState({ weekOfYear })
  }

  shouldComponentUpdate() {
    return true
  }

  keyExtractor = (item) => item.getTime().toString()

  generateSevenDaysWeek(weekOfYear) {
    var startOfWeek = Moment().weeks(weekOfYear).startOf('isoWeek');
    var endOfWeek = Moment().weeks(weekOfYear).endOf('isoWeek');

    var days = [];
    var day = startOfWeek;

    while (day <= endOfWeek) {
      days.push(day.toDate());
      day = day.clone().add(1, 'd');
    }

    return days;
  }

  renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.getDate()}</Text>
      </View>
    )
  }

  renderSevenDaysWeek(weekOfYear) {
    const { keyExtractor, generateSevenDaysWeek, renderItem } = this
    const data = generateSevenDaysWeek(weekOfYear)

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        scrollEnabled={false}
        keyExtractor={keyExtractor}
      />
    )
  }

  get renderCurrentMonth() {
    const { weekOfYear } = this.state
    const currentMonth = Moment().weeks(weekOfYear).format('MMMM, YYYY')

    return (
      <View style={styles.dateTextContainer}>
        <Text style={styles.dateText}>{currentMonth}</Text>
      </View>
    )
  }

  onMomentumScrollEnd(e, state, context) {
    if (state.index == 0 || state.index == 2) {
      var weekDirection = -1
      var scrollDirection = 1

      if (state.index == 2) {
        weekDirection = 1
        scrollDirection = -1
      }

      const { weekOfYear: oldWeekofYear } = this.state
      const weekOfYear = oldWeekofYear + weekDirection

      context.scrollBy(scrollDirection, false)

      this.setState({ weekOfYear })
    }
  }

  render() {
    const { weekOfYear } = this.state
    const { renderCurrentMonth, renderSevenDaysWeek, onMomentumScrollEnd } = this

    return (
      <View style={styles.container}>
        {renderCurrentMonth}

        <Swiper
          index={1}
          loop={false}
          onMomentumScrollEnd={onMomentumScrollEnd}
          automaticallyAdjustContentInsets={true}
          showsPagination={false}
          horizontal={true}>
          <View style={styles.slide}>
            {renderSevenDaysWeek(weekOfYear - 1)}
          </View>
          <View style={styles.slide}>
            {renderSevenDaysWeek(weekOfYear)}
          </View>
          <View style={styles.slide}>
            {renderSevenDaysWeek(weekOfYear + 1)}
          </View>
        </Swiper>
      </View>
    )
  }
}

export default InlineCalendar
