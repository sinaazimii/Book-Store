import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import Colors from '../../Assets/Colors'

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function ProfileInfo() {
    return (
      <View style={styles.DetailsContainer} >
            <View style={styles.poster}>
                <Image style={styles.cover} source={require('../../Assets/profile.jpg')} ></Image>
            </View>
            <View style={styles.name}>
                <Text style={styles.title}>Adrew Johnson</Text>
            </View>
            <View style={styles.specs}>
                    <View style={styles.eachSpec}>
                        <Text style={styles.specQ}>Email Address</Text>
                        <Text style={styles.value}>johnsonandrew@gmail.com</Text>
                    </View>
                    <View style={styles.eachSpec}>
                        <Text style={styles.specQ}>Phone number</Text>
                        <Text style={styles.value}>09381235461</Text>
                    </View>
            </View>
      </View>
  
    );
}

const styles = StyleSheet.create({
    DetailsContainer :{
        flex : 4/10 ,
        flexDirection : 'column' ,
        display : 'flex' , 
        backgroundColor:Colors.secondaryColor,
        alignItems:'center',
        width:width , 
        borderBottomRightRadius:15 ,
        borderBottomLeftRadius:15 ,
        elevation:3
    },
    poster : {
        flex : 4/10 ,
        width:width , 
        alignItems:'center' , 
        justifyContent:'center' ,
    },
    cover :{
        marginTop : -height/50,
        width:width/3.6, 
        height:width/3.6,
        borderRadius:width/3.6/2,
    },
    name:{
        flex:1/10 ,
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
        flex:4.5/10 ,
        width:width , 
        display:'flex' , 
    },
    eachSpec:{
        flex:1/2 , 
        alignItems:'flex-start' ,
        marginLeft : width/20 , 
        justifyContent:'center',
    }, 
    value:{
        color:Colors.textColor ,
        fontSize:width/26 , 
        marginTop:height/150  ,
        fontWeight:'bold'
    },
    specQ:{
        color:Colors.textColor ,
        fontSize:width/26, 
        marginTop : height/100,
    },
    button :{
        alignItems:'center' ,
        justifyContent :'center',
        width:width/3.5,
        height:height/22,
        backgroundColor:Colors.textColor,
        elevation:3,
        borderRadius:10
    },
    buttonText :{
        fontSize : width/26 ,
        color:Colors.primaryColor ,

    }
});
  
  
  export default ProfileInfo; 