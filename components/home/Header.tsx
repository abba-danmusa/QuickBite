import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedLogo from './AnimatedLogo';
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <View style={styles.safeAreaViewContainer}>
      <StatusBar style="dark" backgroundColor="#fff" translucent />
      <AnimatedLogo/>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    backgroundColor: '#fff',
    // borderBottomColor: '#000',
    borderBottomWidth: .2,
  },
});