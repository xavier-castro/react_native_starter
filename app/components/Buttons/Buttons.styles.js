import styled from 'styled-components';

const ClearButtonTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;

const ClearButtonContainerView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ClearButtonIconImage = styled.Image`
  width: 19;
  margin-right: 11;
`;

const ClearButtonText = styled.Text`
  color: aliceblue;
  font-size: 19;
  font-weight: 600;
  padding-top: 10;
  padding-bottom: 10;
`;

export {
  ClearButtonContainerView,
  ClearButtonText,
  ClearButtonTouchableOpacity,
  ClearButtonIconImage,
};
