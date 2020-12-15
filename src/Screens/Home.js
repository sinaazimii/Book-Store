import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet } from 'react-native';
import { DrawerActions  } from '@react-navigation/native';
import Header from './../Components/Home/HomeHeader'
import Categories from './../Components/Home/Categories'
import Trending from './../Components/Home/Trending'
import Authors from './../Components/Home/Authors'
import SearchBar from './../Components/Home/Searchbar'
import  Colors  from './../Assets/Colors';

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function openDrawer (navigation){
  navigation.openDrawer()
}
function Home({ navigation }) {
    const [search,setSearch] = React.useState('')
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