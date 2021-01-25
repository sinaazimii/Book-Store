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

function CreditCard({ navigation }) {
    const [cardNumber,setCardNumber] = useState("5894631879336755")
    const [CVV2,setCVV2] = useState("2452")
    const [expire,setExpire] = useState("11-02")
    const [address,setAddress] = useState("MaaliAbad, 6th Alley, 45")
    return (
      <View style={styles.page}>
          <Header navigation={navigation}/>
          <View style={{flex:0.02}}></View>
          <View style={{flex:0.88,backgroundColor:Colors.primaryColor,width:width}}>
          <View style={styles.imageContainer}>
                <Icon
                    type="ionicon"
                    name='card'
                    size={66}
                    color={Colors.textColor}
                />
            </View>

            <View style={{flex:3/4}}>
                <ChangableInput
                placeholder={cardNumber} 
                label='Card Number'
                apply={setCardNumber}
                formWidth={90*width/100}
                />
                <ChangableInput
                    placeholder={CVV2}
                    label="CVV2"
                    apply={setCVV2}
                    formWidth={50*width/100}
                    
                />
                <ChangableInput
                    placeholder={expire}
                    label="Expiry Date"
                    apply={setExpire}
                    formWidth={50*width/100}
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
 export default CreditCard;