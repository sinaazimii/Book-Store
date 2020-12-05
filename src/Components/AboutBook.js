import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../Assets/Colors'

const {width , height} = Dimensions.get('window');

function AboutBook() {
    return (
      <View style={styles.header}>

        <View style={styles.bookmarkContainer}>

        </View>
        <View style={styles.backContainer}>

        </View>
  
      </View>
  
    );
}

const styles = StyleSheet.create({
header : { 
    flex : 3/10 ,
    zIndex:-1 ,
    // borderWidth:2,  
    alignItems: 'flex-start' , 
    flexDirection : 'row' ,
    display : 'flex' , 
    backgroundColor:Colors.textColor,
    alignItems:'center'
} , 
backContainer: { 
    flex: 1/2 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
    alignItems:'flex-end',
    marginRight : width/20 ,
}, 
bookmarkContainer: { 
    flex: 1/2 , 
    alignItems : 'center', 
    justifyContent :'center' ,
    height :height/11 , 
    alignItems:'flex-start',
    marginLeft : width/20
}, 
});
  
  
  export default AboutBook;