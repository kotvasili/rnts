import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTS} from '../../styles/fonts';
import {COLORS} from '../../styles/colors';

export const Heading: React.FC<Heading> = ({children, level = 1}) => (
  <Text style={StyleSheet.flatten([styles.base, styles[level]])}>
    {children}
  </Text>
);

type Heading = {
  level?: 1 | 2 | 3 | 4;
  children: string | number;
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.textPrimary,
  },
  1: {
    ...FONTS.black,
    fontSize: 39,
    lineHeight: 51.5,
  },
  2: {
    ...FONTS.bold,
    fontSize: 31.25,
    lineHeight: 41.34,
  },
  3: {
    ...FONTS.medium,
    fontSize: 25,
    lineHeight: 33,
  },
  4: {
    ...FONTS.regular,
    fontSize: 20,
    lineHeight: 26.46,
  },
});
