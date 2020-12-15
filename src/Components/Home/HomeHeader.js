import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'
const {width , height} = Dimensions.get('window');
import { DrawerActions  } from '@react-navigation/native';
import {Icon} from 'react-native-elements'

function MyHeader({navigation}) {
    return (
      <View style={styles.header}>
        <View style={styles.headerImagesContainer}>
        <Icon
            name='menu-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/10}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        </View>
  
        <View style={styles.headerTitleContainer}>
          <Text  style={styles.headerText}>Home</Text>
        </View>
        
        <View style={styles.headerImagesContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Image
            style={{ width: width/6.85, height: width/6.85 , borderRadius:width/13.7 }}
            source={require('../../Assets/profile.jpg')}
          />
          </TouchableOpacity>
        </View>
  
      </View>
  
    );
}

const styles = StyleSheet.create({
header : { 
    flex:0.8/10,  
    alignItems: 'flex-start' , 
    flexDirection : 'row' ,
    display : 'flex' , 
    backgroundColor:Colors.primaryColor ,
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
  
  
  export default MyHeader;