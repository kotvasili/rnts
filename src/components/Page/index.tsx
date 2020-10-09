import React, {ReactElement} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {COLORS} from '../../styles/colors';
import {CONSTANTS} from '../../styles/styleConstants';
import Animated from 'react-native-reanimated';
import {FONTS} from '../../styles/fonts';

type Props = {
  children: ReactElement[] | ReactElement;
  title: string;
};

const Page: React.FC<Props> = ({children, title}) => {
  const scrollY = new Animated.Value(0);
  const fz = Animated.interpolate(scrollY, {
    inputRange: [-50, 0, 150],
    outputRange: [45, 39, 12],
  });
  console.log(fz);
  return (
    <View style={styles.background}>
      <SafeAreaView>
        <Animated.Text
          style={StyleSheet.flatten([{...FONTS.black}, {fontSize: fz}])}>
          {title}
        </Animated.Text>
      </SafeAreaView>
      <Animated.ScrollView
        contentContainerStyle={styles.contentContainerStyles}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.bg,
    flex: 1,
  },
  contentContainerStyles: {
    flexGrow: 1,
    paddingHorizontal: CONSTANTS.safeAreaHorizontal,
  },
});
export default Page;
