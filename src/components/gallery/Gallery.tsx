import React, { useEffect, useState } from 'react'
import getImages, { IImage } from '../../utils/getImages'
import layoutImages, { IImageRow } from '../../utils/layoutImages'
import Image from '../image/Image'
import { cn } from '@bem-react/classname'
import './Gallery.css'

const cnGallery = cn('Gallery')

const Gallery: React.FC = () => {
  const [images, setImages] = useState<IImage[]>([])
  const [dispalyedRows, setDisplayedRows] = useState<IImageRow[]>([])
  useEffect(() => {
    getImages().then(images => setImages(images))
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleScroll = () => {}
  return (
    <section className={cnGallery()}>
      {images.map((image: IImage) => (
        <Image src={image.src} caption={image.caption} />
      ))}
    </section>
  )
}

export default Gallery
