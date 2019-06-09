import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';

import {
  TextInputView,
  TextInputText,
  TextInputStyledInput,
  TextInputBorderView,
  TextInputTouchableHighlight,
} from './TextInput.styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const underLayColor = color('#FFFFFF').darken(0.1);

  return (
    <TextInputView editable={editable}>
      <TextInputTouchableHighlight underlayColor={underLayColor} onPress={onPress}>
        <TextInputText>{buttonText}</TextInputText>
      </TextInputTouchableHighlight>
      <TextInputBorderView />
      <TextInputStyledInput underlineColorAndroid="transparent" {...props} />
    </TextInputView>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
