import React, { useState } from 'react'
import Nav from '../nav/Nav'

const Header: React.FC = () => {
  const [isShowNav, setIsShowNav] = useState(false)
  const handleClick = () => {
    setIsShowNav(!isShowNav)
  }
  return (
    <header>
      {isShowNav && <Nav />}
      <button onClick={handleClick}>
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header
