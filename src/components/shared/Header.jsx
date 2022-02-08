import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = () => {
    setNavOpen(prev => !prev)
  }

  window.addEventListener('resize', () => {
    if (navOpen && window.innerWidth > 1023) {
      setNavOpen(false)
    }
  })

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>outdated.today</Link>
        <button 
          className={`navbar-burger ${navOpen && "is-active"}`}
          aria-label='menu' 
          aria-expanded={ navOpen } 
          onClick={ handleClick }>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>
      <div 
        className={`navbar-menu ${ navOpen && "is-active" }`}>
        <div className='navbar-end'>
          <CustomLink extraClass="navbar-item" to='/' onClick={handleClick}>Home</CustomLink>
          <CustomLink extraClass="navbar-item" to='about' onClick={handleClick}>About</CustomLink>
        </div>
      </div>
    </nav>
  )
}