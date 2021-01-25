import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView , Modal , Alert, TouchableOpacity} from 'react-native';
import { Input , Icon} from 'react-native-elements';
import  Colors  from '../Assets/Colors'

import Header from '../Components/EditProfile/Header'


const {width , height} = Dimensions.get('window');
//392.72, 759.27

const ChangableInput =  ({placeholder,label,apply,formWidth}) => {
    const [text,setText] = useState('')
    return(
        <Input
        containerStyle={{width:formWidth,marginLeft:width*5/200}}
        placeholder={placeholder}
        label={label}
        labelStyle={{color:Colors.textColor}}
        style={styles.username}
        onChangeText={text => setText(text)}
        // value={text}
        inputStyle={{color:Colors.secondTextColor}}
        rightIcon={
            <TouchableOpacity onPress={() => apply(text)}>
                <Image style={{width:18,height:18}} source={require('../Assets/check.png')} ></Image>
            </TouchableOpacity>
        }
        />
    );
}

function ShoppingAddress({ navigation }) {
    const [country,setCountry] = useState("Iran")
    const [city,setCity] = useState("Shiraz")
    const [zipCode,setZipCode] = useState("7718921117")
    const [address,setAddress] = useState("MaaliAbad, 6th Alley, 45")
    return (
      <View style={styles.page}>
          <Header navigation={navigation}/>
          <View style={{flex:0.02}}></View>
          <View style={{flex:0.88,backgroundColor:Colors.primaryColor,width:width}}>
            <View style={styles.imageContainer}>
                <Icon
                    type="ionicon"
                    name='location'
                    size={66}
                    color={Colors.textColor}
                />
            </View>

            <View style={{flex:3/4}}>
                <View style={{flexDirection:'row'}}>
                    <ChangableInput
                    placeholder={country} 
                    label='Country'
                    apply={setCountry}
                    formWidth={45*width/100}
                    />
                    <ChangableInput
                        placeholder={city}
                        label="City"
                        apply={setCity}
                        formWidth={45*width/100}
                    />
                </View>

                <ChangableInput
                    placeholder={address}
                    label="Full Address"
                    apply={setAddress}
                    width={45*width/100}
                />
                <ChangableInput
                    placeholder={zipCode}
                    label="Zip Code"
                    apply={setZipCode}
                    width={45*width/100}
                />
            </View>

          </View>
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
    username:{
        fontSize:width/22 ,
        height:height/16,
    },
    cover :{
        width:width/3.6, 
        height:width/3.6,
        borderRadius:width/3.6/2,
    },
    imageContainer:{
        flex:1/4,
        alignItems:'center' , 
        marginTop : -(height/40)
    },
    changeText:{
        color:Colors.textColor,
        fontWeight:'bold' ,
        fontSize:width/22 ,
        marginTop:width/60
    }
  });
 export default ShoppingAddress;