import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Contact = () => {
	const form = useRef();
	const position = [37.084229, -94.513283]

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_o0k2j7l', 'template_mjszqow', form.current, 'Ltfc7aHi692rw0588')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

	return (
		<div className="page page__contact">
			<div className="page__contact__form">
				<h1>Contact Me</h1>

				<form ref={ form } onSubmit={ sendEmail }>

					<div className="page__contact__form__row">
						<div className="page__contact__form__group">
							<label htmlFor="">Name</label>
							<input type="text" name="name" placeholder="John Doe" required />
						</div>
						<div className="page__contact__form__group">
							<label htmlFor="">Email</label>
							<input type="email" name="email" placeholder="email@gmail.com" required />
						</div>
					</div>

					<div className="page__contact__form__group">
						<label htmlFor="">Subject</label>
						<input type="text" name="subject" placeholder="Hi there..." required />
					</div>

					<div className="page__contact__form__group">
						<label htmlFor="">Message</label>
						<textarea name="message" placeholder="Send me a message!" rows="8" required></textarea>
					</div>
					<div className="page__contact__form__group">
						<input className="submit button button__primary" type="submit" value="SEND" />
					</div>
				</form>
			</div>

			<div className="page__contact__map">
				<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup></Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	)
}

export default Contact