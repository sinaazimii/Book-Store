import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'
import {Icon} from 'react-native-elements' 

const {width , height} = Dimensions.get('window');

function Header({navigation}) {
  return (
      <View style={styles.header}>
        <View style={styles.backContainer}>
        <Icon
            name='arrow-back-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/13}
            onPress={()=>navigation.goBack()}
          />
        </View>
        
        <View style={styles.bookmarkContainer}>
        <Icon
            name='checkbox-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/13}
            onPress={()=>navigation.navigate('Profile')}
          />
        </View>
  
      </View>
  
    );
}

const styles = StyleSheet.create({
header : { 
    flex : 1/10 ,
    alignItems: 'flex-start' , 
    flexDirection : 'row' ,
    display : 'flex' , 
    backgroundColor:Colors.primaryColor,
    alignItems:'center' , 
    width:width,
    justifyContent :'flex-start',
} , 
backContainer: { 
    flex: 1/2 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
    alignItems:'flex-start',
    marginLeft : width/20 ,
}, 
bookmarkContainer: { 
    flex: 1/2 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
    alignItems:'flex-end',
    marginRight : width/20 ,
}, 
});
  
  
  export default Header;