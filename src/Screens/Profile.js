import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions  ,TouchableOpacity,StyleSheet} from 'react-native';

import  Colors  from '../Assets/Colors'
import Header from '../Components/Profile/Header'
import ProfileInfo from '../Components/Profile/PersonalInfo';
import Favorites from './../Components/Profile/Favorites'
import { Icon } from 'react-native-elements';


const {width , height} = Dimensions.get('window');
//392.72, 759.27
const ProfileItem = ({icon,title,navigation,route}) => {
  return(
    <TouchableOpacity onPress={()=>navigation.navigate(route,{title:title})} style={styles.itemContainer}>
      <View style={{flex:1/10,alignItems:'center',justifyContent:'center'}}> 
        <Icon
        type="ionicon"
        name={icon}
        color={Colors.textColor}
        size={width/17}
        />
      </View>
      <View style={{flex:8/10,alignItems:'flex-start',justifyContent:'center'}}>
        <Text style={styles.itemText}>{title}</Text>
      </View>
      
      <View style={{flex:1/10,alignItems:'center',justifyContent:'center'}}> 
        <Icon
        type="ionicon"
        name="chevron-forward-outline"
        color={Colors.textColor}
        />
      </View>

    </TouchableOpacity>
  );
}
function Profile({ navigation }) {

    return (
      <View style={styles.page}>
     
          <Header navigation={navigation}/>
          <ProfileInfo/>
       
          <View style={{flex:0.5,width:width,backgroundColor:Colors.primaryColor,borderTopLeftRadius:30,borderTopRightRadius:30,elevation:3}}>
            {/* <ScrollView showsVerticalScrollIndicator={false}>
              <Favorites navigation={navigation} title={'Favorite Books'}/>
              <Favorites navigation={navigation} title={'Purchased Books'}/>
            </ScrollView> */}
            <View style={{marginTop:height/40}}>
              <ProfileItem 
              title={'Edit Profile'} 
              icon={'person'} 
              navigation={navigation} 
              route={'EditProfile'}/>

              <ProfileItem 
              title={'Shopping Address'} 
              icon={'location'}         
              navigation={navigation} 
              route={'ShoppingAddress'}/>

              <ProfileItem 
              title={'Whishlist'} 
              icon={'heart'}         
              navigation={navigation} 
              route={'BookList'} />

              <ProfileItem 
              title={'Order History'}
              icon={'receipt'}       
              navigation={navigation} 
              route={'OrderHistory'}/>

              <ProfileItem 
              title={'Credit Card'}
              icon={'card'}       
              navigation={navigation} 
              route={'CreditCard'}/>

            </View>

          </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  page:{
    flex:1 , 
    alignItems: 'center' ,
    backgroundColor: Colors.secondaryColor ,
  } , 
  itemContainer:{
    height:height/13,
    width:0.95*width,
    marginTop:10,flexDirection:'row',
    marginLeft: 0.05*width/2
  },
  itemText:{
    color:Colors.textColor , 
    marginLeft:width/20,
    fontSize:width/25
  }
  });
 export default Profile;