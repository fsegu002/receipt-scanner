import React, { Component } from 'react';
import {  
  StyleSheet,
  View, 
  Image,
  Text,
  TextInput,
  StatusBar
 } from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { Input, Button } from 'react-native-elements';
 import Axios from 'axios'

export default class ScanForm extends Component {
  static navigationOptions = {
    title: 'Scan Form'
  }
  constructor(props){
    super(props)
    this.state = {
      
    }
    this._handleChangeName = this._handleChangeName.bind(this)
    this._handleChangeTotal = this._handleChangeTotal.bind(this)

  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;    
    const imageUri = params ? JSON.stringify(params.imageUri) : ' ';
    this.setState({url: imageUri.replace(/\"/g, "")});
    const newDate = this._customDate()    
    this.setState({name: `Scan: ${newDate}`})
  }
  
  componentDidUpdate() {
    console.log(this.state)
  }
  _customDate() {
    let newDate = new Date()
    let customDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
    return customDate
  }
  _handleChangeName(val){
    let text = val
    this.setState({name: text})    
  }
  _handleChangeTotal(val){
    let text = val
    this.setState({total: text})    
  }
  _sendFormInfo(){
    let form = {
      name: this.state.name,
      total: this.state.total,
      imageUrl: this.state.url
    }
    Axios.post('https://receipt-scanner-api.herokuapp.com/scan', form)
      .then((response)=>{
        console.log(response)
        const { popToTop } = this.props.navigation;
        if (this.state.name && this.state.total){
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
        <TextInput 
          style={styles.input}
          value={this.state.name}
          onChangeText={this._handleChangeName}
          placeholder='Name'
        />
        <TextInput 
          style={styles.input}
          value={this.state.total}
          onChangeText={this._handleChangeTotal}
          placeholder='Total'
          keyboardType='numeric'
        />
        <Image 
          style={{width: 300, height: 300}} 
          source={{uri: this.state.url}} 
        />
        <Button
          style={styles.button}
          onPress={this._sendFormInfo.bind(this)}
          title='Save'   
          color= '#6CF0AE'
          buttonStyle={{ backgroundColor: 'transparent'}}       
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 10
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6CF0AE',
    width: 300
  },
});
