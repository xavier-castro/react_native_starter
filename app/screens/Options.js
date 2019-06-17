import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { now } from 'moment';
import { connectAlert } from '../components/Alert';

import { ListItem, Separator } from '../components/Lists';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPressed = () => {
    const { navigation } = this.props;
    navigation.navigate('Themes');
  };

  handleSitePressed = () => {
    const { alertWithType } = this.props;
    Linking.openURL('http://handlebarlabs.com/').catch(() => alertWithType('error', 'Sorry!', "Handlebarslabs.com can't be open right now. "));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPressed}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePressed}
          customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
