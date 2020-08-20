import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './css/Appreciation.css'
import temp from './img/mataji.jpg';
import speech from "./img/speech.png"

export default class Appreciation extends Component{
	
	render(){
		return(
			<center style={{position:"relative"}}>

			<div class="bubble">

				{this.props.content}

			</div>
			<div class="person">
			<center>
			<img src={this.props.image} class="appr-profile" /><br/>
			<span style={{fontWeight:"bold"}} >
			{this.props.name}
			</span><br/>
			<span>
				{this.props.title}
			</span>
			</center>
			</div>
			</center>
		)
	}
}
			// <div class="b"></div>