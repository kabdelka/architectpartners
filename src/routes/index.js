import React from 'react'

import {Switch , Route} from 'react-router-dom'

import PrincipalView from '../views/princpalView.jsx'
import ProjectsView from '../views/projectsView/projectsView.jsx'
import ContactView from '../views/contactView/index.js'
import AboutView from '../views/aboutView/index.js'

const Routes = () => {
	return (

				<div>
					<Switch>
							<Route exact path='/'>
								<PrincipalView/>
							</Route>

							<Route exact path='/projects'>
								<ProjectsView/>
							</Route>	

							<Route exact path='/contact'>
								<ContactView/>
								
							</Route>
							<Route exact path='/about'>

								<AboutView/>

							</Route>

					</Switch>
				</div>
			)
}


export default Routes