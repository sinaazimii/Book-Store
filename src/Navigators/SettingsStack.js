import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import First from '../Screens/First'
import Second from '../Screens/Second' 

const myStack = createStackNavigator();

function SettingsStack() {
  return ( 
    <myStack.Navigator>
      <myStack.Screen name="First" component={First} />
      <myStack.Screen name="Second" component={Second} />
    </myStack.Navigator>
  );
}

export default SettingsStack