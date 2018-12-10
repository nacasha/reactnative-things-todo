import { Dimensions, StatusBar, PixelRatio } from 'react-native'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

/**
 * Pixel density
 *
 * Converts a layout size (dp) to pixel size (px).
 * Guaranteed to return an integer number.
 */
const dp = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp)

export default {
  statusBar: StatusBar.currentHeight,
  screenHeight: height,
  screenWidth: width,

  /**
   * Spacing
   *
   * Keylines enable the consistent placement of elements
   * outside of the layout grid. They are vertical lines
   * that show where elements are placed in a design that
   * doesn’t align to the grid, measured in increments of 8dp.
   *
   * https://material.io/design/layout/spacing-methods.html#spacing
   */
  spacing: {
    s1: dp(8),
    s2: dp(16),
    s3: dp(24),
    s4: dp(32),
    s5: dp(40),
  },

  /**
   * Padding
   *
   * Padding refers to the space between UI elements.
   * It’s an alternative spacing method to keylines,
   * measured in increments of 8dp or 4dp.
   */
  padding: [dp(4), dp(8), dp(12), dp(16), dp(20), dp(24), dp(28)]
}
