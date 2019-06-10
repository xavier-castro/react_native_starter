import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { HeaderView, HeaderTouchableOpacity } from './Header.styles';

const Header = ({ onPress }) => (
  <HeaderView>
    <HeaderTouchableOpacity onPress={onPress}>
      <Ionicons
        name="ios-settings"
        size={34}
        color="aliceblue"
        style={{ paddingTop: 40, paddingBottom: 30 }}
      />
    </HeaderTouchableOpacity>
  </HeaderView>
);

Header.propTypes = {
  onPress: PropTypes.func,
};

export default Header;
