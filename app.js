import React, { Component } from 'react';
import {  
  View, 
  Text, 
  StyleSheet
} from 'react-native';
import { Tabs } from './src/configuration/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  }
})
