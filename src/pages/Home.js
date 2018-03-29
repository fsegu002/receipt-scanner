import React, { Component } from 'react';
import {  
  StyleSheet,
  View, 
  Text, 
  Image
} from 'react-native';

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text
          onPress={ ()=> navigate('Camera') } 
          style={styles.welcome}> Home Page </Text>
      </View>
    );
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});