import React from 'react';
import '@styles/SendEmail.scss';
import iconEmail from '@icon/email.svg'
import logoYardSale from '@image/logo_yard_sale.svg'

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src={logoYardSale} alt="logo" className="logo" />
				<h1 className="title">Email has been sent!</h1>
				<p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
				<div className="email-image">
					<img src={iconEmail} alt="email" />
				</div>
				<button className="primary-button login-button">Login</button>
				<p className="resend">
					<span>Didn't receive the email?</span>
					<a href="/">Resend</a>
				</p>
			</div>
		</div>
	);
}

export {SendEmail};
