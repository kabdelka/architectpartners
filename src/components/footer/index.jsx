import React from 'react'
import logo from './logo-ap.jpg'
import './footer.css'


const Footer = () => {
	return (

			<div className="footer">
					<div className="footer-nav">
						<div className="links"><a href="/architectpartners/">Home</a></div>
						<div className="links"><a href="/architectpartners/projects">Projects</a></div>
						<div className="links"><a href="/architectpartners/contact">Contact</a></div>
						<div className="links"><a href="/architectpartners/about">About us</a></div>
					</div>
					<div className="footer-logo"><img src={logo} alt="LOGOs"/></div>
			</div>

		)
}


export default Footer;

