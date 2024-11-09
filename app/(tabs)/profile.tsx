import Buyer from '@/components/profile/Buyer';
import Seller from '@/components/profile/Seller';
import { Styles } from '@/constants/Styles';
import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text, Switch, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = () => {
  
  const [isSeller, setIsSeller] = React.useState(false);
  let user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    type: isSeller ? 'seller' : 'buyer',
  };

  const toggleAccountType = () => {
    setIsSeller(!isSeller);
  };

  const renderComponent = {
    'seller': <Seller />,
    'buyer': <Buyer />,
  }[user.type] || <Redirect href="/authentication/signup" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImage}>
            <Text style={styles.profileImageText}>J D</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>johndoe@example.com</Text>
          </View>

          {/* Toggle Switch for Account Type */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>{isSeller ? 'Seller' : 'Buyer'}</Text>
            <Switch
              value={isSeller}
              onValueChange={toggleAccountType}
              thumbColor={isSeller ? '#ff6347' : '#000'}
              trackColor={{ true: '#ccc', false: '#ccc' }}
            />
          </View>
        </View>

        { renderComponent }
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginRight: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Styles.shadow,
  },
  profileImageText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
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