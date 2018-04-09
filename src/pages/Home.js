import React, { Component } from 'react';
import {  
  StyleSheet,
  View, 
  SectionList,
  Text, 
  Image,
  Button,
  StatusBar,
} from 'react-native';
import { ListItem } from 'react-native-elements'
import Axios from 'axios';

export default class HomePage extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    
    return {
      title: 'Home',
      headerRight: <Button onPress={() => params.goToCamera() } title="Add" color="#fff" /> ,
    };
  };
  
  constructor(props){
    super(props)
    this.state = {
      scans: []
    } 
  }

  componentDidMount () {
    this.props.navigation.setParams({ goToCamera: this._goToCamera.bind(this) })

    Axios.get('https://receipt-scanner-api.herokuapp.com/scan')
      .then((response)=>{
        this.setState({scans: response.data})
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
  }  
  
  _goToCamera(){
    const { navigate } = this.props.navigation;
    navigate('Camera')
  }

  _handleOnPress = (id) => {
    const { navigate } = this.props.navigation;
    navigate('ScanDetail', { scanId: id })
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        {
          this.state.scans.map((l, i) => (
            <ListItem
              key={i}
              // avatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              onPress={() => this._handleOnPress(l._id)}
              // subtitle={l.subtitle}
            />
          ))
        }
      </View>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
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