import React from 'react';
import {View, Text} from 'react-native';
import {SharedStyles} from '../../common';

import styles from './styles';

export const Filter = () => {
  return (
    <View style={[SharedStyles.h100, SharedStyles.center, styles.mainView]}>
      <Text style={styles.text}>Filter</Text>
    </View>
  );
};