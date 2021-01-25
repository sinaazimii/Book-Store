import React, {useState , useEffect} from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet } from 'react-native';
import { DrawerActions  } from '@react-navigation/native';
import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './../Components/Home/HomeHeader'
import Categories from './../Components/Home/Categories'
import Trending from './../Components/Home/Trending'
import Authors from './../Components/Home/Authors'
import SearchBar from './../Components/Home/Searchbar'
import  Colors  from './../Assets/Colors';


const localIpAddress = "192.168.1.107"
const {width , height} = Dimensions.get('window');
//392.72, 759.27
function openDrawer (navigation){
  navigation.openDrawer()
}
const getBooks = () => {
  var data = 'apple'
  console.log("INSIDE")

}

function Home({ navigation }) {
    const [search,setSearch] = useState('')
    const [books,setBooks] = useState([])

    // useEffect(() => {
    //   axios.get('http://192.168.1.107:5000/book/')
    //   .then(response => {
    //    console.log(response.data)
    //    setBooks(response.data)
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
      
    // }, [setBooks])
    // console.log('OUTSIDE,',books)
    return (
      <View style={styles.page}>
      <Header navigation={navigation}/>
      <SearchBar />
      <Categories navigation={navigation}/>
      <Trending navigation={navigation}/>
      <Authors navigation={navigation}/>
      </View>
    );
    function updateSearch(search){
      setSearch(search)
  }
  }

const styles = StyleSheet.create({
  page:{
    flex: 1, 
    flexDirection:'column' , 
    alignItems: 'center' ,
    backgroundColor: Colors.primaryColor ,
  } , 
  });
 export default Home