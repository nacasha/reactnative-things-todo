import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    margin: Metrics.spacing.s1,
    padding: Metrics.padding[2],
    backgroundColor: Colors.white
  },
  greetingsContainer: {
    flexDirection: 'row'
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskStatus: {
    marginTop: Metrics.padding[0],
    flexDirection: 'row'
  },
  date: {
    flex: 1,
    marginTop: Metrics.padding[0]
  },
  todayText: {
    ...Fonts.typography.medium,
    fontWeight: 'bold',
    color: Colors.primary
  },
  dateText: {
    ...Fonts.typography.large,
    fontWeight: 'bold',
    marginTop: Metrics.padding[0]
  },
  text: {
    ...Fonts.typography.normal,
  },
  username: {
    ...Fonts.typography.normal,
    fontWeight: 'bold'
  },
  completedText: {
    ...Fonts.typography.normal,
    color: Colors.success
  },
  taskCompleteText: {
    ...Fonts.typography.medium,
    color: Colors.success
  },
  taskTotalText: {
    ...Fonts.typography.medium,
    color: Colors.error
  }
})

export default styles
