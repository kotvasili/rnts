import 'react-native-gesture-handler';
import React, {useState, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/navigators/Home';
import Auth from './src/navigators/Auth';

declare const global: {HermesInternal: null | {}};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      <NavigationContainer>
        {isLoggedIn ? <Home /> : <Auth />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

type AuthContextType = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

export default App;
