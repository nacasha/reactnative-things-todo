import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flexShrink: 5,
    height: 80,
  },
  dateTextContainer: {
    padding: Metrics.padding[0],
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    ...Fonts.typography.medium,
    color: Colors.textGray,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: Metrics.screenWidth / 7
  },
  itemText: {
    color: Colors.white,
    fontWeight: 'bold'
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
})

export default styles
