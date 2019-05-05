import React from 'react'
import { IRowProps } from './Row'
import { cnGallery } from '../Gallery'
import { cnImage } from '../../image/Image'

const RowPlaceholder: React.FC<IRowProps> = ({ height, images }) => (
  <div className={cnGallery('Row', { type: 'placeholder' })}>
    {images.map(image => (
      <div
        key={image._id}
        className={cnGallery('ImagePlaceholder')}
        style={{ height, widht: height * image.aspectRatio }}
      />
    ))}
  </div>
)

export default RowPlaceholder
