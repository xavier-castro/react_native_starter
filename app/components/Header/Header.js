import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderView, HeaderTouchableOpacity } from './Header.styles';

const Header = () => (
  <HeaderView>
    <HeaderTouchableOpacity>
      <Ionicons name="ios-settings" size={34} color="aliceblue" style={{ paddingTop: 40, paddingBottom: 30 }} />
    </HeaderTouchableOpacity>
  </HeaderView>
);

export default Header;
