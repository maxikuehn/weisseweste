import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export default NavItem = (route, handlePress) => {
  return (
    <TouchableOpacity
      key={route.name}
      style={styles.NavItemTouchable}
      onPress={handlePress}
    >
      <View style={styles.NavItem}>
        <Text style={styles.NavItemText}>{route.displayText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  NavItemTouchable: {
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: SIZES.margin,
    marginBottom: SIZES.margin * 3,
  },
  NavItem: {
    width: '100%',
    borderBottomWidth: SIZES.hairline,
    borderBottomColor: 'white',
  },
  NavItemText: {
    ...FONTS.largeTitle,
  },
})
