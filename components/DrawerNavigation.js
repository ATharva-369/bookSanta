import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator } from 'react-navigation-drawer'
import Menu from './Menu';
import {TAB} from './AppTabNavigator'
export const AD = createDrawerNavigator({
    Home:{screen:TAB},
},
{contentComponent:Menu},
{
    initialRouteName:'Home'
}
)
