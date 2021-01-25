import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'


const {width , height} = Dimensions.get('window');
//392.72, 759.27
const list = [
    ['The Vanishing Half',require('../../Assets/cover1.jpg'),1,"Brit Bennett","4.5","312","$4.99"] , 
    ['The Office of Historical Corrections' , require('../../Assets/cover5.png'),2,"Danielle Evans","3.8","80","$6.99"],
    ['A Burning' , require('../../Assets/cover2.jpg'),3,"Megha Majumdar","3.2","110","$5.00"],
    ['Sharks in the Time of Saviors' , require('../../Assets/cover3.jpg'),4,"Kawai Strong Washburn","4.7","200","$9.99"],
    ['Caste: The Origins of Our Discontents',require('../../Assets/cover.jpg'),5,"Isabel Wilkerson","3","250","$8.5"],
]

function hadndleOptions(title,src,id,author,price,pages,rating,navigation){
  console.log("NoW NAVIGATING")
    navigation.navigate('Book',{id,title,src,author,price,pages,rating})
    return;
}

function Trending({ navigation }) {
    const Item = ({title , src , id, price, pages, rating, author}) => (
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.touchContainer}
             onPress={() => hadndleOptions(title,src,id,author,price,pages,rating,navigation)}>
            <View style={styles.card}>
                <Image style={styles.icon} source={src}></Image>
                <Text style={styles.text}>{title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} id={item[2]} author={item[3]} rating={item[4]} pages={item[5]} price={item[6]}/>
    );
    return (
      <View style={styles.listContainer}>
        <View style={{flex:1.2/5,alignItems:'center',flexDirection:'row', width:width}}>
          <Text style={styles.title}>Trending Books</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('BookList',{title:'Trending Books'})}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:3.8/5}}>
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
    flex:4/10 ,
    display:'flex' ,
    marginLeft:width*0.05 ,
    backgroundColor : Colors.primaryColor ,
  },
  icon :{
    width:width/3.57,
    height: height/4.75,
    borderRadius : 10,
  }, 
  card:{
    alignItems:'center' ,
    marginRight : width/28.5 ,
  }, 
  text:{
    fontSize:width/21.81,
    marginTop:height/150 , 
    textAlign:'center',
    width:width/3.57,
    color:Colors.secondTextColor,
    
  },
  seeAll :  {
    fontSize:width/19,
    color : Colors.secondTextColor
  },
  title : {
    fontWeight : "bold" ,
    fontSize:width/16,
    flex : 0.93 ,
    color:Colors.textColor
  }, 
  });
 export default Trending;