import React,{Component} from 'react';





// requires follwing props 
// id      for modal id
// imgsrc  for source for image
// content for model content

 export default class StoryModal extends Component{

 	constructor(props){
 		super(props)
 		this.state = {
 			options:[],
 		}
 	}
 	componentDidMount = () =>{
 		var option_list = this.props.options;
 		// console.log(option_list)
 		var temp=option_list.map((data)=>{
 			return(

 			                      <ul class="list-group list-group-horizontal" 
                                        
                                        >
                                        <li class="list-group-item">₹ {data.amount}</li>
                                        <li class="list-group-item">{data.cause} </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                        	this.props.handler(data.once_link,data.monthly_link,data.amount,"/donate",data.is_custom);
                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="purpose_of_donation" class="custom-control-input" value={data.price}/>
                                        <label class="custom-control-label" for="customRadio1"></label>
                                        </div>
                                        </li>
                                        </ul>
 			)
 		});
 		this.setState({options:temp});
 	}

	render(){

		return (

			<div class="modal story_modal" id={this.props.id}  >
		    	<div class="modal-dialog modal-xl">
		    		<div class="modal-content">

		    			<div class="modal-header">
		    				<button type="button" class="close" data-dismiss="modal">×</button>
		    			</div>


			    		<div class="modal-body">
					    	<div class="modal-story-body">
							    <div class="row">
								    <div class="col-md-5">
									    <div class="modal-story-body-img">
									    	<img class="d-none d-md-block story-img" width="400px" height="400px" src={this.props.imgsrc} alt="Oh! Krishna this could not be found, but is was Story desciptor."></img>
									    	<img class= "d-md-none"src={this.props.imgsrc} width="300px" height="300px" alt="Oh! Krishna this could not be found, but is was Story desciptor."></img>
									    </div>
								    </div>
								    <div class="col-md-7">
									    <div class="modal-story-body-txt d-flex justify-content-between">
										    <div class="modal-story-con modal-frame">
										    	{this.props.content}


										    	<ul class="nav nav-pills nav-justified " role="tablist">
										    	<li class="nav-item ">
										    	<a class="nav-link  " data-toggle="tab" 
										    	onClick={()=>{
										    		this.props.setGiveOnce()
										    	}}
										    	id="onetime">
										    	Give Once
										    	</a>
										    	</li>
										    	<li class="nav-item ">
										    	<a class="nav-link active" data-toggle="tab"
										    	onClick={()=>{
										    		this.props.setGiveMonthly()
										    	}}
										    	id="recurring">
										    	Give Monthly
										    	</a>
										    	</li>
										    	</ul>

<div class="package-wrap package-inner">
										    	{this.state.options}
</div>
										    </div>

										    <div class="share_story row">

										    	<div class="col-12 col-md-6">
											    	<span>Share this story</span>
												    <ul>
												    	<li><a href="#" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
												    	<li><a href="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
												    	<li><a href="#" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
												    </ul>
												</div>

												<div class="col-12 col-md-6">
												    <div class="donate-btn ml-auto" style={{position:"absolute",bottom:"0px"}}>
												    	<a href="../template_809/#" data-dismiss="modal" class="btn btn-primary"  onClick={()=>{this.props.scrollHandler('form_i')}}>Donate</a>
												    </div>   
												</div>
										    </div>
									    </div>
								    </div>
							    </div>
						    </div>
			    		</div>
		    		</div>
		    	</div>
		    </div>


		);
	}
}
