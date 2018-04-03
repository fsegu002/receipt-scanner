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

    Axios.get('http://localhost:1337/scan')
      .then((response)=>{
        this.setState({scans: response.data})
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  
  _goToCamera(){
    console.log('clicked add')
    console.log(this.props)
    const { navigate } = this.props.navigation;
    navigate('Camera')
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={({item}) => <Text>{item.name}</Text>}
          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          keyExtractor={(item, index) => index.toString()}
          sections={[ // homogeneous rendering between sections
            {data: this.state.scans, title: 'test title'},
          ]}
        />
      </View>
    );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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