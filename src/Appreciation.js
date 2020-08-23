import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './css/Appreciation.css'

import qoutes from './img/qoutes.png';
import speech from "./img/speech.png";

export default class Appreciation extends Component{
	
	render(){
		return(


			<div class="center-appr">

			<div class="qoutes">
				<img src={qoutes} alt="" />
			</div>

			<div class="bubble">
			
				{this.props.content}

				<div class="appr-desc">
			__<br/>{this.props.name}<i style={{fontSize:"0.8em"}}>{" -"+this.props.title}</i>

				</div>
			

			</div>

			


			<div class="person">
			<center>
			<img src={this.props.image} class="appr-profile" /><br/><br/>
			
			</center>
			</div>
			</div>
		)
	}
}
			// <div class="b"></div>