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
import Sidebar from '../../components/Sidebar'

const Navigation = () => {

	return (
		<div className='navigation'>
			<Sidebar />
		</div>
	)
}

export default Navigation