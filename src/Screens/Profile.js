import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , FlatList ,StyleSheet , ScrollView} from 'react-native';

import  Colors  from '../Assets/Colors'
import Header from '../Components/Profile/Header'
import ProfileInfo from '../Components/Profile/PersonalInfo';
import Favorites from './../Components/Profile/Favorites'


const {width , height} = Dimensions.get('window');
//392.72, 759.27
function Profile({ navigation }) {
    const [search,setSearch] = React.useState('')
    return (
      <View style={styles.page}>
     
          <Header navigation={navigation}/>
          <ProfileInfo/>
       
          <View style={{flex:0.5,width:width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Favorites navigation={navigation} title={'Favorite Books'}/>
              <Favorites navigation={navigation} title={'Purchased Books'}/>
            </ScrollView>
          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  page:{
    flex:1 , 
    alignItems: 'center' ,
    backgroundColor: Colors.primaryColor ,
  } , 
  });
 export default Profile;