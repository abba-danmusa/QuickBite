import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import GoogleSignInWeb from '@/components/authentication/GoogleSignInWeb';
import { router } from 'expo-router';

type RootStackParamList = {
  SignIn: undefined;
  // Add other screens here as needed
};

type SignInScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>;

interface SignInProps {
  navigation: SignInScreenNavigationProp;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const colorScheme = useColorScheme()
  console.log(colorScheme)

  const handleSignIn = (): void => {
    // Logic for sign-in authentication
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email or phone number"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.required}>Required</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Text style={styles.required}>Required</Text>

      <Button title="Sign In" onPress={handleSignIn} color="#000" />

      <Text style={styles.alternativeText}>Alternative Sign-In Options</Text>
      <View style={styles.socialButtonsContainer}>
        <GoogleSignInWeb title='Sign-in with Google'/>
      </View>

      <TouchableOpacity onPress={() => router.push('/authentication/signup')}>
        <Text
          style={styles.forgotPassword}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  required: {
    color: 'red',
    marginBottom: 10,
  },
  alternativeText: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  forgotPassword: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
  },
});

export default SignIn;