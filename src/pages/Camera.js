import React, { Component } from 'react';
import {  
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraPage extends Component {
  static navigationOptions = {
    title: 'Camera'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            // flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14, color: 'white'}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    const { navigate } = this.props.navigation;
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      // console.log(data.uri);
      navigate('ScanForm', {
        imageUri: data.uri
      })
    }
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 40
  }
});
