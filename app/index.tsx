import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Redirect } from 'expo-router';

// type RootStackParamList = {
//   Root: undefined;
//   // Add other screens here as needed
// }

const loggedIn = false

export default function Root() {
  if (loggedIn) {
    return <Redirect href="/(tabs)" />
  } else {
    return <Redirect href="/authentication" />
  }
}