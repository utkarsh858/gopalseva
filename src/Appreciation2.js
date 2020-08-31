import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './css/Appreciation.css'

import qoutes from './img/qoutes.png';
import speech from "./img/speech.png";

export default class Appreciation extends Component{
	
	render(){
		return(


			<div class="center-appr">


			<div class="bubble">
			
			<img src={this.props.letter} style={{height:"100%"}}/>
			

			</div>

			


			<div class="person">
			<center>
			<img src={this.props.image} style={{width:"300px"}} class="appr-profile" /><br/><br/>
			<div class="appr-desc">
			{this.props.name}<i style={{fontSize:"0.8em"}}>{" - "+this.props.title}</i>

				</div>
			</center>
			</div>
			</div>
		)
	}
}
			// <div class="b"></div>