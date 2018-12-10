import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    paddingVertical: Metrics.spacing.s1,
    backgroundColor: Colors.primary
  },
  usernameText: {
    ...Fonts.typography.large,
    color: Colors.white,
    marginTop: Metrics.padding[0]
  }
})

export default styles
