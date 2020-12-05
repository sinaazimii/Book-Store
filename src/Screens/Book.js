import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet } from 'react-native';

import  Colors  from '../Assets/Colors';
import Header from '../Components/BookHeader'
import Details from './../Components/Details'
import About from './../Components/AboutBook'

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Book({ navigation }) {
    const [search,setSearch] = React.useState('')
    return (
      <View style={styles.page}>
      <Header/>
      <Details/>    
      <About/>  
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
    backgroundColor: 'red' ,
  } , 
  });
 export default Book;