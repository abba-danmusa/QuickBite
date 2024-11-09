import CustomersReviews from '@/components/home/CustomersReviews';
import DiscoverBanner from '@/components/home/DiscoverBanner';
import NavButtons from '@/components/home/NavButtons';
import PopularDishes from '@/components/home/PopularDishes';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContentContainer} >  
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to QuickBite</Text>
        <DiscoverBanner />
        <PopularDishes />
        <NavButtons />
        <CustomersReviews />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContentContainer: {
    backgroundColor: '#fff',
    paddingBottom: 100
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Lobster',
    marginVertical: 16,
    marginLeft: 10
  },
});

export default HomeScreen;