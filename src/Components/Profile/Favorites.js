import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'


const {width , height} = Dimensions.get('window');
//392.72, 759.27
const list = [
    ['Motiation & inspiration',require('../../Assets/cover.jpg'),1] , 
    ['History',require('../../Assets/poster.png'),2],
    ['Science' , require('../../Assets/cover.jpg'),3],
    ['Education' , require('../../Assets/poster.png'),4],
]

function hadndleOptions(id,navigation){
    navigation.navigate('Book')
    return;
}

function Favorites({ navigation , title }) {
    const Item = ({title , src , id}) => (
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.touchContainer}
             onPress={() => hadndleOptions(id,navigation)}>
            <View style={styles.card}>
                <Image style={styles.icon} source={src}></Image>
                <Text style={styles.text}>{title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} id={item[2]}/>
    );
    return (
      <View style={styles.listContainer}>
        <View style={{flex:1/5,alignItems:'center',flexDirection:'row', width:width}}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('BookList',{title:title})}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:4/5}}>
          <FlatList
              data={list}
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
  listContainer: {
    display:'flex' ,
    height:height/2.6,
    marginLeft:width*0.05 ,
    backgroundColor : Colors.primaryColor
  },
  icon :{
    width:width/3.57,
    height: height/4.75,
    borderRadius : 10
  }, 
  card:{
    alignItems:'center' ,
    marginRight : width/28.5 ,
  }, 
  text:{
    fontSize:width/23,
    marginTop:height/150 , 
    textAlign:'center',
    width:width/3.57,
    color:Colors.secondTextColor
  },
  seeAll :  {
    fontSize:width/19,
    color : Colors.secondTextColor
  },
  title : {
    fontWeight : "bold" ,
    fontSize:width/18,
    flex : 0.93 ,
    color:Colors.textColor
  }, 
  });
 export default Favorites;