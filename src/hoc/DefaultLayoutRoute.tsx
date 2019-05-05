import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Header from '../components/header/Header'

interface IDefaultLayoutProps extends RouteProps {
  component: React.FC<any>
}

const DefaultLayout = ({
  component: Component,
  ...rest
}: IDefaultLayoutProps) => {
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
