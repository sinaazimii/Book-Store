import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import  Colors  from '../Assets/Colors'
import Header from '../Components/BookList/Header'
const {width , height} = Dimensions.get('window');
const list = [
    ['The Vanishing Half',require('../Assets/cover1.jpg'),1,1,"4.5","312","$4.99"] , 
    ['The Office of Historical Corrections' , require('../Assets/cover5.png'),2,2,"3.8","80","$6.99"],
    ['A Burning' , require('../Assets/cover2.jpg'),3,1,"3.2","110","$5.00"],
    ['Sharks in the Time of Saviors' , require('../Assets/cover3.jpg'),4,1,"4.7","200","$9.99"],
]

const ShoppingCart = ({navigation}) => {

    const Item = ({title , src , count , price}) => (
        <View style={styles.card}>
            <View style={{flex:1/4}}>
                <Image style={styles.cover} source={src}></Image>
            </View>
            <View style={{flex:2.5/4,display:'flex'}}>
                <View style={{flex:3/4}}>
                    <Text style={styles.bookTitle}>{title}</Text>
                </View>
                <View style={{flex:1/4,alignItems:'center',flexDirection:'row'}}>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
            <View style={{flex:0.5/4,flexDirection:'row'}}>
                <View style={{flex:1/6,height:(height/9)+(width*2/25)}}></View>
                <View style={styles.countContainer}>
                    <Text style={styles.countText}>x{count}</Text>
                </View>
            </View>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} count={item[3]} price={item[6]}/>
    );
    return(
        <View style={styles.page}>
            <Header navigation={navigation} title={'My Cart'}/>  
            <View style={{flex:7/10}}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item[2]}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <View style={{flexDirection:'row',flex:0.8/10,justifyContent:'center'}}>
                <View style={{flexDirection:'row',flex:1/2,justifyContent:'center'}}>
                    <Text style={styles.title}>Subtotal:</Text>
                    <Text style={styles.caption}>$26.97</Text>
                </View>

                <View style={{flexDirection:'row',flex:1/2,justifyContent:'center'}}>
                    <Text style={styles.title}>Shipment:</Text>
                    <Text style={styles.caption}>$8</Text>
                </View>
            </View>

            <View style={styles.checkoutContainer}>
                <View style={{flexDirection:'row',flex:1/2,justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.checkoutFee}>$34.97</Text>
                </View>

                <View style={{flexDirection:'row',flex:1/2,justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
                        <Text style={styles.checkoutText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    page :{
        height : height , 
        width:width ,
        flex:1,
        backgroundColor : Colors.secondaryColor
    },
    card :{
        flexDirection: 'row',
        elevation:3, 
        width:width*95/100,
        marginLeft:width*5/200 ,
        marginTop:height/76,
        borderRadius:30,
        backgroundColor:Colors.primaryColor,
        borderColor:Colors.secondaryColor,
    },
    cover :{
        height:height/9,
        width:width/7 ,
        margin:width/25,
        borderRadius:width/65,
    },
    bookTitle :{
        fontSize :width/22,
        color : Colors.textColor , 
        marginTop : width/25,
        flex:2/4 ,
    },
    price : {
        fontSize: width/22,
        color:Colors.textColor,
        fontWeight:'bold' ,
        margin:width/100 , 
    },
    countContainer:{
        flex:3/6,
        height:(height/9)+(width*2/25),
        justifyContent:'center' , 
        marginRight:-5
    },
    countText : {
        color:Colors.textColor,
        fontSize:width/24, 
        textAlign:'center'
    },
    title : {
        color:Colors.secondTextColor,
        fontSize:width/22, 
        textAlign:'center'
    },
    caption : {
        color:Colors.textColor,
        fontSize:width/22, 
        textAlign:'center' , 
        marginLeft:width/30,
        fontWeight:'bold'
    },
    checkoutContainer:{
        flex:1.2/10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor:Colors.secondTextColor,
        flexDirection:'row'
    },
    checkoutFee : {
        color:Colors.primaryColor,
        fontSize:width/20, 
        textAlign:'center' , 
        fontWeight:'bold'
    },
    checkoutText : {
        color:Colors.secondTextColor,
        fontSize:width/25,  
    },
    button:{
        height:height/16,
        width:width/3 ,
        borderRadius:20,
        backgroundColor:Colors.primaryColor,
        elevation:3,
        flexDirection:'row' ,
        alignItems:'center' ,
        justifyContent:'center'
    }
});
export default ShoppingCart;