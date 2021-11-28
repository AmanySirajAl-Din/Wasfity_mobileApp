import React from 'react';
import {View, Text} from 'react-native';
import {SharedStyles, COLORS} from '../../common';

import styles from './styles';

import {RadioButton} from 'react-native-paper';

/* import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button'; */

export const Filter = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={[styles.mainView]}>
      <Text style={[styles.text, styles.title]}>Sort By:</Text>
      <View style={[styles.radioContainer]}>
        <RadioButton
          value="prepare time"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
          color={COLORS.orange}
        />
        <Text style={[styles.text]}>Prepare time</Text>
      </View>
      <View style={[styles.radioContainer]}>
        <RadioButton
          value="Dificulty"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
          color={COLORS.orange}
        />
        <Text style={[styles.text]}>Dificulty</Text>
      </View>
    </View>
  );
};
