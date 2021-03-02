import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './contactView.css'


const ContactView = () => {
	return (

			<div className="container">
					<div className="section1">
							<Header/>
					</div>
					<div className="section-contact">
							<h1>Contact us</h1>
							<div className="form-container">
								<input className='input' type="text" label='First Name' placeholder='first name'/>
								<input className='input' type="email" label='Email' placeholder='your@email.com'/>
								<input className='input-message' type='text' label='Message' placeholder='Enter here your Message ...'/>
								<button type='button'>Send</button>
							</div>
					
					</div>
					<div className="section3">
							<Footer/>
					</div>

			</div>	

		)
}



export default ContactView