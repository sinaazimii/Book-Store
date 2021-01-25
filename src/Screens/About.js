import React, {useState , useEffect} from 'react';
import { Text, View , Dimensions,StyleSheet ,Linking} from 'react-native';
import { Input , Icon} from 'react-native-elements';
import  Colors  from '../Assets/Colors'
import { DrawerActions  } from '@react-navigation/native';
import qs from 'qs';

const {width , height} = Dimensions.get('window');
//392.72, 759.27
async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;
    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });
    if (query.length) {
        url += `?${query}`;
    }
    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}
function openLinkedin(){
    const url = 'https://www.linkedin.com/in/sina-azimi-05762a174/'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
}
function sendMail(){
    sendEmail(
        'sinaazm15@gmail.com',
        'Feedback on book store app',
        ''
    ).then(() => {
        console.log('Our email successful provided to device mail ');
    });
}
function About({ navigation }) {
    return (
      <View style={styles.page}>
        <View style={styles.header}>
            <View style={styles.headerImagesContainer}>
            <Icon
                name='menu-outline'
                type='ionicon'
                color= {Colors.textColor}
                size={width/10}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
            </View>
            <View style={styles.headerTitleContainer}>
            <Text  style={styles.headerText}>About</Text>
            </View>
            <View style={styles.headerImagesContainer}>
            </View>
        </View>

        <View style={styles.captionContainer}>
            <Text style={styles.explain}>This is an application for a book store where you can
                  easily browse and buy your favorite books.
            </Text>
            <Text style={styles.explain}></Text>
            <Text style={styles.explain}>Made by Sina Azimi 
            </Text>
            <Text style={styles.explain}> 
                Student at Shiraz University
            </Text>
            <Text style={styles.explain}></Text>
            <Text style={styles.explain}> 
                Feel free to contact me and let me know your opinion
            </Text>
        </View>

        <View style={styles.iconsContainer}> 
        <View style={{flex:1/4}}></View>
        <View style={{flex:1/4}}>
            <Icon
                type='ionicon'
                name='logo-linkedin'
                color={Colors.secondTextColor}
                size={width/10}
                onPress={()=>openLinkedin()}
                />
        </View>
        <View style={{flex:1/4}}>
            <Icon
                type='ionicon'
                name='mail'
                color={Colors.secondTextColor}
                size={width/10}
                onPress={()=>sendEmail()}
                />
        </View>
        <View style={{flex:1/4}}></View>
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
    header : { 
        flex:1/10,  
        alignItems: 'flex-start' , 
        flexDirection : 'row' ,
        display : 'flex' , 
        backgroundColor:Colors.primaryColor ,
    } , 
    headerText :{
        fontSize : width/20 , 
        color : Colors.textColor
    } , 
    headerImagesContainer: { 
        flex: 1/5 , 
        alignItems : 'center', 
        justifyContent :'center' ,
        height :height/11 , 
    }, 
    headerTitleContainer: { 
        flex: 3/5 , 
        alignItems : 'center', 
        justifyContent :'center' ,
        height :height/11 , 
    },
    captionContainer:{
        flex:4/10 , 
        alignItems:'center' ,
        justifyContent:'center' ,
        margin:width/100
    },
    iconsContainer:{
        flex:1/10 ,
        alignItems:'center' ,
        justifyContent:'center' ,
        flexDirection:'row'
    },
    explain:{
        fontSize: width/22,
        textAlign:'center' ,
        color :Colors.textColor
    }
  });
 export default About;