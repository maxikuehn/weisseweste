import { types } from 'mobx-state-tree'

export const AppStateModel = types
  .model('AppStateModel', {
    currentScreen: '',
    showBottomBarLogo: true,
    showBottomBarMenu: false,
  })
  .actions((self) => ({
    setCurrentScreen(v) {
      self.currentScreen = v
    },
    setShowBottomBarMenu(v) {
      self.showBottomBarMenu = v
    },
  }))
