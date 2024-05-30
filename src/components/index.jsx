import React, { useEffect } from 'react'
import './index.scss'

const IconButton = ({onClick, label}) => {
	return (
		<button onClick={onClick}>
			{label}
			<span className="visually-hidden">Main Menu</span>
			<div className="bar1"></div>
			<div className="bar2"></div>
			<div className="bar3"></div>
		</button>
	)
}

export default IconButton