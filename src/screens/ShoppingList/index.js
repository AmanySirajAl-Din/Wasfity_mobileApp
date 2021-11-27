import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {SharedStyles} from '../../common';

import styles from './styles';

export const ShoppingList = () => {
  return (
    <View style={[SharedStyles.h100, SharedStyles.center, styles.mainView]}>
      <Text style={styles.text}>Your Shopping List is Empty</Text>
    </View>
  );
};
