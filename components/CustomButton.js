import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants'

export default function CustomButton({ title, handlePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <Text style={{ ...FONTS.body2, color: COLORS.secondary }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius,
  },
})
