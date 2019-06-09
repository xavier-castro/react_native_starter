import React from 'react';
import PropTypes from 'prop-types';

import {
  TextInputView,
  TextInputText,
  TextInputStyledInput,
  TextInputBorderView,
  TextInputTouchableHighlight,
} from './TextInput.styles';

const InputWithButton = ({ onPress, buttonText, editable = true }) => (
  <TextInputView>
    <TextInputTouchableHighlight onPress={onPress}>
      <TextInputText>{buttonText}</TextInputText>
    </TextInputTouchableHighlight>
    <TextInputBorderView />
    <TextInputStyledInput />
  </TextInputView>
);

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
