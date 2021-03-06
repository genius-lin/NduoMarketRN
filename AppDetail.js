import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Toolbar from './Toolbar.js';

export default class AppDetail extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#dddddd" translucent={false} />
        <Toolbar onBack={this.props.gotoBack} title="应用详情" />
        <View style={styles.content}>
          <Text>应用详情页面</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
