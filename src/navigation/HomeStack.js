import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, RecipeDetails, Filter} from '../screens';

const Stack = createNativeStackNavigator(); // returns Navigator & Screen

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={'Home'}
    screenOptions={{headerTitleAlign: 'center'}}>
    <Stack.Screen
      component={Home}
      name={'Home'}
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={RecipeDetails}
      name={'RecipeDetails'}
      options={{headerTitle: 'Recipe Details'}}
    />
    <Stack.Screen
      component={Filter}
      name={'Filter'}
    />
  </Stack.Navigator>
);

export {HomeStack};
