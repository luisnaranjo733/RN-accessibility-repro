/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, View, Text} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
        accessible={false}>
        <Text>{'Blue text'}</Text>
        <Button title="Blue button" onPress={() => {}} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
        accessible={true}>
        <Text>{'Red text'}</Text>
        <Button title="Red button" onPress={() => {}} />
      </View>
    </View>
  );
};

export default App;
