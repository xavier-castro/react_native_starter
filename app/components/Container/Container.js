import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import ContainerView from './Container.styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <LinearGradient
      colors={['#3658C9', '#0076ff']}
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      <ContainerView>{children}</ContainerView>
    </LinearGradient>
  </TouchableWithoutFeedback>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
