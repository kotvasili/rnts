import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed';

const HomeTabs = createBottomTabNavigator();

const Home: React.FC = () => (
  <HomeTabs.Navigator>
    <HomeTabs.Screen name="Feed" component={FeedScreen} />
    <HomeTabs.Screen name="Settings" component={FeedScreen} />
  </HomeTabs.Navigator>
);

export default Home;
