import React from 'react';
import {
  Button,
  View,
} from 'react-native';

const App = () => {
  return (<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "blue"}} accessible={false}>
      <Text>{"Sample text"}</Text>
      <Button title="Sample button" onPress={() => {}}/>
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "red"}} accessible={true}>
      <Text>{"Sample text"}</Text>
      <Button title="Sample button" onPress={() => {}}/>
    </View>
  </View>)
};

export default App;
