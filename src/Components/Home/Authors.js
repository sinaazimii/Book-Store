import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors';


const {width , height} = Dimensions.get('window');
//392.72, 759.27
const list = [
    ['John Doe',require('../../Assets/images.jpg')] , 
    ['John Doe Brother',require('../../Assets/images1.jpg')],
    ['John Doe Sister',require('../../Assets/images2.jpg')],
    ['Andrew',require('../../Assets/images3.jpg')],
    ['Micheal',require('../../Assets/images4.jpg')],
    ['Joe',require('../../Assets/images.jpg')] , 
]

function hadndleOptions(title,navigation){
  navigation.navigate('BookList',{title:title})
    return;
}

function Authors({ navigation }) {
    const Item = ({title , src}) => (
        <View style={{flexDirection: 'column'}}>
            <TouchableOpacity  style={styles.touchContainer}
             onPress={() => hadndleOptions(title,navigation)}>
            <View style={styles.card}>
                <Image style={styles.icon} source={src}></Image>
            </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} />
    );
    return (
      <View style={styles.listContainer}>
        <View style={{flex:2/5,alignItems:'center',flexDirection:'row', width:width}}>
            <Text style={styles.title}>Top Authors</Text>
        </View>
        <View style={{flex:3/5}}>
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
    flex:1.9/10 ,
    marginLeft:width*0.05 ,
    backgroundColor:Colors.primaryColor
  },
  icon :{
    width:width/5.6,
    height: width/5.6,
    borderRadius : width/5.6/2 ,
    borderWidth :2 , 
    borderColor : Colors.secondTextColor
  }, 
  card:{
    alignItems:'center' ,
    marginRight : width/28.5 ,
  }, 
  title : {
    fontWeight : "bold" ,
    fontSize:width/16,
    color:Colors.textColor
  }, 
  });
 export default Authors;