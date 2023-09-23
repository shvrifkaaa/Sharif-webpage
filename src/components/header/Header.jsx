import React from 'react'
import Navbar from '../navbar/Navbar'
import s from './header.module.css'
function Header() {
  return (
    <div className={s.Header}>
      <p className={s.Header_logo}> Sharif-site </p>
      <Navbar />
    </div>
  )
}

export default Header