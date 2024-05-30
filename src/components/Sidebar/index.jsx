import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HamburgerButton from '../../components/HamburgerButton'
import './index.scss'

const Sidebar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

	return (
		<div onClick={toggleHamburgerMenu} className={`navigation__sidebar ${isMenuOpen ? 'active' : ''}`} >
			<div className="navigation__sidebar__logo">
				<Logo />
				<HamburgerButton onClick={toggleHamburgerMenu} isMenuOpen={isMenuOpen} />
			</div>
			<div className="navigation__sidebar__drawer">
				<nav id="main-menu" className='navigation__sidebar__nav'>
					<ul>
						<li>
							<NavLink to="/">
								<FontAwesomeIcon icon={faHome} />
								<p>Home</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="about">
								<FontAwesomeIcon icon={faUser} />
								<p>About</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="contact">
								<FontAwesomeIcon icon={faEnvelope} />
								<p>Contact</p>
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className="navigation__sidebar__socials">
					<ul>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="linkedin"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="github"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Sidebar