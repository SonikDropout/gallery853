import { IImage } from '../../models/galleryModels'
import { IImageRow } from '../../models/galleryModels'
import { IRange } from '../../utils/range'

export const SET_IMAGES = 'SET_IMAGES'
export const SET_ROWS = 'SET_ROWS'
export const SET_VISIBLE_ROWS_RANGE = 'SET_VISIBLE_ROWS_RANGE'
export const EXTEND_VISIBLE_ROWS_RANGE = 'EXTEND_VISIBLE_ROWS_RANGE'

export interface ISetImagesAction {
  type: typeof SET_IMAGES
  payload: IImage[]
}

interface ISetVisibleRowsRangeAction {
  type: typeof SET_VISIBLE_ROWS_RANGE
  payload: IRange
}

interface IExtendVisibleRowsAction {
  type: typeof EXTEND_VISIBLE_ROWS_RANGE
  payload: number
}

interface ISetRowsAction {
  type: typeof SET_ROWS
  payload: IImageRow[]
}

export type GalleryActionTypes =
  | ISetImagesAction
  | ISetVisibleRowsRangeAction
  | IExtendVisibleRowsAction
  | ISetRowsAction

export interface IGalleryState {
  images: IImage[]
  rows: IImageRow[]
  visibleRowsRange: IRange
}
