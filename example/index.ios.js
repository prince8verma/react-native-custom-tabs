/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {CustomTabs} from 'react-native-custom-tabs';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Click on the link below!
        </Text>
        <TouchableHighlight
          underlayColor={'#CFD8DC'}
          onPress={() => this.openGoogle()} >
          <Text style={styles.link}>
            https://www.google.com
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  openGoogle() {
    CustomTabs.openURL('https://www.google.com').then((launched: boolean) => {
      console.log(`Launched custom tabs: ${launched}`);
    }).catch(err => {
      console.error('An error occurred', err)
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  link: {
    color: 'crimson',
  }
});

AppRegistry.registerComponent('Example', () => Example);
