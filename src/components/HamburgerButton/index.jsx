import React, { useState } from 'react'
import './index.scss'

const HamburgerButton = ({ onClick, isMenuOpen }) => {

	return (
		<button 
            onClick={onClick}
            type="button"
            className={`button button--hamburger-icon ${isMenuOpen ? 'active' : ''}`}
            aria-expanded={isMenuOpen}>
      <span className="visually-hidden">Main Menu Toggle</span>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </button>
	)
}

export default HamburgerButton