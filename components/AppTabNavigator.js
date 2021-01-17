import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator } from 'react-navigation-tabs'
import Donate from '../screens/Donate';
import Request from '../screens/Request';


export const TAB= createBottomTabNavigator({
  Donate:{screen:Donate},
  Request:{screen:Request}
})


