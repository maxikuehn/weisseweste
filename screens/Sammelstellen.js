import React, { useState } from 'react'
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { COLORS, icons, mapStyles, SIZES } from '../constants'
import { useStore } from '../model/RootStore'
import { FontAwesome } from '@expo/vector-icons'
import * as Location from 'expo-location'

export default function Sammelstellen({ route, navigation }) {
  const store = useStore()

  const initialRegion = {
    latitude: 49.013891267626796,
    longitude: 8.404442543848322,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const [region, setRegion] = useState(initialRegion)
  const [location, setLocation] = useState(null)

  function renderMap() {
    return (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        region={region}
        customMapStyle={mapStyles}
        loadingBackgroundColor={COLORS.black}
        minZoomLevel={9}
        showsUserLocation={false}
      >
        {store.MapMarkers.map((marker) => (
          <Marker
            key={marker.id}
            title={marker.title}
            description={marker.description}
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
            }}
          />
        ))}
      </MapView>
    )
  }
  function renderGetLocationButton() {
    const [loadingLocation, setLoadingLocation] = useState(false)

    const handleGetLocation = async () => {
      setLoadingLocation(true)
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
      setLoadingLocation(false)
    }
    return (
      <View
        style={{
          zIndex: 100,
          position: 'absolute',
          width: 40,
          height: 40,
          bottom: 60,
          left: 20,
          borderRadius: SIZES.radius,
          borderColor: COLORS.primary,
          borderWidth: 2,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {loadingLocation ? (
          <ActivityIndicator color="white" />
        ) : (
          <TouchableOpacity onPress={handleGetLocation}>
            <FontAwesome
              name="location-arrow"
              size={24}
              color="white"
              style={{ alignSelf: 'center' }}
            />
          </TouchableOpacity>
        )}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderMap()}
      {renderGetLocationButton()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    borderColor: 'lime',
    borderWidth: 0,
    flex: 1,
  },
})
