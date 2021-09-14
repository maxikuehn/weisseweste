import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FONTS } from '../constants'

export default function Freunde() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.content}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderColor: 'lime',

    paddingTop: 150,
    paddingBottom: 60,
    flexGrow: 1,
  },
  content: {
    borderWidth: 1,
    borderColor: 'lime',
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'column',
  },
})
