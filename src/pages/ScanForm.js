import React, { Component } from 'react';
import {  
  StyleSheet,
  View, 
  Text, 
  TextInput,
  Image
 } from 'react-native';

export default class ScanForm extends Component {
  static navigationOptions = {
    title: 'Scan Form'
  }
  constructor(props){
    super(props)
    this.state = {
      name: '',
      url: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }
  componentDidUpdate() {
    console.log(this.state.name)
  }
  handleChangeText(val){
    let text = val
    this.setState({name: text})
    
  }
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const imageUri = params ? JSON.stringify(params.imageUri) : '';
    
    return (
      <View style={styles.container}>
        <Text 
          style={styles.welcome}
          value={this.state.name} />
        <TextInput 
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChangeText}
        />
        { (imageUri != '') ? <Image style={{width: 300, height: 500}} source={{uri: imageUri.replace(/\"/g, "") }} /> : false}
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
  input: {
    width: 300,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
