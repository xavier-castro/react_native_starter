import styled from 'styled-components';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

const TextInputView = styled.View`
  display: flex;
  background-color: ${props => (props.editable ? '#FFFFFF' : '#efefef')};
  width: 90%;
  height: ${INPUT_HEIGHT};
  border-radius: ${BORDER_RADIUS};
  flex-direction: row;
  align-items: center;
  margin-top: 11;
`;

const TextInputTouchableHighlight = styled.TouchableHighlight`
  height: ${INPUT_HEIGHT};
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-top-left-radius: ${BORDER_RADIUS};
  border-bottom-left-radius: ${BORDER_RADIUS};
`;

const TextInputText = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: #042f40;
  padding-left: 8;
  padding-right: 8;
`;

const TextInputStyledInput = styled.TextInput`
  height: ${INPUT_HEIGHT};
  flex: 1;
  font-size: 18;
  padding-left: 8;
  padding-right: 8;
  color: #2a2c2b;
`;

const TextInputBorderView = styled.View`
  height: ${INPUT_HEIGHT};
  width: 0.3;
  background-color: #979797;
`;

export {
  TextInputView,
  TextInputTouchableHighlight,
  TextInputText,
  TextInputStyledInput,
  TextInputBorderView,
};
