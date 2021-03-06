import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';

const myStack = createStackNavigator();

function AuthorizationStack() {
  return ( 
    <myStack.Navigator headerMode='none' initialRouteName="Login">
      <myStack.Screen name="Login" component={Login} />
      <myStack.Screen name="SignUp" component={SignUp} />
    </myStack.Navigator>
  );
}

export default AuthorizationStack;  