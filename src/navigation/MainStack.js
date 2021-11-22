import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IntroScreens, HomeScreen} from '../screens';

const RootStack = createNativeStackNavigator(); // returns Navigator & Screen
// Navigator >> which wrap the screens to navigate between them
// Screens >> the screens in the Navigator

const MainStack = () => (
  /* don't need to use return when use (
        ...my jsx code...
    )  */
  // react component
  <RootStack.Navigator>
    <RootStack.Screen component={IntroScreens} name={'Intro'} />
    <RootStack.Screen component={HomeScreen} name={'HomeScreen'} />
  </RootStack.Navigator>
);

export {MainStack};
