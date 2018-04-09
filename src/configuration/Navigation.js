import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../pages/Home'
import Camera from '../pages/Camera'
import ScanForm from '../pages/ScanForm'
import ScanDetail from '../pages/ScanDetail'

export const Stack = StackNavigator({
  Home: { screen: Home },
  ScanForm: { screen: ScanForm },
  ScanDetail: { screen: ScanDetail }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#6CF0AE'
    },
    headerTitleStyle: {color: '#ffffff'}
  }
})
export const StackModal = StackNavigator(
  {
    Main: { screen: Stack },
    Camera: { screen: Camera },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)
// export const Tabs = TabNavigator({
//   Home: { screen: Home },
//   Camera: { screen: Stack }
// }, {
//   initialRouteName: 'Home'
    
// })




