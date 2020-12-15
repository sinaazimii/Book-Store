import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../Screens/Home'
import Book from '../Screens/Book'
import Profile from '../Screens/Profile'
import EditProfile from '../Screens/EditProfile';
import BookList from '../Screens/BookList'

const MyStack = createStackNavigator();


function HomeInnerStack() {
  return ( 
    <MyStack.Navigator headerMode='none'>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Book" component={Book} />
      <MyStack.Screen name="Profile" component={Profile} />
      <MyStack.Screen name="EditProfile" component={EditProfile} />
      <MyStack.Screen name="BookList" component={BookList}/>
    </MyStack.Navigator>
  );
}
export default HomeInnerStack