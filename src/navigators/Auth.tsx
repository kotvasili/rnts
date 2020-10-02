import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import {MainNavigatorType} from '../interfaces/MainNavigatorType';

const Stack = createStackNavigator<MainNavigatorType>();

const Auth: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default Auth;
