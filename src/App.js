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
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class App extends Component{

	scrollTo = (target) =>{
      scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset : -50,
    })
	}
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
			          		<Home />
			 				<Footer scrollHandler={this.scrollTo}/>
			            </Route>
			        </Switch>
			   
			    </Router>
			</div>    
		)
	}
}