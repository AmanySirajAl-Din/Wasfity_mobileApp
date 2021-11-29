import React, { Component } from 'react';
import {View, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export class FirebaseApp extends Component {
    constructor(props){
        
    }
  getRecipe = async () => {
    const recipeDoc = firestore()
      .collection('recipes')
      .doc('3og7ENHOvQykIj7NBcDN')
      .get();
  };
  render(){
  return (
    <View>
      <Text>Firebase App</Text>
    </View>
  );
  }
};
