import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1,}}>
    <View style={{ flex: 1,}}>
     <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
      <View style={{ flex: 1, backgroundColor: "magenta" }}></View>
      <View style={{ flex: 1, backgroundColor: "cyan" }}></View>
    </View>
    </View>
  
    <View style={{ flex: 5,backgroundColor: "green" }}>
    </View>

     
    <View style={{ flex: 1,}}>
     <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1, backgroundColor: "black" }}></View>
      <View style={{ flex: 1, backgroundColor: "cyan" }}></View>
    </View>
    </View>
 
    </View>);
}