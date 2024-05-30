import Portrait from '../assets/NATHAN-portrait.png'
import ScholasticLogo from '../assets/scholastic.jpeg'
import MWLogo from '../assets/midwesternlogo.png'
import GoLocalLogo from '../assets/golocalinteractivelogo.png'
import XenoMediaLogo from '../assets/xenomedialogo.png'
import BearGroupLogo from '../assets/beargrouplogo.jpeg'
import ImageBubble from '../components/ImageBubble'

const About = () => {
	return (
		<div className="page page__about">
			<h1>My Experience</h1>
			<div className="page__about__info">
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ BearGroupLogo }/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Front-End Web Developer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp, Javascript, Drupal 9/10, Shopify, PHP, Docker, Figma, Photoshop, Github, Bitbucket, Jira</p>
            <p><strong>Job Duties: Mobile first development</strong></p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ XenoMediaLogo }/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Front-End Engineer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp/Webpack, Javascript/Jquery, PHP, Docker, Wordpress, Drupal 8/9, Photoshop, Github, Jira</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ GoLocalLogo }/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Software Engineer I/II/III</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Webpack, Javascript/Jquery, PHP, Wordpress, Laravel, Vue, Photoshop, Bitbucket, Clickup</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ MWLogo }/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Web/Software Engineer</p>
            <p><strong>Techonologies:</strong> HTML, CSS/SASS, Gulp/Webpack, Javascript/Jquery, PHP, Laravel, Vue, Expression Engine, Photoshop, Bitbucket, Basecamp</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
        <div className="page__about__info__job">
          <div className="page__about__info__job__logo">
            <img src={ ScholasticLogo }/>
          </div>
          <div className="page__about__info__job__desc">
            <p><strong>Job Title:</strong> Front-End Developer Intern</p>
            <p><strong>Techonologies:</strong> HTML, CSS, Javascript/Jquery</p>
            <p><strong>Job Duties:</strong></p>
          </div>
        </div>
			</div>
		</div>
	)
}

export default About