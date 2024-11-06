import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

const AnimatedLogo = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.logoText,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        QuickBite
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    // backgroundColor: 'red'
  },
  logoText: {
    fontSize: 48,
    fontFamily: 'Lobster',
    // color: 'black'
    color: '#E74C3C', // Tomato red color for the logo
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Soft shadow color
    textShadowOffset: { width: 2, height: 2 }, // Position of the shadow
    textShadowRadius: 4, // Blurring effect for a softer shadow
  },
});

export default AnimatedLogo;