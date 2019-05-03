import React from 'react'
import Header from '../components/header/Header'

const withHeader = (Component: React.FC) => (props: any) => (
  <>
    <Header />
    <Component {...props} />
  </>
)

export default withHeader
