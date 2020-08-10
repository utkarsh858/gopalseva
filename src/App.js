import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Donation from "./Donation.js"
import Home from "./Home.js"

export default class App extends Component{
	render(){
		return(
			<div>
	            <Router>
			        <Switch>
			        	<Route path="/donate">
			            	<Donation value="3456"/>
			            </Route>

			            <Route path="/">
			          		<Home/>
			            </Route>	

			          
			          
			        </Switch>
			   
			    </Router>
			</div>    
		)
	}
}