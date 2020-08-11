import React,{Component} from 'react';





// requires follwing props 
// id      for modal id
// imgsrc  for source for image
// content for model content

 export default class StoryModal extends Component{

	constructor(props){
    	super(props)
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
									    	<img src={this.props.imgsrc} alt="Oh! Krishna Image could not be found, but is was Story desciptor."></img>
									    </div>
								    </div>
								    <div class="col-md-7">
									    <div class="modal-story-body-txt d-flex justify-content-between">
										    <div class="modal-story-con">
										    	{this.props.content}
										    </div>

										    <div class="share_story">
										    	<span>Share this story</span>
											    <ul>
											    	<li><a href="#" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
											    	<li><a href="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
											    	<li><a href="#" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
											    </ul>

											    <div class="donate-btn ml-auto">
											    	<a href="../template_809/#" data-dismiss="modal" class="btn btn-primary" onClick={()=>{this.scrollTo('our-achievements-inner')}}>Donate</a>
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
