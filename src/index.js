import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {SharedStyles} from './common';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>
    <SafeAreaView style={[SharedStyles.h100, SharedStyles.w100]}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
