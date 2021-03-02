import React from 'react'
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import img from '../components/banner/banner.jpg'


const PrincipalView = () => {
	return (

			<div className="container">
					<div className="section1">
							<Header/>
					</div>
					<div className="section2">
						<Banner/>
					
					</div>
					<div className="section3">
							<Footer/>
					</div>

			</div>	

		)
}



export default PrincipalView