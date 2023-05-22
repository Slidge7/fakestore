import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navigator from './src/Navigator';

const App = () => {

  return (
    <View style={{flex:1}}>
      <Navigator />
    </View>
  );
};

export default App;

