import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , TouchableOpacity ,StyleSheet , Animated} from 'react-native';

import  Colors  from '../Assets/Colors';
import Header from '../Components/Book/Header'
import Details from '../Components/Book/Details'
import About from '../Components/Book/AboutBook'

const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Book({ navigation , route}) {
    console.log("ROUTE :",route.params)
    const [search,setSearch] = React.useState('')
    return (
      <View style={styles.page}>
      <Header navigation={navigation}/>
      <Details book={route.params}/>    
      <About/>  
      </View>
    );
    function updateSearch(search){
      setSearch(search)
  }
  }

const styles = StyleSheet.create({
  page:{
    flex:1 , 
    flexDirection:'column' , 
    alignItems: 'center' ,
    backgroundColor: Colors.primaryColor ,
  } , 
  });
 export default Book;