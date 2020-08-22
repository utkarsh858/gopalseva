import React,{Component} from 'react';





// requires follwing props 
// id      for modal id
// imgsrc  for source for image
// content for model content

 export default class StoryModal extends Component{

	

	


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
									    	<img class="d-none d-md-block" width="400px" height="400px" src={this.props.imgsrc} alt="Oh! Krishna this could not be found, but is was Story desciptor."></img>
									    	<img class= "d-md-none"src={this.props.imgsrc} width="300px" height="300px" alt="Oh! Krishna this could not be found, but is was Story desciptor."></img>
									    </div>
								    </div>
								    <div class="col-md-7">
									    <div class="modal-story-body-txt d-flex justify-content-between">
										    <div class="modal-story-con modal-frame">
										    	{this.props.content}
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
												    <div class="donate-btn ml-auto">
												    	<a href="../template_809/#" data-dismiss="modal" class="btn btn-primary" onClick={()=>{this.props.scrollHandler('form_i')}}>Donate</a>
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
