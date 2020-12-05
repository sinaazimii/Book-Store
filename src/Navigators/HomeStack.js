import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from '../Screens/Home'
import Book from '../Screens/Book'

const MyStack = createStackNavigator();

function HomeStack() {
  return ( 
    <MyStack.Navigator headerMode='none'>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Book" component={Book} />
    </MyStack.Navigator>
  );
}
export default HomeStack