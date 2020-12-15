import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import StarRating from 'react-native-star-rating';
import  Colors  from '../Assets/Colors'
import Header from '../Components/BookList/Header'
const {width , height} = Dimensions.get('window');
const list = [
    ['Motiation & inspiration sadasd sad as sad ads',require('../Assets/cover.jpg'),'1',4] , 
    ['History',require('../Assets/poster.png'),'2',3],
    ['Science' , require('../Assets/cover.jpg'),'3',3.5],
    ['Education' , require('../Assets/poster.png'),'4',2],
    ['Motiation & inspiration',require('../Assets/cover.jpg'),'5',4] , 
    ['History',require('../Assets/poster.png'),'6',3],
    ['Science' , require('../Assets/cover.jpg'),'7',4.5],
    ['Education' , require('../Assets/poster.png'),'8',1.5],
]
// function onStarRatingPress(rating,setStar) {
//       setStar(rating)
// }
const BookList = ({navigation,route}) => {
    // const [star,setStar] = useState(0)
    const Item = ({title , src , id , rate}) => (
        <View style={styles.card}>
            <View style={{flex:1/3}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Book',{cover:src})}>
                    <Image style={styles.cover} source={src}></Image>
                </TouchableOpacity>
            </View>
            <View style={{flex:2/3}}>
                <Text style={styles.bookTitle}>{title}</Text>
                <Text style={styles.bookAuthor}>Author</Text>
                <View style={{width:width/3.2,flex:1/4}}>
                    <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={rate}
                    starSize={20}
                    starStyle={{color:Colors.textColor}}
                    halfStarEnabled={true}
                    // selectedStar={(rating) => onStarRatingPress(rating,setStar)}
                    />
                </View>
            </View>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} id={item[2]} rate={item[3]}/>
    );
    return(
        <View style={styles.page}>
            <Header navigation={navigation} title={route.params.title}/>
            <FlatList
                style={{flex:9/10,marginBottom:height/30}}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item[2]}
                showsVerticalScrollIndicator={false}
          />
        </View>
    );
}


const styles = StyleSheet.create({
    page :{
        height : height , 
        width:width ,
        backgroundColor : Colors.primaryColor
    },
    card :{
        flexDirection: 'row',
        elevation:3,
        width:width,
        marginTop:height/76,
        borderRadius:width/39.2,
        borderWidth:2,
        borderColor:Colors.secondaryColor,
    },
    cover :{
        height:height/6.5,
        width:width/4.2 ,
        marginLeft:width/19.6,
        margin:width/49,
        borderRadius:width/65,
    },
    bookTitle :{
        fontSize :width/21,
        color : Colors.textColor , 
        marginTop : height/76,
        flex:2/4 ,
        width :width/1.65,

    },
    bookAuthor :{
        fontSize:width/21.7 ,
        color : Colors.secondTextColor ,
        marginTop : height/150 ,
        flex:1/4 ,        
    }
})

//392.72, 759.27

export default BookList