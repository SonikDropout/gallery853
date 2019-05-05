import React from 'react'
import RowPlaceholder from './RowPlaceholder'
import { IImage } from '../../../models/galleryModels'
import { cnGallery } from '../Gallery'
import Image from '../../image/Image'

export interface IRowProps {
  height: number
  images: IImage[]
}

const Row: React.FC<IRowProps> = ({ height, images }) => (
  <div className={cnGallery('Row')} style={{ height }}>
    {images.map(image => (
      <Image caption={image.caption} src={image.src} key={image._id} />
    ))}
  </div>
)

export default Row
