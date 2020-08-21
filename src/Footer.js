import React,{Component} from 'react';


import imgUrl from './img/radha1.jpg';


export default class Footer extends Component {
render(){
	return(
		  <div class="no-pointer-events">
          <div class="footer-filler" ></div>
          <div class="footer" >
          <div >
            <div style={{position:"absolute",bottom:0,zIndex:-1,height:"100%",overflowY:"auto"}}>

                  
                  <section style={{zIndex:-1,margin:0,height:"100%"}} class="l-section wpb_row height_large color_secondary with_img with_overlay with_shape parallax_fixed" id="contact">


                      <div class="l-section-img loaded" style={{zIndex:-1, backgroundImage: "url(" + imgUrl + ")" }} data-img-width="1280" data-img-height="754">
                      </div>

                      <div class="l-section-overlay" style={{position:"absolute",top:0,height:"100%", zIndex:-1, background: "rgba(0,0,0,0.65)"}}></div>
                      
                      <div >
                          <div >

                              <div class="animate_afb animate_start">
                                  <div>
                                      <div>
                                          <div >
                                              <div>
                                                  <p style={{margin:0,fontSize:"1em"}}>For non-Indian passport holders: Due to financial rules of the government, non-Indian passport holders can donate only through the FCRA accounts. Please use the contact form below if you need any assistace in this connection.

                                                  </p>
                                                      <div class="w-separator size_small">
                                                      </div>
                                                  <h2 style={{ textAlign: "center", fontSize:"1.5em",padding:10 }} >
                                                      CONTACT US 
                                                  </h2>
                                              </div>
                                          </div>

                                          <div class="w-separator size_small">
                                          </div>

                                          <div class="g-cols wpb_row  type_default valign_top vc_inner">
                                              <div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start">
                                                  <div class="vc_column-inner">
                                                      <div class="wpb_wrapper">
                                                          <div class="wpb_text_column">
                                                              <div class="wpb_wrapper">
                                                                  <h3 style={{ fontSize: "1.2em",textAlign:"left" }}>Registered Head Office: ISKCON, Hare Krishna Land, Juhu, Mumbai.</h3>
                                                              </div>
                                                          </div>

                                                          <div class="w-separator size_small"></div>

                                                          <div class="w-iconbox iconpos_left style_circle color_primary align_left no_text">
                                                              <div class="w-iconbox-icon" style={{ fontSize: "1em" }}>
                                                                  <i class="fa fa-phone"></i>
                                                              </div>

                                                              <div class="w-iconbox-meta">
                                                                  <h3 class="w-iconbox-title" style={{ fontSize: "1em" }}>+91 9654 789 832</h3>
                                                              </div>
                                                          </div>


                                                          <div class="w-iconbox iconpos_left style_circle color_primary align_left no_text">
                                                              <div class="w-iconbox-icon" style={{ fontSize: "1em" }}>
                                                                  <i class="far fa-envelope"></i>
                                                              </div>

                                                              <div class="w-iconbox-meta">
                                                                  <h3 class="w-iconbox-title" style={{ fontSize: "1em" }}>yudhistir@iskcon.org</h3>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>

                                              <div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start">
                                                  <div class="vc_column-inner">
                                                      <div class="wpb_wrapper">
                                                          <div class="w-form  layout_ver for_cform us_form_1">
                          <div>
                          <form style={{zIndex: -1}} action="https://us-central1-gopal-seva.cloudfunctions.net/api/query" method="post"  enctype='application/json'>
                                          <div class="form-row">
                                              <div class="col-md-8">
                                                  <label for="validationCustom01" style={{float:"left"}}>Name</label>
                                                  <input style={{ backgroundColor: "whitesmoke" }} type="text" class="form-control" name="name" placeholder="Name"/>
                                                     
                                                  <div class="valid-feedback">
                                                      Looks good!
      </div>
                                              </div>

                                              <div class="col-md-8">
                                                  <label for="validationCustomUsername" style={{float:"left"}}>Email</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                      </div>

                                                      <input style={{ backgroundColor: "whitesmoke" }} type="email" class="form-control" name="email" placeholder="Email" aria-describedby="inputGroupPrepend" />
                                                       

                                                     
                                                  </div>
                                              </div>

                                              <div class="col-md-8">
                                                  <label for="validationCustomMessage" style={{float:"left"}}>Message</label>

                                                      <input style={{ backgroundColor: "whitesmoke" }} type="text" class="form-control" name="message" placeholder="Message"/>
                                                        
                                              </div>

                            
                             
                                  <div class="donate-btn" style={{width:300,height:40,padding:0,marginTop:20, textAlign:"center"}}>
                                      <button class="btn btn-primary" aria-label="Send Message" type="submit" 
                                      >

                                          <span >Send Message</span>
                                      </button>
                                  </div>
                                          </div>
                                </form>
                                  </div>
                          

                      </div></div></div></div></div></div></div></div></div></div>

                  </section>


              </div>
              </div>
</div>
</div>
	)
}
}