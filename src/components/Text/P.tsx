import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FONTS} from '../../styles/fonts';
import {COLORS} from '../../styles/colors';

export const P: React.FC<P> = ({children, small = false}) => (
  <Text style={StyleSheet.flatten([styles.base, small ? styles.small : {}])}>
    {children}
  </Text>
);

type P = {
  small?: boolean;
  children: string | number;
};

const styles = StyleSheet.create({
  base: {
    color: COLORS.text,
    ...FONTS.regular,
    fontSize: 16,
    lineHeight: 18.8,
  },
  small: {
    fontSize: 12.8,
    lineHeight: 15,
  },
});
