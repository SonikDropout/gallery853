import { IImage, IImageRow } from '../models/galleryModels'

export default (
  images: IImage[],
  galleryWidth: number,
  maxRowHeight: number
): IImageRow[] => {
  let i: number = 0
  const rows: IImageRow[] = []
  while (i < images.length) {
    let row: IImageRow = {
      height: window.innerHeight,
      images: []
    }
    do {
      row.images.push(images[i])
      const aspectRatioSum = row.images.reduce(
        (acc, image) => (acc += image.aspectRatio),
        0
      )
      row.height = galleryWidth / aspectRatioSum
      if (++i >= images.length) {
        row.height = row.height > maxRowHeight ? maxRowHeight : row.height
        break
      }
    } while (row.height > maxRowHeight)
    rows.push(row)
  }
  return rows
}
