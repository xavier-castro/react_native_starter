import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#979797',
  $inputText: '#797979',
  $darkText: '#343434',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e76af',
});

export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);
