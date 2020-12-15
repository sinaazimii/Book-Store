import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from './src/Assets/Colors'
import HomeStack from './src/Navigators/HomeStack';

const {width , height} = Dimensions.get('window');


const SettingsStack = createStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
    <SettingsStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
      <SettingsStack.Screen
        name="HomeStack"
        component={HomeStack}
      />
    </SettingsStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header : { 
    height : height/11 ,  
    alignItems: 'flex-start' , 
    flexDirection : 'row' ,
    display : 'flex' , 
    backgroundColor:Colors.primaryColor
  } , 
  headerText :{
    fontSize : width/20 , 
    color : Colors.textColor
  } , 
  headerImagesContainer: { 
    flex: 1/5 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
  }, 
  headerTitleContainer: { 
    flex: 3/5 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
  },
});
export default App;