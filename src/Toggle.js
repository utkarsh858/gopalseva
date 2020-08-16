import React,{Component} from "react";
import "./Toggle.css"
export default class Toggle extends Component{
	render(){
		return(
			<label class="switch">
  <input type="checkbox" />
  <span class="slider round">
  <span class="left">Give Once</span>
  <span class="right">Give Monthly</span>
  
  </span>
</label>
		)
	}
}