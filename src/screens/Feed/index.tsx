import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Heading, P} from '../../components/Text';
import {AuthContext} from '../../../App';

type MainNavigatorType = {
  Feed: {} | undefined;
  Settings: {} | undefined;
};

type Props = BottomTabScreenProps<MainNavigatorType, 'Feed'>;

const FeedScreen: React.FC<Props> = () => {
  const {setLoggedIn} = useContext(AuthContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Heading>Home Screen</Heading>
      <Heading level={2}>Home Screen</Heading>
      <Heading level={3}>Home Screen</Heading>
      <Heading level={4}>Home Screen</Heading>
      <P>Home Screen</P>
      <P small={true}>Home Screen</P>
      <Button title="Go to Details" onPress={() => setLoggedIn(false)} />
    </View>
  );
};

export default FeedScreen;
