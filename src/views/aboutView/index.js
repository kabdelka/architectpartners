import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './aboutview.css'



const AboutView = () => {
	return (

				<div className="container">
					<div className="section1">
							<Header/>
					</div>
					<div className="section-about">
							<h1>About us</h1>
							<div className="about-container">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum, officiis at suscipit ab iusto beatae est perspiciatis qui neque! Accusantium esse inventore velit nulla impedit corporis blanditiis molestias est.</p>

								
								<p>
									<span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse nam dolor architecto commodi dolorem sint, quae placeat ad soluta dolore. Maiores dicta suscipit repudiandae velit. Repudiandae provident ipsum, illo impedit!</span>
									<span>Eveniet totam voluptate, ex quae eos, dolor, tempora neque deserunt at obcaecati molestiae inventore aspernatur facilis necessitatibus ipsa modi repellat, id. Nesciunt reiciendis officiis ea tempora voluptas eum omnis aliquid.</span>
									<span>Quis, error cum eveniet explicabo reiciendis aperiam sit beatae nemo porro ipsa laborum minima repellat, deserunt! Quia animi autem error magni, cupiditate, dolorum vel numquam exercitationem, repellat voluptatibus doloribus! Dolorem!</span>
								</p>

								<p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ratione deleniti quisquam cum maiores doloremque praesentium quia magni qui ipsum! Perspiciatis esse ut similique error culpa vel, debitis nam placeat!</p>

							</div>
					
					</div>
					<div className="section3">
							<Footer/>
					</div>

			</div>	


		)
}


export default AboutView;