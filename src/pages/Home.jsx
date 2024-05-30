import Logo from '../assets/site-logo-blue.svg'
import Portrait from '../assets/NATHAN-portrait.png'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'
import ImageBubble from '../components/ImageBubble'

const Home = () => {
	return (
		<div className="page page__home">
			<div className="page__home__text">
				<h1>Hi, <br /> I'm 
					<img src={ Logo } />
					athan.
					<br />
					<span>I've worked with...</span>
					<br />
					<Typed
			          	strings={[
			          		'HTML', 
			          		'CSS/SASS',
			          		'Javascript/Jquery',
			          		'PHP',
			          		'React',
			          		'Drupal',
			          		'Wordpress',
			          		'Shopify',
			          		'Laravel',
			          		'Docker',
			          		'Figma',
			          		'Photoshop'
			          	]}
			          	typeSpeed={50}
			          	backSpeed={50}
			          	loop
			      	/>
				</h1>
				<br />
				<p>*Site built with HTML, SASS, React</p>
				<Link className="button button__primary page__home__contact-me" to="contact">Contact Me</Link>
			</div>
			<div className="page__home__blob">
				<ImageBubble imageUrl={Portrait} />
			</div>
		</div>
	)
}

export default Home