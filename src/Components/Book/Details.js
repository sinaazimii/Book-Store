import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Details({add}) {
    return (
      <View style={styles.DetailsContainer} >
            <View style={styles.poster}>
                <Image style={styles.cover} source={require('../../Assets/cover.jpg')} ></Image>
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
                <View style={styles.eachSpec}>
                    <Text style={styles.specQ}>Price</Text>
                    <Text style={styles.value}>$4.99</Text>
                </View>
            </View>
        
            <TouchableOpacity style={styles.addToCartContainer}>
                <View style={styles.addToCart}>
                    <Text style={styles.addText}>Add to cart</Text>
                </View>
            </TouchableOpacity>

      </View>
  
    );
}

const styles = StyleSheet.create({
    DetailsContainer :{
        flex : 5.8/10 ,
        flexDirection : 'column' ,
        display : 'flex' , 
        backgroundColor:Colors.secondaryColor,
        alignItems:'center',
        width:width , 
        borderBottomRightRadius:20 ,
        borderBottomLeftRadius:20 ,
        elevation:3
    },
    poster : {
        flex : 5.5/10 ,
        width:width , 
        alignItems:'center' , 
    },
    cover :{
        width:width/2.8, 
        height:width/2.8*1.55,
        borderRadius:14,
        marginTop:height/150,
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
        flex:1/4 , 
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
        backgroundColor:Colors.textColor ,
        marginTop:(0.06*height) -(height/30),
        borderRadius : 10 , 
        alignItems:'center' ,
        justifyContent:'center' ,
        elevation:3
    },
    addText:{
        color:Colors.primaryColor,
        fontSize:width/20
    },
});
  
  
  export default Details; 