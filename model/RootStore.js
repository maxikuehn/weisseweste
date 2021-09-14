import { types } from 'mobx-state-tree'
import { MapMarkerModel } from './MapMarker'
import { AppStateModel } from './AppState'

const RootStore = types
  .model('RootStore', {
    AppState: AppStateModel,
    MapMarkers: types.array(MapMarkerModel),
  })
  .actions((self) => ({
    addMapMarker(title, description, imgURL, type, coordinate) {
      self.MapMarkers.push(
        MapMarker.create({ title, description, imgURL, type, coordinate }),
      )
    },
    async fetchMapMarkers() {},
  }))
  .views((self) => ({
    getAllMapMarkers() {
      return self.MapMarkers
    },
  }))

let initialState = {
  AppState: {},
  MapMarkers: [
    {
      id: 0,
      title: 'Erster Container',
      description: 'Das ist der allererste Container!',
      imgURL: 'kein bild',
      type: 'container',
      coordinate: {
        latitude: 49.010287276867345,
        longitude: 8.425687716045795,
      },
    },
    {
      id: 1,
      title: 'Zweiter Container',
      description: 'Das ist der zweite Container!',
      imgURL: 'kein bild',
      type: 'container',
      coordinate: {
        latitude: 49.009231321443465,
        longitude: 8.40388792344698,
      },
    },
    {
      id: 2,
      title: 'Moin Mannheim',
      description: 'Auch in Mannheim ist was los',
      imgURL: 'kein bild',
      type: 'container',
      coordinate: {
        latitude: 49.496393332064265,
        longitude: 8.472731600793727,
      },
    },
  ],
}

let _rootStore
export const useStore = () => {
  if (!_rootStore) {
    _rootStore = RootStore.create(initialState)
  }
  return _rootStore
}
/*

export const rootStore = RootStore.create(initialState)

const RootStoreContext = createContext(null)

export function useStore() {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }
  return store
}

export const Provider = RootStoreContext.Provider

*/
