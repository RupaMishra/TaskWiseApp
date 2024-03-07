// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { PixelRatio, Platform } from "react-native";
// import {
//   SpaceGrotesk_300Light as spaceGroteskLight,
//   SpaceGrotesk_400Regular as spaceGroteskRegular,
//   SpaceGrotesk_500Medium as spaceGroteskMedium,
//   SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
//   SpaceGrotesk_700Bold as spaceGroteskBold,
// } from "@expo-google-fonts/space-grotesk"

// ss
import {
  Poppins_200ExtraLight as spaceGroteskLight,
  Poppins_300Light as spaceGroteskRegular,
  Poppins_300Light as spaceGroteskMedium,
  Poppins_500Medium as spaceGroteskSemiBold,
  Poppins_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/poppins";

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
};

const fonts = {
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "spaceGroteskLight",
    normal: "spaceGroteskRegular",
    medium: "spaceGroteskMedium",
    semiBold: "spaceGroteskSemiBold",
    bold: "spaceGroteskBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
};

const fontSize = {
  headLine1: 48,
  headLine2: 36,
  headLine3: 32,
  headLine4: 24,
  headLine5: 20,
  headLine6: 18,
  subtitle1: 16,
  subtitle2: 14,
  body1: 12,
  body2: 10,
  button: 8,
  overline: 6,
};
// const fontSizewithFontScale = {
//   headLine1: 38,
//   headLine2: 34,
//   headLine3: 30,
//   headLine4: 26,
//   headLine5: 22,
//   headLine6: 18,
//   subtitle1: 16,
//   subtitle2: 14,
//   body1: 12,
//   body2: 10,
//   button: 8,
//   overline: 6,
// };

// const fontSize =
//   PixelRatio.getFontScale() > 1 ? fontSizewithFontScale : fontSize1;

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  fontSize,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.spaceGrotesk,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.helveticaNeue,
    android: fonts.sansSerif,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
};
