import React, {useContext} from 'react';
import {Button, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainNavigatorType} from 'interfaces/MainNavigatorType';
import {Heading, P} from '../../components/Text';
import {AuthContext} from '../../../App';

type Props = StackScreenProps<MainNavigatorType, 'SignIn'>;

const SignIn: React.FC<Props> = ({navigation}) => {
  const {setLoggedIn} = useContext(AuthContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Heading>SignIn Screen</Heading>
      <Heading level={2}>SignIn Screen</Heading>
      <Heading level={3}>SignIn Screen</Heading>
      <Heading level={4}>SignIn Screen</Heading>
      <P>SignIn Screen</P>
      <P small={true}>SignIn Screen</P>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Log in" onPress={() => setLoggedIn(true)} />
    </View>
  );
};

export default SignIn;
