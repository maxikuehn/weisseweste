import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  ArticleScreen,
  NavigationScreen,
  MeineWeste,
  Organisationen,
  UeberUns,
  Sammelstellen,
  Freunde,
} from './screens'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { COLORS, fonts, routes } from './constants'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { BottomBar, TopIcon } from './components'
import { useStore } from './model/RootStore'

const Stack = createStackNavigator()

const App = () => {
  let [fontsLoaded] = useFonts({
    'SuisseIntl-Regular': fonts.suisseintl_regular,
    'SuisseIntl-Bold': fonts.suisseintl_bold,
  })

  const store = useStore()

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <View style={styles.container}>
      <TopIcon />
      <NavigationContainer
        theme={{
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: COLORS.black,
          },
        }}
        onStateChange={(state) => {
          const l = state.routes.length
          store.AppState.setCurrentScreen(state.routes[l - 1].name)
          store.AppState.setShowBottomBarMenu(l > 1)
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
          initialRouteName={routes.Menu}
        >
          <Stack.Screen name={routes.Menu} component={NavigationScreen} />
          <Stack.Screen name={routes.Map} component={Sammelstellen} />
          <Stack.Screen name={routes.About} component={UeberUns} />
          <Stack.Screen name={routes.Org} component={Organisationen} />
          <Stack.Screen name={routes.MyWeste} component={MeineWeste} />

          <Stack.Screen name={routes.WeisseWeste} component={ArticleScreen} />
          <Stack.Screen name={routes.Goals} component={ArticleScreen} />
          <Stack.Screen name={routes.Education} component={ArticleScreen} />

          <Stack.Screen name={routes.DRK} component={ArticleScreen} />
          <Stack.Screen name={routes.Caritas} component={ArticleScreen} />
          <Stack.Screen name={routes.Diakonia} component={ArticleScreen} />

          <Stack.Screen name={routes.Friends} component={Freunde} />
          <Stack.Screen name={routes.AddAddress} component={Freunde} />
        </Stack.Navigator>
        <BottomBar />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
