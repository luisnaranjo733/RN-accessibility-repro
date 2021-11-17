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
          backgroundColor: 'green',
        }}
        importantForAccessibility="no-hide-descendants">
        <Text>{'Green text'}</Text>
        <Button title="Green button" onPress={() => {}} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
        accessible={true}>
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
        accessible={false}>
        <Text>{'Red text'}</Text>
        <Button title="Red button" onPress={() => {}} />
      </View>
    </View>
  );
};

export default App;
