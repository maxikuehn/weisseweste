import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavItem } from '../components'
import { COLORS, routes, SIZES } from '../constants'

const localRoutes = [
  { name: routes.Map, displayText: 'Sammelstellen', component: null },
  { name: routes.About, displayText: 'Über Uns', component: null },
  { name: routes.Org, displayText: 'Organisationen', component: null },
  { name: routes.MyWeste, displayText: 'Meine Weste', component: null },
]

export default function NavigationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.NavItemContainer}>
        <View style={styles.content}>
          {localRoutes.map((r) =>
            NavItem(r, () => navigation.navigate(r.name)),
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  NavItemContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 60,
  },
  content: { flexGrow: 1, width: '100%', borderWidth: 0, borderColor: 'lime' },
})
