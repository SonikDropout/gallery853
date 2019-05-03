import { IImageRow, IImage } from '../../models/galleryModels'
import { combineReducers } from 'redux'
import {
  GalleryActionTypes,
  SET_VISIBLE_ROWS,
  APPEND_VISIBLE_ROWS,
  SET_IMAGES,
  SET_ROWS
} from './types'

const imageRowReducer = (
  state: IImageRow[] = [],
  action: GalleryActionTypes
) => {
  switch (action.type) {
    case SET_VISIBLE_ROWS:
      return action.payload
    case APPEND_VISIBLE_ROWS:
      return state.concat(action.payload)
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

const imageVisibleRowsReducer = (
  state: IImageRow[] = [],
  action: GalleryActionTypes
) => {
  switch (action.type) {
    case SET_ROWS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  images: imageReducer,
  rows: imageRowReducer,
  visibleRows: imageVisibleRowsReducer
})
