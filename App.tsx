import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, Dimensions  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegName from './src/screens/auth/RegName';
import RegNumber from './src/screens/auth/RegNumber';
import RegEmailID from './src/screens/auth/RegEmailID';
import RegPassword from './src/screens/auth/RegPassword';
import { auth } from "./src/config/firebase"
import VideoCallScreen from './src/screens/VideoCallScreen';
import { RootStackParamList } from './src/types/navigation';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={{...DefaultTheme, colors: {...DefaultTheme.colors, background: 'rgba(64,171,250, 0.15'}}}>
      <StatusBar backgroundColor='#4875FF' style='light' />
        <SafeAreaProvider>
                      <ImageBackground style={{height: screenHeight, width: screenWidth}} source={require('./assets/background.jpg')} resizeMode="cover">
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#4875FF'}, headerTintColor: '#fff'}} initialRouteName="LoginScreen">
              <Stack.Screen name = "LoginScreen" component = {LoginScreen} options = {{title: 'Log into your account!'}} 
              /><Stack.Screen
                name = "HomeScreen"
                component = {HomeScreen}
                options = {{title: 'Welcome, ' + auth?.currentUser?.displayName + '!'}} />
                <Stack.Screen
                name = "RegName"
                component = {RegName}
                options = {{title: 'Enter your name'}}
                /><Stack.Screen
                name = "RegNumber"
                component = {RegNumber}
                options = {{title: 'Enter your phone number'}}
                /><Stack.Screen
                name = "RegEmailID"
                component = {RegEmailID}
                options = {{title: 'Enter e-mail ID'}}
                /><Stack.Screen
                name = "RegPassword"
                component = {RegPassword}
                options = {{title: 'Create a Password'}}
                /><Stack.Screen
                name = "VideoCallScreen" 
                component = {VideoCallScreen}
                options={{ headerShown: false }}
              />
          </Stack.Navigator>
        </ImageBackground>
      </SafeAreaProvider>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  imageBack: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  }
})

