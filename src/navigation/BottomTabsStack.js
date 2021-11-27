import React from 'react';
import {COLORS, FONTS, SharedStyles} from '../common';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// for tabs icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {Home, ShoppingList, MyRecipe, Profile} from '../screens';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabsStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        /* tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        }, */
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: COLORS.orange,
        tabBarLabelStyle: {fontFamily: FONTS.medium, fontSize: 13},
      })}>
      <Tab.Screen
        component={Home}
        name="HomeScreen"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: tabInfo => (
            <IconFontAwesome
              name="home"
              size={25}
              color={tabInfo.focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingList}
        name="Shopping List"
        options={{
          tabBarLabel: 'Shopping List',
          tabBarIcon: tabInfo => (
            <IconOcticons
              name="checklist"
              size={25}
              color={tabInfo.focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        component={MyRecipe}
        name="My Recipes"
        options={{
          tabBarLabel: 'Recipe',
          tabBarIcon: tabInfo => (
            <View style={SharedStyles.center}>
              <IconFontAwesome
                name="spoon"
                size={25}
                color={tabInfo.focused ? 'white' : 'gray'}
              />
              <IconMaterial
                name="silverware-fork-knife"
                size={25}
                color={tabInfo.focused ? 'white' : 'gray'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="My Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: tabInfo => (
            <Ionicons
              name="person"
              size={25}
              color={tabInfo.focused ? 'white' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {BottomTabsStack};
