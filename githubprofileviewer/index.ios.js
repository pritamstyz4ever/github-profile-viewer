import React, { Component } from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet } from 'react-native';
import Main from './app/components/Main';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute = {{
          title : "githubprofileviewer",
          component: Main 
        }} />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})

AppRegistry.registerComponent('githubprofileviewer', () => App);
