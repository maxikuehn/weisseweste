import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS, routes, SIZES } from '../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { observer } from 'mobx-react-lite'
import { useStore } from '../model/RootStore'

const renderIcon = (icon) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.icon}
        name="account-group"
        size={55}
        color={COLORS.primary}
      />
    </View>
  )
}

const TopIcon = observer(() => {
  const store = useStore()
  switch (store.AppState.currentScreen) {
    case routes.Map: {
      return renderIcon()
    }
    case routes.About: {
      return renderIcon()
    }
    case routes.Org: {
      return renderIcon()
    }
    case routes.MyWeste: {
      return renderIcon()
    }
    case routes.WeisseWeste: {
      return renderIcon()
    }
    case routes.Goals: {
      return renderIcon()
    }
    case routes.Education: {
      return renderIcon()
    }
    case routes.DRK: {
      return renderIcon()
    }
    case routes.Caritas: {
      return renderIcon()
    }
    case routes.Diakonia: {
      return renderIcon()
    }
    case routes.Friends: {
      return renderIcon()
    }
    case routes.AddAddress: {
      return renderIcon()
    }
    default:
      return <View />
  }
})

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    borderColor: COLORS.primary,
    borderWidth: SIZES.border2,
    width: 80,
    height: 80,
    top: 35,
    left: 25,
    alignContent: 'center',
    justifyContent: 'center',
  },
  icon: { borderWidth: 0, borderColor: 'lime', textAlign: 'center' },
})

export default TopIcon
