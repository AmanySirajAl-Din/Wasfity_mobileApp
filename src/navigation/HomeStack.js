import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Recipe, Filter} from '../screens';

const Stack = createNativeStackNavigator(); // returns Navigator & Screen

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={'Home'}
    //screenOptions={{headerShown: false}}
  >
    <Stack.Screen
      component={Home}
      name={'Home'}
      options={{headerShown: false}}
    />
    <Stack.Screen component={Recipe} name={'Recipe'} />
    <Stack.Screen component={Filter} name={'Filter'} />
  </Stack.Navigator>
);

export {HomeStack};
