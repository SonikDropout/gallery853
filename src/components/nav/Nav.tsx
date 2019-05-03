import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => (
  <nav>
    <NavLink to='/'>Главная</NavLink>
    <NavLink to='/about'>О нас</NavLink>
    <NavLink to='/login'>Вход</NavLink>
  </nav>
)

export default Nav
