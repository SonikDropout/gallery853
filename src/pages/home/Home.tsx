import React from 'react'
import withHeader from '../../hoc/withHeader'
import HeroSection from '../../components/heroSection/HeroSection'
import Gallery from '../../components/gallery/Gallery'

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Gallery />
    </>
  )
}

export default withHeader(Home)
