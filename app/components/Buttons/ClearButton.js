import React from 'react';
import PropTypes from 'prop-types';

import {
  ClearButtonContainerView,
  ClearButtonText,
  ClearButtonIconImage,
  ClearButtonTouchableOpacity,
} from './Buttons.styles';

const ClearButton = ({ text, onPress }) => (
  <ClearButtonTouchableOpacity onPress={onPress}>
    <ClearButtonContainerView>
      <ClearButtonIconImage resizeMode="contain" source={require('./images/icon.png')} />
      <ClearButtonText>{text}</ClearButtonText>
    </ClearButtonContainerView>
  </ClearButtonTouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
