import {
  SET_IMAGES,
  SET_ROWS,
  SET_VISIBLE_ROWS,
  GalleryActionTypes,
  APPEND_VISIBLE_ROWS
} from './types'
import { IImage, IImageRow } from '../../models/galleryModels'

export const setImages = (images: IImage[]): GalleryActionTypes => ({
  type: SET_IMAGES,
  payload: images
})

export const setRows = (rows: IImageRow[]): GalleryActionTypes => ({
  type: SET_ROWS,
  payload: rows
})

export const setVisbleRows = (rows: IImageRow[]): GalleryActionTypes => ({
  type: SET_VISIBLE_ROWS,
  payload: rows
})

export const appendVisibleRows = (rows: IImageRow[]): GalleryActionTypes => ({
  type: APPEND_VISIBLE_ROWS,
  payload: rows
})
