/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Preload from '../screens/Preload';
import Estudantes from '../screens/Estudantes';
import Estudante from '../screens/Estudante';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../assets/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function AppStack() {
  return (
    <Tab.Navigator
      initialRouteName="Estudantes"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Estudantes"
        component={Estudantes}
        options={{
          tabBarLabel: 'Alunos',
          tabBarIcon: () => (
            <Icon name="people" color={COLORS.primary} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primaryDark} />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
        <Stack.Screen name="Estudante" component={Estudante} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
