import styled from 'styled-components';

const HeaderView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const HeaderTouchableOpacity = styled.TouchableOpacity`
  align-self: flex-end;
  padding-top: 15;
  padding-right: 25;
  @media (ios) {
    padding-top: 60;
  }
`;

export { HeaderView, HeaderTouchableOpacity };
