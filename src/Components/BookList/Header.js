import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'
import {Icon} from 'react-native-elements'

const {width , height} = Dimensions.get('window');

function Header({navigation,title}) {
  return (
      <View style={styles.header}>
        <View style={styles.backContainer}>
          <Icon
            name='arrow-back-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={30}
            onPress={()=>navigation.goBack()}
          />
        </View>
          <Text style={styles.title}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header : { 
      flex : 1/10 ,
      alignItems: 'flex-start' , 
      flexDirection : 'row' ,
      display : 'flex' , 
      backgroundColor:Colors.secondaryColor,
      alignItems:'center' , 
      width:width,
      justifyContent :'flex-start',
      elevation:3,
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
  title : {
    fontSize : width/20 , 
    color : Colors.textColor , 
  }
});
  
  
  export default Header;