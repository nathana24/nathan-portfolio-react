import { NavLink, Outlet } from 'react-router-dom'
import '../scss/layouts/_root-layout.scss'
import Navigation from '../components/Navigation'


const RootLayout = () => {
	return (
		<div className="root-layout">
			<Navigation />
			<Outlet />
		</div>
	)
}

export default RootLayout