import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavItem } from '../components'
import { routes } from '../constants'

const dummyText =
  'Nachdem wir uns mit diesem ausweglos anmutenden Thema ' +
  'auseinandergesetzt hatten, stellte sich uns die Frage:\nWas ' +
  'können wir tun? Bewusster und weniger einkaufen, sich besser ' +
  'informieren, die Kleidung gut behandeln und länger tragen. Aber was, ' +
  'wenn es soweit ist? Wenn man etwas nicht mehr tragen möchte? Die ' +
  'Jeans nur Platz im Schrank wegnimmt?'

const localRoutes = [
  {
    name: routes.WeisseWeste,
    displayText: 'Weiße Weste',
    text: dummyText,
  },
  {
    name: routes.Goals,
    displayText: 'Unsere Ziele',
    text: dummyText,
  },
  {
    name: routes.Education,
    displayText: 'Aufklärung',
    text: dummyText,
  },
]

export default function UeberUns({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.NavItemContainer}>
        {localRoutes.map((r) =>
          NavItem(r, () =>
            navigation.navigate(r.name, {
              name: r.name,
              title: r.displayText,
              text: r.text,
            }),
          ),
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  NavItemContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '40%',
  },
})
