import React from 'react';
import { Image } from 'react-native';
import {
  LogoContainerView, LogoImageBackground, LogoImage, LogoText,
} from './Logo.styles';

const Logo = () => (
  <LogoContainerView>
    <LogoImageBackground resizeMode="contain" source={require('./images/background.png')}>
      <LogoImage resizeMode="contain" source={require('./images/logo.png')} />
    </LogoImageBackground>
    <LogoText>Currency Converter</LogoText>
  </LogoContainerView>
);

export default Logo;
