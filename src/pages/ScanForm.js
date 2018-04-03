import React, { Component } from 'react';
import {  
  StyleSheet,
  View, 
  Text, 
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar
 } from 'react-native';
 import Axios from 'axios'

export default class ScanForm extends Component {
  static navigationOptions = {
    title: 'Scan Form'
  }
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.handleChangeText = this.handleChangeText.bind(this)

  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    const imageUri = params ? JSON.stringify(params.imageUri) : ' ';
    this.setState({url: imageUri.replace(/\"/g, "")})
  };
  
  componentDidUpdate() {
    console.log(this.state.name)
    console.log(this.state.url)
  }
  handleChangeText(val){
    let text = val
    this.setState({name: text})
    
  }
  sendFormInfo(){
    // TODO: replace is not the correct function
    // change navigation to send form state to the parent state
    Axios.post('http://localhost:1337/scan', {
      name: this.state.name,
      imageUrl: this.state.url
    })
      .then((response)=>{
        console.log(response)
        const { popToTop } = this.props.navigation;
        if (this.state.name){
          popToTop()
        }
      })
      .catch((err)=>{
        console.log(err)
      })

  }
  render() {    
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text 
          style={styles.welcome}
          value={this.state.name} 
        />
        <TextInput 
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChangeText}
        />
        <Image 
          style={{width: 300, height: 500}} 
          source={{uri: this.state.url}} 
        />
        <TouchableOpacity
            onPress={this.sendFormInfo.bind(this)}
            style = {styles.button}
        >
            <Text 
              style={styles.button}
            > SAVE </Text>
        </TouchableOpacity>
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
    borderWidth: 1,
    marginBottom: 15,
    padding: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    margin: 15,
  },

  buttonText: {
    fontSize: 14,
    color: 'green'
  }
});
