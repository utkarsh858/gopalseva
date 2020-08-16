import React,{Component} from 'react';
import imgUrl from './img/radha1.jpg';

export default class Footer extends Component {
	render(){
		return(

			<div class="no-pointer-events">

			<div class="footer-filler" ></div>


			<div class="footer" >

			<div style={{position:"fixed",top:0,zIndex:0,color:"white",width:"100%",height:"100%"}}>

                      <div  style={{position:"absolute",top:0,height:"100%",width:"100%",pointerEvents:"none", zIndex:-1, background: "rgba(0,0,0,0.65)"}}></div>
                     <img src={imgUrl} style={{zIndex:-2,position:"fixed",top:0,left:0,height:"100%",width:"auto"}}/>


<center>
	<div style={{fontSize:"0.8em"}}>
	For non-Indian passport holders: Due to financial rules of the government, non-Indian passport holders can donate only through the FCRA accounts. Please use the contact form below if you need any assistace in this connection.
	</div>

	
                                                  <h2 style={{ textAlign: "center", fontSize:"1.5em",padding:10 }} >
                                                      CONTACT US 
                                                  </h2>
</center>

			</div>
			</div>


			</div>


			)}}
			