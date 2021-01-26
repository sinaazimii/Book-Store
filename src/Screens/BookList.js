import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { colors } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import  Colors  from '../Assets/Colors'
import Header from '../Components/BookList/Header' 
import SearchBar from '../Components/BookList/SearchBar'

const {width , height} = Dimensions.get('window');
const list = [
    ['The Vanishing Half',require('../Assets/cover1.jpg'),1,"Brit Bennett","4.5","312","$4.99"] , 
    ['The Office of Historical Corrections' , require('../Assets/cover5.png'),2,"Danielle Evans","3.8","80","$6.99"],
    ['A Burning' , require('../Assets/cover2.jpg'),3,"Megha Majumdar","3.2","110","$5.00"],
    ['Sharks in the Time of Saviors' , require('../Assets/cover3.jpg'),4,"Kawai Strong Washburn","4.7","200","$9.99"],
    ['Caste: The Origins of Our Discontents',require('../Assets/cover.jpg'),5,"Isabel Wilkerson","3","250","$8.5"],
    ['The Vanishing Half',require('../Assets/cover1.jpg'),6,"Brit Bennett","4.5","312","$4.99"] , 
    ['The Office of Historical Corrections' , require('../Assets/cover5.png'),7,"Danielle Evans","3.8","80","$6.99"],
    ['A Burning' , require('../Assets/cover2.jpg'),8,"Megha Majumdar","3.2","110","$5.00"],
]
// function onStarRatingPress(rating,setStar) {
//       setStar(rating)
// }
const BookList = ({navigation,route}) => {
    // const [star,setStar] = useState(0)
    const Item = ({title , src , id, price ,author ,rating , pages}) => (
        <TouchableOpacity style={styles.card2} onPress={()=>navigation.navigate('Book',{id,title,src,author,price,pages,rating})}>
            <View style={{flex:1/3}}>
                <Image style={styles.cover2} source={src}></Image>
            </View>
            <View style={{flex:2/3}}>
                <Text style={styles.bookTitle2}>{title}</Text>
                <Text style={styles.bookAuthor2}>{author}</Text>
                <View style={{flexDirection:'row',width:width/3.2,flex:1/4}}>
                    <StarRating
                    disabled={true}
                    maxStars={5}
                    fullStarColor={Colors.textColor}
                    emptyStarColor={Colors.textColor}
                    rating={rating}
                    starSize={20}
                    halfStarEnabled={true}
                    // selectedStar={(rating) => onStarRatingPress(rating,setStar)}
                    />
                    <Text style={styles.price2}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item title={item[0]} src={item[1]} id={item[2]} author={item[3]} rating={item[4]} pages={item[5]} price={item[6]}/>
    );
    return(
        <View style={styles.page}>
            <Header title={route.params.title} navigation={navigation}/>
            <SearchBar/>
            <FlatList
                style={{flex:7.6/10,marginBottom:height/35}}
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item[2]}
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
        flexDirection: 'row',
        elevation:3,
        width:width*95/100,
        marginTop:height/50,
        borderRadius:width/20,
        backgroundColor:Colors.primaryColor
    },
    cover2 :{
        height:height/6.5,
        width:width/4.4 ,
        marginLeft:width/19.6,
        margin:width/20,
        borderRadius:width/65,
    },
    bookTitle2 :{
        fontSize :width/22,
        color : Colors.textColor , 
        marginTop : height/76,
        flex:2/4 ,
        marginTop:width/20,
        width :width/1.65,

    },
    bookAuthor2 :{
        fontSize:width/22.5 ,
        color : Colors.secondTextColor ,
        marginTop : height/150 ,
        flex:1/4 ,        
    },
    price2 : {
        fontSize: width/25, 
        color:Colors.secondTextColor,
        marginLeft:width/5
    },
})

//392.72, 759.27

export default BookList