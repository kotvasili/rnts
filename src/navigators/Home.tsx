import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed';
import SettingsScreen from '../screens/Settings';
import {COLORS} from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTabs = createBottomTabNavigator();

const Home: React.FC = () => (
  <HomeTabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.primary04,
    }}>
    <HomeTabs.Screen name="Feed" component={FeedScreen} />
    <HomeTabs.Screen name="Settings" component={SettingsScreen} />
  </HomeTabs.Navigator>
);

export default Home;
