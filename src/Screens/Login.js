import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet , ImageBackground , TouchableOpacity} from 'react-native';
import  Colors  from '../Assets/Colors'
import ChangableInput from '../Components/Login/InputBox'

const {width , height} = Dimensions.get('window');
//392.72, 759.27

function Login({ navigation }) {
    const [email,setEmail] = useState("Email Address")
    const [password,setPassword] = useState('Password')
    return (
      <ImageBackground source={require('../Assets/login-back.png')} style={styles.page}>
            <View style={{flex:3/5}}>
                <View style={{flex:1/2,width:width,justifyContent:'center'}}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text style={styles.welcome}>Back!</Text>
                </View>

            </View>
            <View style={{flex:1/5}}>
                <ChangableInput
                    placeholder={email}
                    label="Email Address"
                    apply={setEmail}
                    security={false}
                    icon='person-outline'
                />
                <ChangableInput
                    placeholder={password}
                    label="Password"
                    apply={setPassword}
                    security={true}
                    icon='lock-closed-outline'
                />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}>
            <View>
                <Text style={styles.login}>Login</Text>
            </View>
            </TouchableOpacity>
            <View style={styles.moreContainer}>
                <View style={{flex:1/2,flexDirection:'row',marginLeft:width*0.07,marginTop:height/70}}>
                    <Text style={styles.moreText}>Forgotten your login details?</Text>
                    <TouchableOpacity>
                        <Text style={styles.clickableText}>   Get help.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1/2,alignItems:'flex-end',marginBottom:height/50,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={styles.moreText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                        <Text style={styles.clickableText}>   Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
      </ImageBackground>
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
    button: {
        flex : 0.3/5 ,
        backgroundColor:Colors.secondaryColor,
        width:0.7*width ,
        borderRadius:15 , 
        alignItems:'center' , 
        justifyContent :'center'
    },
    login :{
        color:Colors.secondTextColor,
        fontSize:width/20
    },
    welcome:{
        fontSize:width/12 , 
        marginLeft:width*0.05 ,
        color: Colors.primaryColor
    }
  });
 export default Login;