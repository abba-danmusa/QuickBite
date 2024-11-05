
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Bag: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContentContainer} >  
      <Text>Your Shopping Bag</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContentContainer: {
    backgroundColor: '#fff',
    paddingBottom: 50
  },
  
});

export default Bag;