import React, {useState , useEffect} from 'react';
import { TextInput, View , Dimensions,StyleSheet , Image , TouchableOpacity} from 'react-native';
import {Input,Icon} from 'react-native-elements';
import  Colors  from '../../Assets/Colors'

const {width , height} = Dimensions.get('window');
//392.72, 759.27

const InputBox =  ({placeholder,apply,security,icon}) => {
    // const [text,setText] = useState('')
    const [value, onChangeText] = useState('');
    return(
        <Input
        containerStyle={{width:width*90/100}}
        placeholder={placeholder}
        labelStyle={{color:Colors.textColor}}
        style={styles.username}
        onChangeText={onChangeText}
        value={value}
        inputStyle={{color:Colors.secondTextColor}}
        leftIcon={
            <Icon
            name={icon}
            type='ionicon'
            size={width/18.5}
            color={Colors.secondTextColor}
            />
        }
        secureTextEntry={security}
        />
    );
}
const styles = StyleSheet.create({
    username:{
        fontSize:width/22 ,
        height:height/16,
    }
  });
 export default InputBox;