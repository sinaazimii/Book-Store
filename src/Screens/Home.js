import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet } from 'react-native';

import Header from './../Components/Header'
import Categories from './../Components/Categories'
import Trending from './../Components/Trending'
import Authors from './../Components/Authors'
import SearchBar from './../Components/Searchbar'
import  Colors  from './../Assets/Colors';

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Home({ navigation }) {
    const [search,setSearch] = React.useState('')
    return (
      <View style={styles.page}>
      <Header/>
      <SearchBar />
      <Categories/>
      <Trending navigation={navigation}/>
      <Authors/>
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