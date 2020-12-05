import react from 'react';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
// import Home from './Details';

function Second({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Second Screen screen</Text>
        <Button
          title="Go to First"
          onPress={() => navigation.navigate('First')}
        />
      </View>
    );
  }
 export default Second