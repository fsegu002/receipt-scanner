import React, { Component } from 'react';
import {  
  View, 
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import Axios from 'axios';

export default class ScanDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      scan: {
        name: '',
        total: '',
        imageUrl: ''
      }
    }
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
  }
  componentDidMount = () => {
    const { params } = this.props.navigation.state;
    Axios.get('https://receipt-scanner-api.herokuapp.com/scan/' + params.scanId)
      .then((response) => {
        let scan = response.data
        this.setState({scan}, () => {
          console.log('this.state')
          console.log(this.state)
        })
      })
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <Text 
          style={styles.input}
          value={this.state.scan.name}
          placeholder='Name'
        />
        <Text 
          style={styles.input}
          value={this.state.scan.total}
          placeholder='Total'
          keyboardType='numeric'
        />
        <Image 
          style={{width: 300, height: 300}} 
          source={{uri: this.state.scan.url}} 
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