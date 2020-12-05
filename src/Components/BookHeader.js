import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../Assets/Colors'

const {width , height} = Dimensions.get('window');

function BookHeader() {
    return (
      <View style={styles.header}>

        <View style={styles.bookmarkContainer}>
          <Image
            style={{ width: width/14, height: width/14 }}
            source={require('./../Assets/left-arrow.png')}
          />
        </View>
        <View style={styles.backContainer}>
          <Image
            style={{width: width/12, height: width/12  }}
            source={require('./../Assets/bookmark.png')}
          />
        </View>
  
      </View>
  
    );
}

const styles = StyleSheet.create({
header : { 
    flex : 1/10 ,
    // borderWidth:2,  
    alignItems: 'flex-start' , 
    flexDirection : 'row' ,
    display : 'flex' , 
    backgroundColor:Colors.primaryColor,
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
  
  
  export default BookHeader;