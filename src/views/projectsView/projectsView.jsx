import React from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'
import Footer from '../../components/footer'
import img from '../../components/banner/banner.jpg'
import './projectsView.css'


const ProjectsView = () => {
	return (

			<div className="container">
					<div className="section1">
							<Header/>
					</div>
					<div className="section-prjects">
						<div className="projects">
								<div className="porjects-header">Projects</div>
								<div className="projects-container">
									<div className="project">
									<div className="project-img-container"><img className='project-img' src='https://source.unsplash.com/random/800x500' alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Dicta ratione praesentium laboriosam corporis nesciunt autem saepe cupiditate nemo expedita quos nam in vitae sed quia, iure voluptatum enim repellat explicabo.p>
									</div>
									</div>
									<div className="project">
									<div className="project-img-container"><img className='project-img' src="https://source.unsplash.com/random/300x500" alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Optio corrupti harum totam blanditiis praesentium quos quasi exercitationem necessitatibus animi, eius asperiores deserunt neque aliquam tempore ab. Reprehenderit repellat cum placeat.
									</div>
									</div>
									<div className="project">
									<div className="project-img-container"><img className='project-img' src="https://source.unsplash.com/random/600x500" alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, dolorem! Eum autem unde ratione quod porro architecto. Tempora animi doloribus necessitatibus culpa cum iste nam aut veritatis fugit? Voluptatum, consectetur.
									</div>
									</div>
									<div className="project">
									<div className="project-img-container"><img className='project-img' src="https://source.unsplash.com/random/500x700" alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sapiente quam voluptatem repudiandae quisquam consequatur sed, culpa. Ipsum excepturi in porro eaque, perspiciatis reiciendis aliquam nam eos quam quos dolores.
									</div>
									</div>
									<div className="project">
									<div className="project-img-container"><img className='project-img' src='https://source.unsplash.com/random/500x400' alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Nemo minima laudantium, earum ullam sint veniam unde sit. Enim hic, adipisci? Sint, sed, nihil! Eligendi magnam accusantium veniam ipsam deleniti ratione.
									</div>
									</div>
									<div className="project">
									<div className="project-img-container"><img className='project-img' src="https://source.unsplash.com/random/500x600" alt=""/></div>
									<div className="project-info">
									<h1>Project Title</h1>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit repellendus impedit perspiciatis est quas ut praesentium officiis, ducimus. Ullam repudiandae consequatur possimus saepe, molestias corrupti, aperiam dignissimos facere alias quaerat.
									</div>
									</div>
								</div>
						</div>
					</div>
					<div className="section3">
							<Footer/>
					</div>

			</div>	

		)
}



export default ProjectsView