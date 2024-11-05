import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGES = [
  { src: require('../../assets/images/b.png'), text: 'Discover the Best Eateries Near You' },
  { src: require('../../assets/images/a.png'), text: 'Order Your Favorite Meals' },
  { src: require('../../assets/images/c.png'), text: 'Explore Our Vast Selection' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % IMAGES.length;
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.carouselContainer}>
      
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Discover the Best Eateries Near You
        </Text>
        <Text style={styles.bannerSubtitle}>
          Order your favorite meals with ease
        </Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        contentContainerStyle={styles.imageContentContainer}
        onMomentumScrollEnd={(e) => {
          const index = Math.floor(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      >
        {IMAGES.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <View style={styles.overlay}>
              <Image source={image.src} style={styles.image} />
              <TouchableOpacity style={styles.overlayButton}>
                <Text style={styles.overlayText}>{image.text}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {IMAGES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10
  },
  banner: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    // marginBottom: 16,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#555',
    // marginBottom: 8,
  },
  carouselContainer: {
    position: 'relative',
  },
  imageContainer: {
    width,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 2,
  },
  overlay: {
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f5f5f5',
    padding: 10,
    justifyContent: 'center',
    zIndex: 0,
  },
  overlayButton: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    zIndex: 3,
  },
  overlayText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: 4,
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
});

export default ImageCarousel