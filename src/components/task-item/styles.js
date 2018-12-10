import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  taskAction: {
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  taskContainer: {
    width: Metrics.screenWidth,
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
  doneAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.s1,
    width: Metrics.screenWidth / 2,
    paddingLeft: Metrics.padding[0],
    backgroundColor: Colors.success
  },
  laterAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.spacing.s1,
    width: Metrics.screenWidth / 2,
    paddingRight: Metrics.padding[0],
    backgroundColor: Colors.error,
    marginRight: -Metrics.screenWidth,
    justifyContent: 'flex-end',
  },
  taskActionLabel: {
    ...Fonts.typography.medium,
    color: Colors.white,
    fontWeight: 'bold'
  },
  taskActionIcon: {
    fontSize: Fonts.iconography.small,
    padding: Metrics.padding[0],
    color: Colors.white,
    fontWeight: 'bold'
  },
  timeText: {
    ...Fonts.typography.normal,
    fontWeight: 'bold'
  },
  timeAmPmText: {
    ...Fonts.typography.medium,
    fontWeight: 'bold'
  },
  taskTitleText: {
    ...Fonts.typography.medium,
    color: Colors.textNormal
  },
  taskCategoryText: {
    ...Fonts.typography.normal,
    color: Colors.textLight
  }
})

export default styles
