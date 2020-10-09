import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {Heading, P} from '../../components/Text';
import {AuthContext} from '../../../App';
import Page from '../../components/Page';

type MainNavigatorType = {
  Feed: {} | undefined;
  Settings: {} | undefined;
};

type Props = BottomTabScreenProps<MainNavigatorType, 'Feed'>;

const FeedScreen: React.FC<Props> = () => {
  const {setLoggedIn} = useContext(AuthContext);
  return (
    <Page title="Feed">
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading>Home Screen</Heading>
      <Heading level={2}>Home Screen</Heading>
      <Heading level={3}>Home Screen</Heading>
      <Heading level={4}>Home Screen</Heading>
      <P>Home Screen</P>
      <P small={true}>Home Screen</P>
      <Button title="Log out" onPress={() => setLoggedIn(false)} />
    </Page>
  );
};

export default FeedScreen;
