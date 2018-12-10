import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    margin: Metrics.spacing.s1,
    backgroundColor: Colors.white,
  },
  cardContent: {
    padding: Metrics.spacing.s1
  },
  niceBoxBehind: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    height: Metrics.spacing.s5,
    width: Metrics.screenWidth
  },
  title: {
    ...Fonts.typography.large,
    fontWeight: 'bold',
    color: Colors.textGray,
  },
  date: {
    lineHeight: 25,
    color: Colors.textLight
  },
  description: {

  },
  category: {
    lineHeight: 25,
  }
})

export default styles
