import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  ImageBackground,
} from 'react-native';
import {SharedStyles} from './common';

import {IntroScreen} from './screens';

import mainBg from '../assets/images/Background.png';
import introEffect from '../assets/images/Effect4.png';

const App = () => {
  return (
    // <SafeAreaView> for notch
    // <StatusBar barStyle={'light-content'} />
    // <Text>Hello World</Text>

    <NavigationContainer
      style={[SharedStyles.h100, SharedStyles.w100, SharedStyles.container]}>
      <ImageBackground
        source={mainBg}
        style={[SharedStyles.flex1]}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-start',
        }}>
        <ImageBackground
          source={introEffect}
          resizeMode="cover"
          style={[SharedStyles.flex2]}>
          <IntroScreens />
        </ImageBackground>
        {/* <View style={[SharedStyles.flex2, SharedStyles.flexEnd]}></View> */}
      </ImageBackground>
    </NavigationContainer>
  );
};

export default App;
