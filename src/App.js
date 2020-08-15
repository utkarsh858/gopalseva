import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Donation from "./donation.js"
import CustomDonation from "./CustomDonation.js"
import Home from "./Home.js"
import Footer from "./Footer.js"

export default class App extends Component{
	render(){
		return(
			<div>
	            <Router>
			        <Switch>

			        	<Route path="/custom-donate">
			            	<CustomDonation />
			            </Route>

			            <Route path="/donate">
			            	<Donation />
			            </Route>

			            <Route path="/">
			          		<Home/>
			 				<Footer/>
			            </Route>
			        </Switch>
			   
			    </Router>
			</div>    
		)
	}
}