import React from 'react'
import s from './Navbar.module.css'
function Navbar() {
  return (
    <div className={s.Navbar_buttons}>
        <a href='#'>about me</a>
        <a href='#'>skills</a>
        <a href='#'>experience</a>
        <a href='#'>contacts</a>
        
    </div>
  )
}

export default Navbar