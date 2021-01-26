import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , ScrollView , Modal , Alert, TouchableOpacity} from 'react-native';
import { Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import  Colors  from '../Assets/Colors'

import Header from '../Components/EditProfile/Header'

const defaultPickerOptions = {
    cropping: true,
    cropperActiveWidgetColor : Colors.primaryColor ,
    cropperStatusBarColor : Colors.secondColor , 
    freeStyleCropEnabled : true ,
};

const {width , height} = Dimensions.get('window');
//392.72, 759.27

const ChangableInput =  ({placeholder,label,apply,secure}) => {
    const [text,setText] = useState('')
    return(
        <Input
        containerStyle={{width:width*95/100,marginLeft:width*5/200}}
        placeholder={placeholder}
        label={label}
        secureTextEntry={secure}
        labelStyle={{color:Colors.textColor}} 
        style={styles.username}
        onChangeText={text => setText(text)}
        // value={text}
        inputStyle={{color:Colors.secondTextColor}}
        // rightIcon={
        //     <TouchableOpacity onPress={() => apply(text)}>
        //         <Image style={{width:18,height:18}} source={require('../Assets/check.png')} ></Image>
        //     </TouchableOpacity>
        // }
        />
    );
}
function changeProfilePicture(camera,picker){
    Alert.alert(
        "Change profile picture",
        "",
        [
          {
            text: "Choose from gallery",
            onPress: () => picker(),
          },
          { text: "Choose from camera",
           onPress: () => camera()
         }
        ],
        { cancelable: true }
      );
}
function EditProfile({ navigation }) {
    const [name,setName] = useState("Andrew Johnson")
    const [email,setEmail] = useState("johnsonandrew@gmail.com")
    const [password,setPassword] = useState('********')
    const [username,setUsername] = useState("andrew_johnson")
    const [phoneNumber,setPhoneNumber] = useState("09381235621")
    const [imgSrc, setImgSrc] = useState(null);
    const [modalVisible,setModalVisible] = useState(true)
    async function chooseFromPicker (options = defaultPickerOptions)  {
        try {
          const image = await ImagePicker.openPicker(options);
          setImgSrc({uri: image.path});
        } catch (err) {
          if (err.message !== 'User cancelled image selection') {
            console.error(err);
          }
        }
      };
    
      async function chooseFromCamera (options = defaultPickerOptions) {
        try {
          const image = await ImagePicker.openCamera(options);
          setImgSrc({uri: image.path});
        } catch (err) {
          if (err.message !== 'User cancelled image selection') {
            console.error(err);
          }
        }
      };
    
    return (
      <View style={styles.page}>
          <Header navigation={navigation}/>
          <View style={{flex:0.02}}></View>
          <View style={{flex:0.88,backgroundColor:Colors.primaryColor,width:width}}>
            <View style={styles.imageContainer}>
                <Image style={styles.cover} source={require('../Assets/profile.jpg')} ></Image>
                <TouchableOpacity
                 onPress={()=>changeProfilePicture(chooseFromCamera,chooseFromPicker)
                 }> 
                <Text style={styles.changeText}>Change Profile Photo</Text>
                </TouchableOpacity>
                
            </View>

            <View style={{flex:3/4}}>
                <ChangableInput
                 placeholder={name} 
                 label='Name'
                 apply={setName}
                />
                <ChangableInput
                    placeholder={username}
                    label="Username"
                    apply={setUsername}
                />
                <ChangableInput
                    placeholder={email}
                    label="Email Address"
                    apply={setEmail}
                />
                <ChangableInput
                    placeholder={phoneNumber}
                    label="Phone Number"
                    apply={setPhoneNumber}
                />
                <ChangableInput
                    placeholder={password}
                    label="Password"
                    apply={setPassword}
                    secure={true}
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
 export default EditProfile;