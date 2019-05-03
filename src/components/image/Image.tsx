import React, { useState } from 'react'
import { cn } from '@bem-react/classname'
import './Image.css'

const cnImage = cn('Image')

interface IImageProps {
  src: string
  caption: string
}

const Image: React.FC<IImageProps> = props => {
  const [caption, setCaption] = useState(props.caption)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCaption(event.target.value)
  return (
    <div className={cnImage()}>
      <img src={props.src} className={cnImage('Img')} alt={props.caption} />
      <input
        className={cnImage('Caption')}
        onChange={handleChange}
        value={caption}
      />
    </div>
  )
}

export default Image
