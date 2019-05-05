import { IImageRow, IImage } from '../../models/galleryModels'
import { combineReducers } from 'redux'
import {
  GalleryActionTypes,
  SET_VISIBLE_ROWS_RANGE,
  EXTEND_VISIBLE_ROWS_RANGE,
  SET_IMAGES,
  SET_ROWS,
  IGalleryState
} from './types'
import Range, { IRange } from '../../utils/range'

const visibleRowsRangeReducer = (
  state: IRange = new Range(0, 0),
  action: GalleryActionTypes
) => {
  switch (action.type) {
    case SET_VISIBLE_ROWS_RANGE:
      return action.payload
    case EXTEND_VISIBLE_ROWS_RANGE:
      return state.extendUpBy(action.payload)
    default:
      return state
  }
}

const imageReducer = (state: IImage[] = [], action: GalleryActionTypes) => {
  switch (action.type) {
    case SET_IMAGES:
      return action.payload
    default:
      return state
  }
}

const rowsReducer = (state: IImageRow[] = [], action: GalleryActionTypes) => {
  switch (action.type) {
    case SET_ROWS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers<IGalleryState, GalleryActionTypes>({
  images: imageReducer,
  rows: rowsReducer,
  visibleRowsRange: visibleRowsRangeReducer
})
