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

const MobileNavigation = () => {

	return (
		<div className='navigation__mobile'>
			<div className="navigation__mobile__logo">
				<Logo />
				<HamburgerButton />
			</div>
			<div className="navigation__mobile__drawer">
				<nav id="main-menu" className='navigation__mobile__nav'>
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
				<div className="navigation__mobile__socials">
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

export default MobileNavigation