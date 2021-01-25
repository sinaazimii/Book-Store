import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeInnerStack from './HomeInnerStack';
import Colors from './../Assets/Colors'
import AuthorizationStack from './AuthorizationStack';
import About from '../Screens/About';
import Terms from '../Screens/Terms';

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
    <Drawer.Navigator initialRouteName="Logout" drawerType='slide' 
     drawerStyle={{backgroundColor:Colors.textColor,width:width/2,borderBottomRightRadius:10}}
     drawerContentOptions={{
        activeTintColor:Colors.primaryColor ,
        labelStyle :{color:Colors.secondaryColor,fontSize:width/27} ,
      }}
     >
      <Drawer.Screen name="Home" component={HomeInnerStack} />
      <Drawer.Screen name="Terms of Service" component={Terms}  />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Rate this app" component={Terms} />
      <Drawer.Screen name="Logout" component={AuthorizationStack} options={{ swipeEnabled: false }} />
    </Drawer.Navigator>
  );
}
export default HomeStack