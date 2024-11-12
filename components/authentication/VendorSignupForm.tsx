import { View, Text, StyleSheet, Button } from 'react-native'
import Input from '@/components/Input'
import { useState } from 'react';
import { useVendorAuthStore } from '@/hooks/stores/useVendorAuthStore';

export default function VendorSignupForm() {
  
  const { vendorAuth, setVendorAuth } = useVendorAuthStore();
  
  const handleSignUp = (): void => {
    // Logic for sign-in authentication
  }

  const handleInputChange = (field: string) => (value: string) => {
    setVendorAuth({ ...vendorAuth, [field]: value });
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Become a Vendor</Text>

      <Input
        type='textInput'
        value={vendorAuth.phoneNumber}
        setValue={handleInputChange('phoneNumber')}
        placeholder='Enter your phone number'
        keyboardType='phone-pad'
        autoCapitalize="none"
        required
      />

      <Input
        type='textInput'
        placeholder="Enter your first name"
        value={vendorAuth.firstName}
        setValue={handleInputChange('firstName')}
        autoCapitalize='words'
        required
      />

      <Input
        type='textInput'
        placeholder="Enter your last name"
        value={vendorAuth.lastName}
        setValue={handleInputChange('lastName')}
        autoCapitalize="words"
        required
      />

      <Input
        type='textInput'
        placeholder="Enter your business name"
        value={vendorAuth.businessName}
        setValue={handleInputChange('businessName')}
        autoCapitalize="words"
        required
      />

      <Input
        type='textInput'
        placeholder="Enter your Business Address"
        value={vendorAuth.businessAddress}
        setValue={handleInputChange('businessAddress')}
        autoCapitalize="none"
        required
      />
      <View style={{ marginTop: 10 }}/>

      <Button title="Next" onPress={handleSignUp} color="#000" />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
});