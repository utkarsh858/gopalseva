import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import donation from "./donation.js"
import Home from "./Home.js"

export default class App extends Component{
	render(){
		return(
<Router>
        <Switch>
          <Route path="/donate">
            <Donation/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
   
    </Router>
		)
	}
}