import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Styles } from '@/constants/Styles';

export default function BagButton() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => {}} style={styles.bagButton} >
      <View style={styles.bagButtonContent}>
        <Feather name="shopping-bag" size={26} color="#000" />
      </View>
      <View style={styles.plusContainer}>
        <Text style={styles.plusText}>1</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bagButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    zIndex: 1,
    ...Styles.shadow
  },
  bagButtonContent: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusContainer: {
    position: 'absolute',
    top: 5,
    right: 3,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    width: 18,
    height: 18,
    ...Styles.shadow,
    alignItems: 'center',
  },
  plusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  }
})