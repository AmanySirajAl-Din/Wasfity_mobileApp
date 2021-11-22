import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './MainStack';

const AppContainer = () => (
  // NavigationContainer >> contains all the stacks
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default AppContainer;
