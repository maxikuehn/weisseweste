import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export const COLORS = {
  // base colors
  primary: '#FFF', // white
  secondary: '#000', // black

  // colors
  black: '#000002',
  white: '#FFFFFF',

  lightGray: '#F5F5F6',
  lightGray2: '#F6F6F7',
  lightGray3: '#EFEFF1',
  lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#898C95',
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  margin: 4,

  // font sizes
  hugeTitle: 55,
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // line sizes
  hairline: 0.25,
  border1: 1,
  border2: 2,
  border3: 3,

  // app dimensions
  width,
  height,
}

export const FONTS = {
  hugeTitle: {
    fontFamily: 'SuisseIntl-Bold',
    fontSize: SIZES.hugeTitle,
    lineHeight: 110,
    fontWeight: '500',
    color: COLORS.primary,
  },
  largeTitle: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 50,
    fontWeight: '500',
    color: COLORS.primary,
  },
  h1: {
    fontFamily: 'SuisseIntl-Bold',
    fontSize: SIZES.h1,
    lineHeight: 36,
    color: COLORS.primary,
  },
  h2: {
    fontFamily: 'SuisseIntl-Bold',
    fontSize: SIZES.h2,
    lineHeight: 30,
    color: COLORS.primary,
  },
  h3: {
    fontFamily: 'SuisseIntl-Bold',
    fontSize: SIZES.h3,
    lineHeight: 22,
    color: COLORS.primary,
  },
  h4: {
    fontFamily: 'SuisseIntl-Bold',
    fontSize: SIZES.h4,
    lineHeight: 22,
    color: COLORS.primary,
  },
  body1: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
    color: COLORS.primary,
  },
  body2: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.body2,
    lineHeight: 25,
    color: COLORS.primary,
  },
  body3: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
    color: COLORS.primary,
  },
  body4: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
    color: COLORS.primary,
  },
  body5: {
    fontFamily: 'SuisseIntl-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
    color: COLORS.primary,
  },
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
