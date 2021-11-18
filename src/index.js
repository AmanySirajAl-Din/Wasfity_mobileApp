import React from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';
import {SharedStyles} from './common';
import {IntroScreen} from './screens';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>
    <SafeAreaView
      style={[
        SharedStyles.h100,
        SharedStyles.w100,
        SharedStyles.container,
      ]}>
      <Text>Hello World</Text>
      <IntroScreen />
    </SafeAreaView>
  );
};

export default App;
