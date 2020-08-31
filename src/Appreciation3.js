import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './css/Appreciation.css'

import qoutes from './img/qoutes.png';
import speech from "./img/speech.png";

export default class Appreciation extends Component{
	
	render(){
		return(


			<center>


			<iframe style={{borderRadius:"5px"}} width="100%" height="500" src={this.props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
			<br/>
			<div class="appr-desc">
			{this.props.name}<br/>
			<span style={{fontSize:"0.8em"}}>
			{this.props.title}</span>
			</div>
			</center>
		)
	}
}
			// <div class="b"></div>