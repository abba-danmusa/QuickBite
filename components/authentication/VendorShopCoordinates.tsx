import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity, Button, StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const Coordinates: React.FC = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [markerPosition, setMarkerPosition] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  console.log('markerPosition', markerPosition);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Location permission is needed to use this feature');
          setLoading(false);
          return;
        }

        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        const { latitude, longitude } = location.coords;

        const newRegion: Region = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };

        setRegion(newRegion);
        setMarkerPosition({ latitude, longitude });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching location:', error);
        setLoading(false);
      }
    };

    requestLocationPermission();
  }, []);

  const onMarkerDragEnd = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    setRegion((prevRegion) => ({
      ...prevRegion!,
      latitude,
      longitude,
    }));
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Please wait while we fetch your location.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.backButtonContainer}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      {region && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          region={region}
          onRegionChangeComplete={(newRegion: Region) => setRegion(newRegion)}
          // showsUserLocation
          zoomEnabled
          scrollEnabled
        >
          {markerPosition && (
            <Marker
              draggable
              title="Your Location"
              description="Hold and drag to adjust your location"
              coordinate={markerPosition}
              onDragEnd={onMarkerDragEnd}
            />
          )}
        </MapView>
      )}
      <View style={styles.nextButtonContainer}>
        <Button title="Confirm Location" onPress={() => {}} color={'#000'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    paddingHorizontal: 20,
  }
})

export default Coordinates;