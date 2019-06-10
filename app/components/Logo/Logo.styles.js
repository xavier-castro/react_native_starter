import { Dimensions } from 'react-native';
import styled from 'styled-components';

const imageWidth = Dimensions.get('window').width / 2;

const LogoContainerView = styled.View`
  align-items: center;
  justify-content: center;
`;

const LogoImageBackground = styled.ImageBackground`
  align-items: center;
  justify-content: center;
  width: ${imageWidth};
  height: ${imageWidth};
`;

const LogoImage = styled.Image`
  width: ${imageWidth / 2};
`;

const LogoText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 32;
  letter-spacing: -0.5;
  padding: 20px;
`;

export {
  LogoContainerView, LogoImageBackground, LogoImage, LogoText,
};
