import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'


const {width , height} = Dimensions.get('window');

const list = [
    ['Motivation & inspiration',require('../../Assets/motivation.png')] , 
    ['History',require('../../Assets/history.png')],
    ['Health & Nutrition' , require('../../Assets/heart.png') ], 
    ['Science' , require('../../Assets/test.png')],
    ['Education' , require('../../Assets/graduation-cap.png')],
]
const list1 = [
    ['Psychology',require('../../Assets/brain.png')],
    ['Money & investment',require('../../Assets/save-money.png')] ,
    ['Family & Relationships',require('../../Assets/home.png')],
    ['Romance',require('../../Assets/hearts.png')],
    ['Travel',require('../../Assets/plane.png')],
]

function hadndleOptions(navigation,title){
    navigation.navigate('BookList',{title:title})
    return;
}
function Categories({ navigation }) {
    const Item = ({title , src}) => (
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.touchContainer}
             onPress={() => hadndleOptions(navigation,title)}>
            <View style={styles.card}>
                <Image style={styles.icon} source={src}></Image>
                <Text style={styles.text}>{title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} />
    );
    return (
      <View style={styles.categoriesContainer}>
        <View style={{flex:1.5/5,alignItems:'center',flexDirection:'row', width:width}}>
            <Text style={styles.title}>Categories</Text>
        </View>
        <View style={{flex:3.5/5}}>
        <FlatList
            style={{marginTop:height/100,marginRight:width/40}}
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item[0]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        <FlatList
            style={{marginTop:height/100,marginRight:width/40}}
            data={list1}
            renderItem={renderItem}
            keyExtractor={item => item[0]}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
 
        </View>

      </View>
    );
  }

const styles = StyleSheet.create({
  categoriesContainer: {
    flex:2.2/10 ,
    display:'flex' ,
    marginLeft:width*0.05 ,
    backgroundColor : Colors.primaryColor ,
  },
  icon :{
      width:width/17,
      height:width/17,
      marginLeft:width/100
  }, 
  card:{
      flexDirection:'row' ,
      backgroundColor:Colors.secondaryColor,
      borderRadius : 12 ,
      marginRight : width/78.5,
      justifyContent:'center',
      alignItems:'center' ,
      elevation:3
  }, 
  text:{
      margin:height/100,
      fontSize:height/55 ,
      color:Colors.textColor
  },
  title : {
    fontWeight : "bold" ,
    fontSize:width/19,
    color:Colors.textColor
  }, 
  });
 export default Categories;