import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'
import {Badge, Icon, withBadge } from 'react-native-elements'
const {width , height} = Dimensions.get('window');

const saveBook = (navigation) => {
  
}
const addToCart = (navigation) => {
  /////add to cart
  navigation.navigate('ShoppingCart')
}
function BookHeader({navigation}) {
  const BadgedIcon = withBadge(3)(Icon)
    return (
      <View style={styles.header}>

        <View style={styles.backContainer}>
        <Icon
            name='arrow-back-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/11.2}
            onPress={()=>navigation.goBack()}
          />
          
        </View>
        <View style={styles.cartContainer}>
        <BadgedIcon
            badgeStyle={{color:'blue'}}
            name='cart-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/11.2}
            onPress={() => addToCart(navigation)}
          />
        </View>
        <View style={styles.bookmarkContainer}>
        <Icon
            name='bookmark-outline'
            type='ionicon'
            color= {Colors.textColor}
            size={width/11.2}
            onPress={() => saveBook(navigation)}
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
    backgroundColor:Colors.secondaryColor,
    alignItems:'center' ,
    elevation:3
} , 
  backContainer: { 
      flex: 1/2 , 
      justifyContent :'center' ,
      height :height/11 , 
      alignItems:'flex-start',
      marginLeft : width/20 ,
  }, 
  bookmarkContainer: { 
      flex: 1/3 , 
      justifyContent :'center' ,
      height :height/11 , 
      alignItems:'flex-end',
      marginRight: width/20
  }, 
  cartContainer: { 
    flex: 1/3 , 
    justifyContent :'center' ,
    height :height/11 , 
    alignItems:'flex-end',
    marginRight : -width/10
}, 
  badge:{
    color:'yellow'
  }
});
  
  
  export default BookHeader;