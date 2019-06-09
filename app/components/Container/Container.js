import React from 'react';
import PropTypes from 'prop-types';
import ContainerView from './Container.styles';

const Container = ({ children }) => <ContainerView>{children}</ContainerView>;

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
