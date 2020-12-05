import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from './../Assets/Colors'
import { color } from 'react-native-reanimated';

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Details() {
    return (
      <View style={styles.DetailsContainer} >
            <View style={styles.poster}>
                <Image style={styles.cover} source={require('./../Assets/cover.jpg')} ></Image>
            </View>
            <View style={styles.name}>
                <Text style={styles.title}>Beach Town: Apocalypse</Text>
                <Text style={styles.author}>by Thomas Maxwell Harrison</Text>
            </View>
            <View style={styles.specs}>
                <View style={styles.eachSpec}>
                    <Text style={styles.specQ}>Rating</Text>
                    <Text style={styles.value}>4.7</Text>
                </View>
                <View style={styles.eachSpec}>
                    <Text style={styles.specQ}>Pages</Text>
                    <Text style={styles.value}>256</Text>
                </View>
                <View style={styles.eachSpec}>
                    <Text style={styles.specQ}>Language</Text>
                    <Text style={styles.value}>English</Text>
                </View>
            </View>
            <View style={styles.addToCartContainer}>
                <View style={styles.addToCart}>
                    <Text style={styles.addText}>Add to card</Text>
                </View>
            </View>
      </View>
  
    );
}

const styles = StyleSheet.create({
    DetailsContainer :{
        flex : 6/10 ,
        flexDirection : 'column' ,
        display : 'flex' , 
        backgroundColor:Colors.primaryColor,
        alignItems:'center',
        width:width , 
        borderWidth:5
    },
    poster : {
        flex : 5.5/10 ,
        width:width , 
        alignItems:'center' , 
        justifyContent:'center',
    },
    cover :{
        width:width/2.8, 
        height:width/2.8*1.55,
        borderRadius:14,
    },
    name:{
        flex:2/10 , 
        width:width ,
        alignItems:'center' , 
        justifyContent:'center',
    }, 
    title:{
        color:Colors.textColor,
        fontWeight:'bold' ,
        fontSize:width/18.7
    },
    author:{
        color:Colors.textColor ,
        fontSize:width/28 , 
        marginTop:height/150
    }, 
    specs:{
        flex:1.5/10 ,
        width:width , 
        display:'flex' , 
        flexDirection:'row' ,
    },
    eachSpec:{
        flex:1/3 , 
        alignItems:'center' , 
        justifyContent:'center',
    }, 
    value:{
        color:Colors.textColor ,
        fontSize:width/28 , 
        marginTop:height/100  ,
        fontWeight:'bold'
    },
    specQ:{
        color:Colors.textColor ,
        fontSize:width/28 , 
    },
    addToCartContainer : {
        width:width , 
        flex: 1/10 ,
        display:'flex',
        flexDirection :'row' ,
        justifyContent:'center'
    },
    addToCart:{
        width:width/2.5,
        height:height/15,
        backgroundColor:Colors.secondaryColor ,
        marginTop:(0.06*height) -(height/30),
        borderRadius : 10 , 
        alignItems:'center' ,
        justifyContent:'center' ,
    },
    addText:{
        color:Colors.textColor,
        fontSize:width/20
    },
});
  
  
  export default Details; 