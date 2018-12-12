import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  taskContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    padding: Metrics.spacing.s1
  },
  taskPriority: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskPriorityIcon: {
    paddingHorizontal: Metrics.padding[0],
    fontSize: Fonts.iconography.tiny
  },
  taskTitle: {
    flex: 1,
    paddingLeft: Metrics.padding[0]
  },
  taskTime: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding[0]
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.padding[0],
    backgroundColor: Colors.white,
  },
  actionIcon: {
    fontSize: Fonts.iconography.small,
    padding: Metrics.padding[0],
    color: Colors.textGray,
    fontWeight: 'bold'
  },
  taskTitleText: {
    ...Fonts.typography.medium,
    color: Colors.textNormal
  },
})

export default styles
