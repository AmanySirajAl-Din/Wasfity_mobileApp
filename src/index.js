import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';

import AppContainer from './navigation';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>
    <AppContainer />
  );
};

export default App;
