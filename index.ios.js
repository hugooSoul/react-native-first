import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import App from './src/App.js';

/*
 * TODO Step 2:
 *
 * 1. Import App.js file above using: import App.js from './src/App.js'
 * 2. Delete ReactNative Component
 * 3. Delete styles object
 * 4. Delete ReactNativeComponent from registerComponent
 * 5. Add App Component into the registerComponent
 */

/*export default class reactnative_brandybergh extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}*/

/*const styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

AppRegistry.registerComponent('reactnative_brandybergh', () => App); //reactnative_brandybergh
