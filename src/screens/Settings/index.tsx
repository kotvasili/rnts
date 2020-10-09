import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {Heading, P} from '../../components/Text';

type MainNavigatorType = {
  Feed: {} | undefined;
  Settings: {} | undefined;
};

type Props = BottomTabScreenProps<MainNavigatorType, 'Feed'>;

const SettingsScreen: React.FC<Props> = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Heading>Home Screen</Heading>
        <Heading level={2}>Home Screen</Heading>
        <Heading level={3}>Home Screen</Heading>
        <Heading level={4}>Home Screen</Heading>
        <P>Home Screen</P>
        <P small={true}>Home Screen</P>
    </View>
  );
};

export default SettingsScreen;
