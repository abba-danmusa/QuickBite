import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import GoogleSignInWeb from '@/components/authentication/GoogleSignInWeb';
import { router } from 'expo-router';

type RootStackParamList = {
  SignUp: undefined;
  // Add other screens here as needed
};

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

interface SignUpProps {
  navigation: SignUpScreenNavigationProp;
}

const Signup: React.FC<SignUpProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const colorScheme = useColorScheme()
  console.log(colorScheme)

  const handleSignUp = (): void => {
    // Logic for sign-in authentication
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

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

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Text style={styles.required}>Required</Text>

      <Button title="Sign In" onPress={handleSignUp} color="#000" />

      <Text style={styles.alternativeText}>Alternative Sign-up Options</Text>
      <View style={styles.socialButtonsContainer}>
        <GoogleSignInWeb title='Sign-up with Google'/>
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text
          style={styles.forgotPassword}>
          Already have an account? Sign-in
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

export default Signup;