import react from 'react';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
// import Home from './Details';

function First({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>First screen</Text>
        <Button
          title="Go to Second"
          onPress={() => navigation.navigate('Second')}
        />
      </View>
    );
  }
 export default First