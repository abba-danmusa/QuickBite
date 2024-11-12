import React from 'react'
import { Text, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Input: undefined;
  // Add other screens here as needed
};

type InputScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Input'>;

interface InputProps extends TextInputProps {
  navigation?: InputScreenNavigationProp;
  type?: 'textInput' | 'passwordInput',
  value: string,
  setValue: (value: string) => void,
  required?: boolean
}

const Input: React.FC<InputProps> = ({
  navigation,
  type = 'textInput',
  value,
  setValue,
  required = false,
  ...restProps
}) => {

  switch (type) {
    case 'textInput':
      return (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or phone number"
            value={value}
            onChangeText={setValue}
            {...restProps}
          />
          { required && <Text style={styles.required}>Required</Text> }
        </>
      );
    case 'passwordInput':
      return (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={value}
            onChangeText={setValue}
            autoCapitalize="none"
          />
          { required && <Text style={styles.required}>Required</Text> }
        </>
      );
    default:
      return null;
  }
};
const styles = StyleSheet.create({
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
});

export default Input;