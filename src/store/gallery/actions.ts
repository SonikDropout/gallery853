import {
  SET_IMAGES,
  SET_ROWS,
  SET_VISIBLE_ROWS_RANGE,
  GalleryActionTypes,
  EXTEND_VISIBLE_ROWS_RANGE
} from './types'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { IImage, IImageRow } from '../../models/galleryModels'
import fetchImages from '../../utils/getImages'
import { AppState } from '../index'
import { IRange } from '../../utils/range'

export const setImages = (images: IImage[]): GalleryActionTypes => ({
  type: SET_IMAGES,
  payload: images
})

export const getImages = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => dispatch => {
  fetchImages().then(images => dispatch(setImages(images)))
}

export const setRows = (rows: IImageRow[]): GalleryActionTypes => ({
  type: SET_ROWS,
  payload: rows
})

export const setVisbleRows = (range: IRange): GalleryActionTypes => ({
  type: SET_VISIBLE_ROWS_RANGE,
  payload: range
})

export const extendVisibleRows = (number: number): GalleryActionTypes => ({
  type: EXTEND_VISIBLE_ROWS_RANGE,
  payload: number
})
