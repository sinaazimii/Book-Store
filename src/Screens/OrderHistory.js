import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { colors } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { Icon } from 'react-native-elements';
import  Colors  from '../Assets/Colors'
import Header from '../Components/BookList/Header' 
import SearchBar from '../Components/BookList/SearchBar'

const {width , height} = Dimensions.get('window');
const list = [
    ['BKS-125651',
        [{url:require('../Assets/cover.jpg')},{url:require('../Assets/cover3.jpg')},{url:require('../Assets/cover5.png')}]
            ,1,"$24.99"] , 
    ['BKS-8776551',
        [{url:require('../Assets/cover1.jpg')},{url:require('../Assets/cover3.jpg')},{url:require('../Assets/cover2.jpg')}]
        ,1,"$24.99"] , 
    ['BKS-112298',
        [{url:require('../Assets/cover.jpg')},{url:require('../Assets/cover1.jpg')},{url:require('../Assets/cover2.jpg')}]
        ,1,"$24.99"] , 
    ['BKS-986348',
        [{url:require('../Assets/cover1.jpg')},{url:require('../Assets/cover3.jpg')},{url:require('../Assets/cover5.png')}]
        ,1,"$24.99"] , 
    ['BKS-654789',
        [{url:require('../Assets/cover.jpg')},{url:require('../Assets/cover3.jpg')},{url:require('../Assets/cover5.png')}]
        ,1,"$24.99"] , 
]

const BookList = ({navigation,route}) => {
    const bookItem = ({src}) =>{
        <Image style={styles.cover2} source={src}></Image>
    }
    const Item = ({title , src , price }) => (
        <View style={styles.card2}>
            <View style={{flex:2/5,flexDirection:'row'}}>
                <View style={{flex:1/2}}> 
                    <Text style={styles.bookTitle2}>{title}</Text>
                </View>
                <View style={{flex:1/2,alignItems:'flex-end'}}>
                    <Text style={styles.price2}>{price}</Text>
                </View>
            </View>
            <View style={{flex:0.5/5,flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.date}>12-2-2020</Text>
            </View>
            <View style={{flex:2.5/5,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:4/5,flexDirection:'row',alignItems:'center',marginLeft:0.02*width,marginBottom:width/50}}>
                <FlatList
                    data={src}
                    renderItem={bookRenderItem}
                    // keyExtractor={item => item[0]}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                />
                </View>
                <View style={{flex:1/5,alignItems:'center',justifyContent:'center'}}>
                    <Icon
                        name='chevron-forward-outline'
                        type='ionicon'
                        color= {Colors.textColor}
                        size={width/14}
                        onPress={()=>navigation.navigate('PrevCart')}
                    />
                </View>
            </View>

        </View>
    );
    const bookRenderItem = ({ item }) => (
        <Image style={styles.cover2} source={item.url}></Image>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]}  id={item[2]} price={item[3]}/>
    );
    return(
        <View style={styles.page}>
            <Header title={route.params.title} navigation={navigation}/>
            <FlatList
                style={{flex:7.6/10,marginBottom:height/35}}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item[4]}
                showsVerticalScrollIndicator={false}
                numColumns={1}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    page :{
        height : height , 
        width:width ,
        alignItems:'center',
        backgroundColor : Colors.secondaryColor,
        flex:1
    },
    header : { 
        flex : 1/10 ,
        alignItems: 'flex-start' , 
        flexDirection : 'row' ,
        display : 'flex' , 
        backgroundColor:Colors.secondaryColor,
        alignItems:'center' , 
        width:width,
        justifyContent :'flex-start',
        elevation:3,
    } , 
    backContainer: { 
        flex: 1/2 , 
        alignItems : 'center', 
        justifyContent :'center' ,
        height :height/11 , 
        alignItems:'flex-start',
        marginLeft : width/20 ,
    }, 
    bookmarkContainer: { 
        flex: 1/2 , 
        alignItems : 'center', 
        justifyContent :'center' ,
        height :height/11 , 
        alignItems:'flex-end',
        marginRight : width/20 ,
    }, 
    title : {
      fontSize : width/20 , 
      color : Colors.textColor , 
    },
    card2 :{
        elevation:3,
        width:width*95/100,
        marginTop:height/50,
        borderRadius:width/20,
        backgroundColor:Colors.primaryColor ,
        height:height/5.7
    },
    cover2 :{
        height:height/14,
        width:width/12 ,
        borderRadius:width/65,
        marginLeft:width/50,
    },
    bookTitle2 :{
        fontSize :width/22,
        color : Colors.textColor , 
        marginTop : height/76,
        flex:2/4 ,
        marginLeft:width/20,
        width :width/1.65,

    },
    price2 : {
        fontSize: width/25, 
        color:Colors.secondTextColor,
        marginTop : height/76,
        marginRight:width/20
    },
    date:{
        color:Colors.textColor ,
        fontSize:width/28 ,
        marginLeft:width/20,
        marginTop:-(width/30)
    }
})

//392.72, 759.27

export default BookList