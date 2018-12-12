import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../../themes';

const styles = StyleSheet.create({
  input: {
    ...Fonts.typography.input,
    borderBottomWidth: 0.4,
    borderBottomColor: '#AAA',
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.padding[1],
    paddingVertical: Metrics.spacing.s1
  },
  formInput: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#AAA',
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.padding[1],
    paddingVertical: Metrics.spacing.s1
  },
  priorityButton: {
    borderRadius: 100,
    margin: -Metrics.padding[1],
    marginRight: Metrics.padding[1]
  },
  priorityButtonInside: {
    padding: Metrics.padding[1]
  },
  priorityButtonIcon: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: Colors.transparent,
    width: Metrics.padding[3],
    height: Metrics.padding[3],
    color: Colors.white,
    fontSize: Fonts.iconography.small
  },
  priorityButtonIconActive: {
    borderWidth: 3,
    borderColor: '#CCC',
  },
  formText: {
    ...Fonts.typography.input,
    color: Colors.textLight
  },
  labelContainer: {
    paddingHorizontal: Metrics.padding[1],
    paddingVertical: Metrics.padding[0],
    borderBottomWidth: 0.4,
    borderBottomColor: '#AAA',
  },
  label: {
    ...Fonts.typography.normal,
    fontWeight: 'bold',
  },
  submitButton: {
    paddingVertical: Metrics.spacing.s1,
    width: Metrics.screenWidth,
    backgroundColor: Colors.primary,
    alignItems: 'center'
  },
  submitButtonText: {
    ...Fonts.typography.medium,
    color: Colors.white,
    fontWeight: 'bold'
  }
})

export default styles
