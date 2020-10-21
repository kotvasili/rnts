import React, {ReactElement, useState} from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {COLORS} from '../../styles/colors';
import {CONSTANTS} from '../../styles/styleConstants';
import Animated, {Extrapolate} from 'react-native-reanimated';
import {FONTS} from '../../styles/fonts';
import {withAnchorPoint} from 'react-native-anchor-point';

type Props = {
  children: ReactElement[] | ReactElement;
  title: string;
};

const SCROLL_CONFIG = [-100, 0, 120];
const HEIGHT = 124;

const AnimatedBlurView =
  Platform.OS === 'android'
    ? Animated.View
    : Animated.createAnimatedComponent(BlurView);

const Page: React.FC<Props> = ({children, title}) => {
  const scrollY = Animated.useValue(0);
  const [width, setWidth] = useState<number>(0);
  const scale = Animated.interpolate(scrollY, {
    inputRange: SCROLL_CONFIG,
    outputRange: [1.2, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateY = Animated.interpolate(scrollY, {
    inputRange: SCROLL_CONFIG,
    outputRange: [0, 0, Platform.OS === 'android' ? -50 : -40],
    extrapolate: Extrapolate.CLAMP,
  });

  // @ts-ignore
    return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyles}
        scrollEventThrottle={8}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
      <AnimatedBlurView
        style={[styles.header, {transform: [{translateY}]}]}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor={COLORS.bg}>
        <Animated.Text
          onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
          style={StyleSheet.flatten([
            {...FONTS.black},
            styles.head,
            withAnchorPoint(
              {
                transform: [
                  {
                    scale,
                  },
                ],
              },
              {x: 0, y: 0.5},
              {width},
            ),
          ])}>
          {title}
        </Animated.Text>
      </AnimatedBlurView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  head: {
    fontSize: 39,
    lineHeight: 51,
    flexGrow: 0,
    marginTop: 'auto',
  },
  header: {
    paddingHorizontal: CONSTANTS.safeAreaHorizontal,
    flexDirection: 'row',
    paddingTop: 30,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    height: HEIGHT,
    width: '100%',
    backgroundColor: Platform.OS === 'android' ? COLORS.accent : undefined,
  },
  contentContainerStyles: {
    flexGrow: 1,
    paddingHorizontal: CONSTANTS.safeAreaHorizontal,
  },
  content: {
    paddingTop: HEIGHT,
    zIndex: 1,
  },
});
export default Page;
