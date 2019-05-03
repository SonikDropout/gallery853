import { IImage } from '../../models/galleryModels'
import { IImageRow } from '../../models/galleryModels'

export const SET_IMAGES = 'SET_IMAGES'
export const SET_ROWS = 'SET_ROWS'
export const SET_VISIBLE_ROWS = 'SET_VISIBLE_ROWS'
export const APPEND_VISIBLE_ROWS = 'APPEND_VISIBLE_ROWS'

export interface ISetImagesAction {
  type: typeof SET_IMAGES
  payload: IImage[]
}

interface ISetVisibleRowsAction {
  type: typeof SET_VISIBLE_ROWS
  payload: IImageRow[]
}

interface IAppendVisibleRowsAction {
  type: typeof APPEND_VISIBLE_ROWS
  payload: IImageRow[]
}

interface ISetRowsAction {
  type: typeof SET_ROWS
  payload: IImageRow[]
}

export type GalleryActionTypes =
  | ISetImagesAction
  | ISetVisibleRowsAction
  | IAppendVisibleRowsAction
  | ISetRowsAction
