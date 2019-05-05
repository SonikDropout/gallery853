import React, { useEffect, useRef } from 'react'
import { Dispatch } from 'redux'
import {
  extendVisibleRows,
  setRows,
  setImages
} from '../../store/gallery/actions'
import layoutImages from '../../utils/layoutImages'
import fetchImages from '../../utils/getImages'
import { IImageRow, IImage } from '../../models/galleryModels'
import Row from './row/Row'
import { cn } from '@bem-react/classname'
import { connect } from 'react-redux'
import './Gallery.css'
import { AppState } from '../../store'
import RowPlaceholder from './row/RowPlaceholder'
import { IGalleryState } from '../../store/gallery/types'

export const cnGallery = cn('Gallery')

interface IGalleryProps {
  state: IGalleryState
  extendVisibleRows(n: number): void
  setRows(rows: IImageRow[]): void
  setImages(images: IImage[]): void
}

const Gallery: React.FC<IGalleryProps> = props => {
  const containerEl = useRef(null)
  useEffect(() => {
    fetchImages().then(images => {
      props.setImages(images)
      const documentHeight = document.documentElement.offsetHeight
      props.setRows(
        layoutImages(
          images,
          // @ts-ignore
          containerEl.current.offsetWidth,
          documentHeight > 768 ? documentHeight / 2 : documentHeight
        )
      )
    })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleScroll = () => {
    if (
      window.pageYOffset + document.documentElement.offsetHeight * 2 >
      props.state.rows
        .slice(
          props.state.visibleRowsRange.lowBound,
          props.state.visibleRowsRange.upBound
        )
        .reduce((acc, row) => (acc += row.height), 0)
    )
      props.extendVisibleRows(4)
  }
  return (
    <section className={cnGallery()}>
      <div className={cnGallery('Container')} ref={containerEl}>
        {props.state.rows.map((row, i) =>
          props.state.visibleRowsRange.includes(i) ? (
            <Row key={i} height={row.height} images={row.images} />
          ) : (
            <RowPlaceholder key={i} height={row.height} images={row.images} />
          )
        )}
      </div>
    </section>
  )
}

const mapStateToProps = (state: AppState) => ({
  state: state.gallery
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setImages: (images: IImage[]) => dispatch(setImages(images)),
  extendVisibleRows: (n: number) => dispatch(extendVisibleRows(n)),
  setRows: (rows: IImageRow[]) => dispatch(setRows(rows))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
