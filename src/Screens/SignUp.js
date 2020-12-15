import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , Image , TouchableOpacity} from 'react-native';
import  Colors  from '../Assets/Colors'
import ChangableInput from '../Components/Login/InputBox'

const {width , height} = Dimensions.get('window');
//392.72, 759.27

function SignUp({ navigation }) {
    const [name,setName] = useState("Full Name")
    const [email,setEmail] = useState("Email Address")
    const [password,setPassword] = useState('Password')
    const [username,setUsername] = useState("Username")
    const [phoneNumber,setPhoneNumber] = useState("Phone Number")
    return (
      <View style={styles.page}>
            <View style={{flex:1.8/5}}>

            </View>
            <View style={{flex:2.5/5}}>
                <ChangableInput
                    placeholder={name}
                    apply={setName}
                    security={false}
                    icon='person-outline'
                />
                <ChangableInput
                    placeholder={username}
                    apply={setUsername}
                    security={false}
                    icon='person-outline'
                />
                <ChangableInput
                    placeholder={email}
                    apply={setEmail}
                    security={false}
                    icon='mail-outline'
                />
                <ChangableInput
                    placeholder={phoneNumber}
                    apply={setPhoneNumber}
                    security={false}
                    icon='call-outline'
                />
                <ChangableInput
                    placeholder={password}
                    label="Password"
                    apply={setPassword}
                    security={true}
                    icon='lock-closed-outline'
                />
            </View>
            <TouchableOpacity  style={styles.buttonContainer}
             onPress={()=>navigation.navigate('Home')}
             >
                <View style={styles.button}>
                    <Text style={styles.login}>Sign up</Text>
                </View>            
            </TouchableOpacity>
            <View style={{flex:0.2/5,flexDirection:'row'}}>
                    <Text style={styles.moreText}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.clickableText}>   Sign in</Text>
                    </TouchableOpacity>
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
    },
    moreContainer :{
        flex:0.7/5,
        width:width,
    },
    moreText:{
        color:Colors.secondaryColor , 
        fontSize : width/28
    }, 
    clickableText:{
        color:Colors.secondTextColor , 
        fontSize : width/28 , 
        fontWeight:'bold'
    },
    buttonContainer: {
        flex : 0.5/5 , 
        alignItems:'center' , 
        justifyContent :'center'
    },
    button:{
        backgroundColor:Colors.secondaryColor,
        width:0.7*width ,
        alignItems:'center' , 
        justifyContent :'center' ,
        borderRadius:15 ,
        height:0.3/5*height
    },
    login :{
        color:Colors.secondTextColor,
        fontSize:width/20
    }
  });
 export default SignUp;