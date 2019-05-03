export interface IImage {
  _id: string
  src: string
  thumbSrc: string
  aspectRatio: number
  caption: string
}

export interface IImageRow {
  height: number
  images: IImage[]
}
