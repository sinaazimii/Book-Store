import react from 'react';
import * as React from 'react';
import { Button, Text, View , Dimensions , ScrollView ,StyleSheet} from 'react-native';
import Colors from '../../Assets/Colors'

const {width , height} = Dimensions.get('window');
const aboutText = 'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably.'
const forText = 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age.';
function AboutBook() {
    return (
      <View style={styles.about}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

          <View style={styles.aboutContainer}>
            <Text style={styles.title}>What is it about?</Text>
            <Text  style={styles.caption}>Its about {aboutText}</Text>
          </View>

          <View style={styles.forContainer}>
          <Text style={styles.title}>Who is it for?</Text>
          <Text style={styles.caption}>Its about {forText}</Text>
          </View>

        </ScrollView>
      </View>
  
    );
}

const styles = StyleSheet.create({
  about : { 
    flex : 3.2/10 ,
    zIndex:-1 ,
    alignItems: 'flex-start' , 
    display : 'flex' , 
    backgroundColor:Colors.primaryColor,
    width:width
  },
  scroll :{
    width:width , 
    backgroundColor:Colors.primaryColor ,
  },
  aboutContainer :{
    marginTop : height/16.8,
  },
  forContainer :{
    marginTop : height/45,
  },
  title :{
    marginLeft : width/39 , 
    fontWeight:'bold' , 
    fontSize: width/21 , 
    color : Colors.secondTextColor
  } , 
  caption :{
    marginLeft : width/39 , 
    marginTop : height/150 ,
    fontSize: width/25 , 
    color : Colors.secondaryColor,
    lineHeight :height/38,
    marginBottom:height/150 
  }
});
  
  
  export default AboutBook;