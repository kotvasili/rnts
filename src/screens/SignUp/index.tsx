import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigatorType} from 'interfaces/MainNavigatorType';

type Props = StackScreenProps<MainNavigatorType, 'SignUp'>;

const SignUp: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>SignUp Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignUp;
