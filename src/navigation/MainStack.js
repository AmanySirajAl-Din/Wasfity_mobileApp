import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IntroScreens, HomeScreen} from '../screens';

const RootStack = createNativeStackNavigator(); // returns Navigator & Screen
// Navigator >> which wrap the screens to navigate between them
// Screens >> the screens in the Navigator

const MainStack = () => (
  // react component
  /* don't need to use return when use (
        ...my jsx code...
    )  */

  // I can add initialRouteName={'Intro'} attribute
  // to RootStack.Navigator to define the first screen to preview
  // so I don't need to order the screens in the right order
  <RootStack.Navigator
    initialRouteName={'HomeScreenName'}
    // to remove header
    screenOptions={{headerShown: false}}>
    <RootStack.Screen component={IntroScreens} name={'Intro'} />
    <RootStack.Screen component={HomeScreen} name={'HomeScreenName'} />
  </RootStack.Navigator>
);

export {MainStack};
