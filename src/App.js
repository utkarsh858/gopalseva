import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Donation from "./Donation2.js"
import Home from "./Home.js"
import Footer from "./Footer.js"

export default class App extends Component{
	render(){
		return(
			<div>
	            <Router>
			        <Switch>
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