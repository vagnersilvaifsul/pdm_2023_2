import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import {AuthenticationProvider} from './src/context/Authentication';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppStack() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AuthenticationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthStack">
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthenticationProvider>
  );
}
