import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomePage from '../pages/Home'
import CameraPage from '../pages/Camera'
import ScanForm from '../pages/ScanForm'

export const Tabs = TabNavigator({
  Home: { screen: HomePage },
  Camera: { screen: CameraPage },
  ScanForm: { screen: ScanForm }
}, {
  initialRouteName: 'Home'
    
})

export const StackNav = StackNavigator({
  Home: { screen: HomePage },
  Camera: { screen: CameraPage }
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#ffffff'
    }
  }
})


