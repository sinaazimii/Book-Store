import * as React from 'react';
import { Button, Text, View , Image , Dimensions , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Home from './src/Navigators/HomeStack'
import Colors from './src/Assets/Colors'

const {width , height} = Dimensions.get('window');

function MyHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerImagesContainer}>
        <Image
          style={{width: width/9.85, height: width/9.85 , borderRadius:width/13.7 }}
          source={require('./src/Assets/menu-outline.png')}
        />
      </View>

      <View style={styles.headerTitleContainer}>
        <Text  style={styles.headerText}>Home</Text>
      </View>
      
      <View style={styles.headerImagesContainer}>
        <Image
          style={{ width: width/6.85, height: width/6.85 , borderRadius:width/13.7 }}
          source={require('./src/Assets/profile.jpg')}
        />
      </View>

    </View>

  );
}

const SettingsStack = createStackNavigator();

function App() {
  return ( 
    <NavigationContainer>
    <SettingsStack.Navigator
    // headerMode = "screen"
    // screenOptions={{
    //   headerStyle: {
    //     height:height/8.5 ,
    //   },
    //   header: props => <MyHeader {...props} />
    // }}
    screenOptions={{
      headerShown: false
    }}
  >
      <SettingsStack.Screen
        name="Home"
        component={Home}
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
    // marginTop :width/13.7 , 
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