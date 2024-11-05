import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavButtons() {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.outlinedButton}>
        <Text>View Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlinedButton} onPress={() => {}}>
        <Text>Promotions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.outlinedButton, { backgroundColor: '#000' }]}
        onPress={() => { }}
      >
        <Text style={{color: '#fff'}}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  outlinedButton: {
    backgroundColor: '#fff', // White background
    borderColor: '#000', // Black border
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12, // Space between buttons
    alignItems: 'center',
  },
  button: {
    marginBottom: 10
  },
})