import { types } from 'mobx-state-tree'

const CoordinateModel = types.model('Coordinate', {
  latitude: types.number,
  longitude: types.number,
})

export const MapMarkerModel = types.model('MapMarker', {
  id: types.identifierNumber,
  title: types.optional(types.string, 'MISSING STRING'),
  description: types.optional(types.string, 'MISSING STRING'),
  imgURL: types.optional(types.string, 'MISSING STRING'),
  type: types.optional(types.string, 'MISSING STRING'),
  coordinate: types.maybe(CoordinateModel),
})
