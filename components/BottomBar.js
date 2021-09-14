import { useNavigation } from '@react-navigation/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { COLORS, images, routes } from '../constants'
import { useStore } from '../model/RootStore'

const BottomBar = observer(() => {
  const navigation = useNavigation()
  const store = useStore()

  return (
    <View style={styles.container}>
      <View style={styles.burgerMenu} />
      {store.AppState.showBottomBarLogo ? (
        <TouchableOpacity
          onPress={() => {
            console.log(navigation.getState())
            navigation.reset({
              index: 0,
              routes: [{ name: routes.Menu }],
            })
          }}
        >
          <Image
            style={styles.logo}
            source={images.ww_logo_white_transparent}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.logo} />
      )}
      {store.AppState.showBottomBarMenu ? (
        <TouchableOpacity
          style={styles.burgerMenu}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <Icon name="menu" color={COLORS.white} size={50} />
        </TouchableOpacity>
      ) : (
        <View style={styles.burgerMenu} />
      )}
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    borderColor: 'lime',
    borderWidth: 0,

    position: 'absolute',
    width: '100%',
    height: 60,
    transform: [{ translateY: -60 }],
    top: '100%',
    zIndex: 1000,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.transparent,
  },
  logo: {
    width: 70,
    height: '100%',
    alignSelf: 'center',
  },
  burgerMenu: {
    borderColor: 'red',
    borderWidth: 0,

    width: '15%',
  },
})

export default BottomBar
