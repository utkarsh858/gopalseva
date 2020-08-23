import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './css/Appreciation.css'
import temp from './img/mataji.jpg';
import speech from "./img/speech.png"
import quote from "./img/quote.png"

export default class Appreciation extends Component{
	
	render(){
		return(
			<center style={{position:"relative",marginBottom:"40px"}}>
			<div class="bubble">
			<img scr={quote} class="quote"/>
				{this.props.content}

				<div class="appr-desc">
			__<br/>{this.props.name}<i style={{fontSize:"0.8em"}}>{" -"+this.props.title}</i>

				</div>
			}

			</div>
			<div class="person">
			<center>
			<img src={this.props.image} class="appr-profile" /><br/><br/>
			
			</center>
			</div>
			</center>
		)
	}
}
			// <div class="b"></div>