import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function CustomersReviews() {
  return (
    <>
      <Text style={styles.sectionTitle}>Customer Reviews</Text>
      <View style={styles.reviews}>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewAuthor}>Amy B.</Text>
          <Text style={styles.reviewText}>The burgers here are amazing. Highly recommend!</Text>
        </View>
        <View style={styles.reviewCard}>
          <Text style={styles.reviewAuthor}>Mike S.</Text>
          <Text style={styles.reviewText}>Pizza was delivered fresh and delicious. Will order again!</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 10,
  },
  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewCard: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  reviewAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 12,
    color: '#555',
  },
})