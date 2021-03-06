import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions ,StyleSheet , TouchableOpacity , Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements'

const {width , height} = Dimensions.get('window');

import Colors from '../../Assets/Colors'

function SearchBar({ navigation }) {

    return (
      <View style={styles.listContainer}>
        <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} type='ionicon' name='search-outline' size={width/13} color="#fff"/>
            <TextInput
                style={styles.input}
                placeholder="Titles, authors, or topics"
                // onChangeText={(searchString) => {this.setState({searchString})}}
                underlineColorAndroid="transparent"
                placeholderTextColor='#c0c0c2'
            />
        </View>

      </View>
    );
  }

const styles = StyleSheet.create({
    listContainer: {
        flex:1.4/10 ,
        backgroundColor:Colors.secondaryColor ,
        width:width,
        justifyContent:'center' ,
        alignItems:'center' ,    
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        borderRadius : 15,
        width:width/1.22,
        elevation:3,
    },
    searchIcon: {
        padding: width/39.2,
    },
    input: {
        flex: 1,
        paddingTop: width/39.2,
        paddingRight: width/39.2,
        paddingBottom: width/39.2,
        paddingLeft: 0,
        color:Colors.textColor
    },
  });
 export default SearchBar;