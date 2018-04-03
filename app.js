import React, { Component } from 'react';
import {  
  View, 
  Text, 
  StyleSheet
} from 'react-native';
import { StackModal } from './src/configuration/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackModal />
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
