import { IImage } from '../models/galleryModels'

const colors: string[] = [
  '003f5c',
  '2f4b7c',
  '665191',
  'a05195',
  'd45087',
  'f95d6a',
  'ff7c43',
  'ffa600'
]

const sizes: number[] = [768, 1280, 1600]

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

const images: IImage[] = []
for (let i: number = 0; i < 100; i++) {
  const width: number = getRandom(sizes)
  const height: number = getRandom(sizes)
  const color: string = getRandom(colors)
  images.push({
    _id: i.toString(),
    src: `https://via.placeholder.com/${width}x${height}/${color}`,
    thumbSrc: `https://via.placeholder.com/${width / 3}x${height /
      3}/${colors}`,
    aspectRatio: width / height,
    caption: 'Sample Text'
  })
}

export default (): Promise<IImage[]> =>
  new Promise<IImage[]>((resolve, reject) => {
    setTimeout(() => resolve(images), 50)
  })
