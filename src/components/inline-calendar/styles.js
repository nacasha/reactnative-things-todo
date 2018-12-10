import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingBottom: Metrics.padding[1]
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
    padding: Metrics.padding[0],
    width: Metrics.screenWidth / 7
  },
  itemText: {
    color: Colors.white,
    fontWeight: 'bold'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
})

export default styles
