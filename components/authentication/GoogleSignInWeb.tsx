import React, { useEffect } from 'react';
import { Button, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import AntDesign from '@expo/vector-icons/AntDesign';

interface GoogleSignInProps {
  title: string
}

const GoogleSignInWeb: React.FC<GoogleSignInProps> = ({ title }) => {
  const discovery = AuthSession.useAutoDiscovery('https://accounts.google.com');

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: '910083317191-nhhlqkhhtsu87q2d4filnkdmb73sq0hv.apps.googleusercontent.com',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: 'https://auth.expo.io/@abba_danmusa/quickbite'
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log('Authorization code:', code);
    }
  }, [response]);

  return (
    <View>
      <TouchableOpacity style={styles.button}  onPress={() => promptAsync()} >
        <AntDesign name="google" size={20} color="black" />
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16
  }
})

export default GoogleSignInWeb;