import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';

const FONTS_CONFIG = {
  '400': 'RedHatDisplay-Regular',
  '500': 'RedHatDisplay-Medium',
  '700': 'RedHatDisplay-Bold',
  '900': 'RedHatDisplay-Black',
};

type Boldness = '400' | '500' | '700' | '900';

export const getFont = (boldness: Boldness) =>
  Platform.select({
    ios: {fontWeight: boldness},
    android: {fontFamily: FONTS_CONFIG[boldness]},
  });

export const FONTS = StyleSheet.create({
  regular: {
    fontFamily: 'RedHatDisplay-Regular',
    fontWeight: '400',
  },
  medium: {...getFont('500')},
  bold: {...getFont('700')},
  black: {...getFont('900')},
});
