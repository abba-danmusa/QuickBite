import React, { useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import VendorShopCoordinates from '@/components/authentication/VendorShopCoordinates';
import VendorSignupForm from '@/components/authentication/VendorSignupForm';

type RootStackParamList = {
  Vendor: undefined;
  // Add other screens here as needed
};

type VendorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Vendor'>;

interface VendorProps {
  navigation: VendorScreenNavigationProp;
}

const Device_Width = Dimensions.get('window').width;

const Vendor: React.FC<VendorProps> = ({ navigation }) => {
  
  


  const handleSignUp = (): void => {
    // Logic for sign-in authentication
  }

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <VendorSignupForm/>
      </View>
      <View style={styles.container}>
        <VendorShopCoordinates/>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Device_Width
  }
})

export default Vendor