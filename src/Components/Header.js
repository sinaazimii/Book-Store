import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from './../Assets/Colors'
const {width , height} = Dimensions.get('window');
function MyHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerImagesContainer}>
          <Image
            style={{width: width/9.85, height: width/9.85 , borderRadius:width/13.7 }}
            source={require('./../Assets/menu-outline.png')}
          />
        </View>
  
        <View style={styles.headerTitleContainer}>
          <Text  style={styles.headerText}>Home</Text>
        </View>
        
        <View style={styles.headerImagesContainer}>
          <Image
            style={{ width: width/6.85, height: width/6.85 , borderRadius:width/13.7 }}
            source={require('./../Assets/profile.jpg')}
          />
        </View>
  
      </View>
  
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
  
  
  export default MyHeader;