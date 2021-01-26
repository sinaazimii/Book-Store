import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , ImageBackground , TouchableOpacity} from 'react-native';
import  Colors  from '../Assets/Colors'
import ChangableInput from '../Components/Login/InputBox'

const {width , height} = Dimensions.get('window');
//392.72, 759.27

function Terms({ navigation }) {
    return (
      <View style={styles.page}>
      </View>
    );
  }

const styles = StyleSheet.create({
    page:{
        flex:1 , 
        alignItems: 'center' ,
        backgroundColor: Colors.primaryColor ,
        width:width,
    } , 
  });
 export default Terms;