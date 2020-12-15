import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Screens/Home'
import Book from '../Screens/Book'
import Profile from '../Screens/Profile'
import HomeInnerStack from './HomeInnerStack';
import Colors from './../Assets/Colors'
import Login from '../Screens/Login';
import AuthorizationStack from './AuthorizationStack';

const MyStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const {width , height} = Dimensions.get('window');
function HomeStack() {
  return ( 
    // <MyStack.Navigator headerMode='none'>
    //   <MyStack.Screen name="Home" component={Home} />
    //   <MyStack.Screen name="Book" component={Book} />
    //   <MyStack.Screen name="Profile" component={Profile} />
    // </MyStack.Navigator>
    <Drawer.Navigator initialRouteName="Home" drawerType='slide'
     drawerStyle={{backgroundColor:Colors.secondTextColor,width:width/2,borderBottomRightRadius:10}
     }>
      <Drawer.Screen name="Home" component={HomeInnerStack} />
      <Drawer.Screen name="Settings" component={Book} />
      <Drawer.Screen name="About" component={Book} />
      <Drawer.Screen name="Rate" component={Book} />
      <Drawer.Screen name="Logout" component={AuthorizationStack} options={{ swipeEnabled: false }} />
    </Drawer.Navigator>
  );
}
export default HomeStack