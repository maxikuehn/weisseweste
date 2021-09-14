import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export default function ArticleScreen({ route, navigation }) {
  const { name, title, text } = route.params
  return (
    <View style={styles.container}>
      <View style={styles.article}>
        <View style={styles.titleContainer}>
          <View style={styles.Title}>
            <Text style={styles.TitleText}>{title}</Text>
          </View>
          <Text style={styles.Text}>{text}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  article: { paddingTop: 150, flexGrow: 1, alignItems: 'center' },
  titleContainer: {
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: SIZES.margin,
  },
  Title: {
    width: '100%',
    borderBottomWidth: SIZES.hairline,
    borderBottomColor: 'white',
  },
  TitleText: {
    color: COLORS.primary,
    ...FONTS.largeTitle,
  },
  Text: {
    paddingTop: SIZES.padding,
    color: COLORS.primary,
    ...FONTS.body2,
  },
})
