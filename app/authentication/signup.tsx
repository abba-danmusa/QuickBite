import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import GoogleSignInWeb from '@/components/authentication/GoogleSignInWeb';
import { router } from 'expo-router';
import { useSignup } from '@/hooks/queries/useAuthentication';
import toast from '@/utils/toast';
import Input from '@/components/Input';

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
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const { mutate } = useSignup()

  const handleSignUp = (): void => {
    if (email.length == 0) {
      toast('Email cannot be empty')
      return
    }

    if (password.length == 0 || password !== confirmPassword) {
      toast('Passwords cannot be empty and must match')
      return
    }

    mutate(
      { email, password },
      {
        onSuccess: () => {
          toast('Successfully signed up')
          router.back()
        },
        onError: (error) => {
          // console.log(error.response?.data?.errors)
        }
      }
    )
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <Input
        placeholder="Enter your email or phone number"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        required
      />

      <Input
        type='passwordInput'
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        setValue={setPassword}
        autoCapitalize="none"
        required
      />

      <Input
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        setValue={setConfirmPassword}
        autoCapitalize="none"
        required
      />

      <Button title="Sign Up" onPress={handleSignUp} color="#000" />

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