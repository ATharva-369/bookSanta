import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login'
import {TAB} from './components/AppTabNavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AD} from './components/DrawerNavigation'
export default function App() {
  return (
    <View style={styles.container}>
<AppContainer/>
      <StatusBar style="auto" />
    </View>
  );
}
const SwitchNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Drawer:{screen:AD},
})
const AppContainer = createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
