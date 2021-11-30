/* import React, {Component} from 'react';
import {View, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

export class FirebaseApp extends Component {
  constructor(props) {
    super(props);
    this.getRecipe();
  }
  getRecipe = async () => {
    const recipeDoc = firestore()
      .collection('recipes')
      .doc('3og7ENHOvQykIj7NBcDN')
      .get();
    console.log(recipeDoc);
  };
  render() {
    return (
      <View>
        <Text>Firebase App</Text>
      </View>
    );
  }
}
 */