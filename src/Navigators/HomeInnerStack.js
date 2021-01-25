import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../Screens/Home'
import Book from '../Screens/Book'
import Profile from '../Screens/Profile'
import EditProfile from '../Screens/EditProfile';
import BookList from '../Screens/BookList'
import ShoppingCart from '../Screens/ShoppingCart';
import ShoppingAddress from '../Screens/ShoppingAddress';
import CreditCard from '../Screens/CreditCard';

const MyStack = createStackNavigator();


function HomeInnerStack() {
  return ( 
    <MyStack.Navigator headerMode='none'>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Book" component={Book} />
      <MyStack.Screen name="Profile" component={Profile} />
      <MyStack.Screen name="EditProfile" component={EditProfile} />
      <MyStack.Screen name="BookList" component={BookList}/>
      <MyStack.Screen name="ShoppingCart" component={ShoppingCart}/>
      <MyStack.Screen name="ShoppingAddress" component={ShoppingAddress}/>
      <MyStack.Screen name="CreditCard" component={CreditCard}/>
    </MyStack.Navigator>
  );
}
export default HomeInnerStack