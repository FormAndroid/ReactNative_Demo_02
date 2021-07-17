/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';

import { SafeAreaView, StatusBar, useColorScheme, Image, View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { color } from './src/globalStyle';

import Home from './src/containers/home/home';
import About from './src/containers/about/about';
import StartScreen from './src/containers/start-screen/start-screen';

const Drawer = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setTimeout(() => setWait(false), 5000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {wait ? (
        <StartScreen />
      ) : (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName='home'
            drawerContentOptions={{
              activeBackgroundColor: color.yellow,
              activeTintColor: color.gray
            }}
            drawerStyle={{
              backgroundColor: color.lightGray,
            }}
          >
            <Drawer.Screen name='home' component={Home}
              options={{
                title: 'Accueil',
                drawerIcon: ({ color, size, focused }) => (
                  <Image
                    source={require('./src/icons/home.png')}
                    style={{ width: size, height: size }} />
                )
              }} />
            <Drawer.Screen name='about' component={About}
              options={{
                title: 'A propos',
                drawerIcon: (props) => (
                  <Image
                    source={require('./src/icons/about.png')}
                    style={{ width: props.size, height: props.size }} />
                )
              }} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default App;
