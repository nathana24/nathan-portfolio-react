import React, { useEffect } from 'react'
import './index.scss'

const ImageBubble = (props) => {

	const { imageUrl } = props;

	const addSlideUpClassToPortrait = () => {
		const portraitImage = document.querySelector('.image-bubble__portrait');

		if (portraitImage) {
			portraitImage.classList.add('slide-up');
		}
	}

	useEffect(() => {
		addSlideUpClassToPortrait();
	}, []);

	return (
		<div className="image-bubble">
			<img className="image-bubble__portrait" src={ imageUrl } alt="portrait" />
		</div>
	)
}

export default ImageBubble