import Buyer from '@/components/profile/Buyer';
import Seller from '@/components/profile/Seller';
import { Styles } from '@/constants/Styles';
import { useCurrentUser } from '@/hooks/queries/useAuthentication';
import toast from '@/utils/toast';
import { Redirect, router } from 'expo-router';
import React from 'react';
import { View, Text, Switch, ScrollView, StyleSheet, Button } from 'react-native'
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import { useFocusEffect } from 'expo-router'
import { useCallback } from 'react'

const UserProfile = () => {

  const { data, isPending, refetch } = useCurrentUser()
  const currentUser = data?.data?.currentUser
  const accountType = currentUser?.vendor;

  const [isVendor, setIsVendor] = React.useState(!!accountType)

  // refetch the current user on mount
  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [])
  )
  
  if (isPending) {
    return <Text>Loading...</Text>
  }

  if (currentUser === null) { // user is not logged in
    return <Authentication/>
  }

  const renderComponent = {
    vendor: <Seller/>,
    buyer: currentUser && <Buyer currentUser={currentUser}/>,
  }[isVendor ? 'vendor' : 'buyer']

  const toggleAccountType = () => {
    if (!isVendor) {
      toast('You need to create a vendor\'s account')
      return router.push('/authentication/vendor')
    }
    setIsVendor(!isVendor);
  };

  return (
    <ScrollView style={styles.container}>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Text style={styles.profileImageText}>{currentUser?.email[0]}</Text>
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>{currentUser?.email}</Text>
        </View>

        {/* Toggle Switch for Account Type */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>{isVendor ? 'Seller' : 'Buyer'}</Text>
          <Switch
            value={isVendor}
            onValueChange={toggleAccountType}
            thumbColor={isVendor ? '#ff6347' : '#000'}
            trackColor={{ true: '#ccc', false: '#ccc' }}
          />
        </View>
      </View>

      { renderComponent }
      
    </ScrollView>
  );
}

const Authentication = () => {
  toast('You need to sign up or sign in to view your profile')
  return (
    <View style={styles.authenticationContainer}>
      <Button
        title="Sign Up"
        onPress={() => router.push('/authentication/signup')}
        color={'#000'}
      />
      <Text style={{alignSelf: 'center'}}>or</Text>
      <Button
        title="Sign In"
        onPress={() => router.push('/authentication/')}
        color={'#000'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  authenticationContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    gap: 10,
  },
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#f8f8f8',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginRight: 10,
    marginLeft: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Styles.shadow,
  },
  profileImageText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'capitalize'
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#666',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginRight: 8,
    fontWeight: '600',
  },
})

export default UserProfile;