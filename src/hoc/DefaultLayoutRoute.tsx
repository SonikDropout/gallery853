import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Header from '../components/header/Header'

const DefaultLayout = ({ component: Component, ...rest }: RouteProps) => {
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Header />
          <Component {...props} />
        </>
      )}
    />
  )
}

export default DefaultLayout
