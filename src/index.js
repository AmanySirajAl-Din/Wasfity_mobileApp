import * as React from 'react';

// import {} this is a named component
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';

// import without {} this is a default exported component
import AppContainer from './navigation';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>

    // NavigationContainer
    <AppContainer />
  );
};

export default App;
