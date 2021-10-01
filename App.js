import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Home from './components/Home';
import Profile from './components/Profile';
import JavaScripts from './components/JavaScripts';

export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Java" component={JavaScripts} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({});
