import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IntroScreens, Home} from '../screens';

import {BottomTabsStack} from './BottomTabsStack';

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
    //initialRouteName={'HomeScreen'}
    // to remove header
    screenOptions={{headerShown: false}}>
    <RootStack.Screen component={IntroScreens} name={'Intro'} />
    <RootStack.Screen component={BottomTabsStack} name={'BottomTabsStack'} />
  </RootStack.Navigator>
);

export {MainStack};
