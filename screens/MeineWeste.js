import React from 'react'
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton } from '../components'
import { FONTS, routes, SIZES } from '../constants'

export default function MeineWeste({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <SafeAreaView style={styles.content}>
          <Text
            style={{
              ...FONTS.largeTitle,
            }}
          >
            Du hast mittlerweile
          </Text>
          <Text style={{ ...FONTS.hugeTitle }}>02</Text>
          <Text style={{ ...FONTS.largeTitle }}>Weisse Westen gesammelt!</Text>
          <View style={{ flexGrow: 1 }} />
          <CustomButton
            style={styles.button}
            title={'Deine Freunde'}
            handlePress={() => navigation.navigate(routes.Friends)}
          />
          <CustomButton
            style={styles.button}
            title={'Neue Sammelstelle melden'}
            // handlePress={() => navigation.navigate('SammelstelleHinzufügen')}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 150,
    paddingBottom: 60,
  },
  content: {
    borderWidth: 0,
    borderColor: 'lime',

    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    display: 'flex',
    flexDirection: 'column',
  },
  button: { alignSelf: 'flex-end' },
})
