import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {SharedStyles} from '../../common';
import styles from './styles';

export const IntroNextBtn = ({navigateIntro}) => {
  return (
    <TouchableHighlight
      style={[SharedStyles.center, styles.btn]}
      onPress={() => {
        navigateIntro('next');
      }}>
      <Text style={[styles.btnText]}>Next</Text>
    </TouchableHighlight>
  );
};
``