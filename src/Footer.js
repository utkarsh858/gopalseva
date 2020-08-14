import React,{Component} from 'react';


import imgUrl from './img/radha1.jpg';


export default class Footer extends Component {
render(){
	return(
		<div class="no-pointer-events">
<div class="footer-filler"></div>
<div class="footer" >
<div ><div style={{position:"absolute",top:0,zIndex:-1}}>

                  
                  <section style={{zIndex:-1}}class="l-section wpb_row height_large color_secondary with_img with_overlay with_shape parallax_fixed" id="contact"><div class="l-section-img loaded" style={{zIndex:-1, backgroundImage: "url(" + imgUrl + ")" }} data-img-width="1280" data-img-height="754"></div><div class="l-section-overlay" style={{zIndex:-1, background: "rgba(0,0,0,0.65)"}}></div>
                      
                      <div ><div ><div class="animate_afb animate_start"><div><div><div ><div><p>For non-Indian passport holders: Due to financial rules of the government, non-Indian passport holders can donate only through the FCRA accounts. Please use the contact form below if you need any assistace in this connection.

</p><h2 style={{ textAlign: "center" }} class="highlight highlight_primary">CONTACT US </h2>
                      </div></div><div class="w-separator size_medium"></div><div class="g-cols wpb_row  type_default valign_top vc_inner"><div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_text_column"><div class="wpb_wrapper"><h3>Registered Head Office: ISKCON, Hare Krishna Land, Juhu, Mumbai.</h3>
                      </div></div><div class="w-separator size_large"></div><div class="w-iconbox iconpos_left style_circle color_primary align_left no_text"><div class="w-iconbox-icon" style={{ fontSize: "120%" }}><i class="fa fa-phone"></i></div><div class="w-iconbox-meta"><h3 class="w-iconbox-title">+91 9654 789 832</h3></div></div><div class="w-separator size_small"></div><div class="w-iconbox iconpos_left style_circle color_primary align_left no_text"><div class="w-iconbox-icon" style={{ fontSize: "120%" }}><i class="far fa-envelope"></i></div><div class="w-iconbox-meta"><h3 class="w-iconbox-title">yudhistir@iskcon.org</h3></div></div></div></div></div><div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="w-form  layout_ver for_cform us_form_1">
                          <div>
                          <form style={{zIndex: -1}} action="https://us-central1-gopal-seva.cloudfunctions.net/api/query" method="post"  enctype='application/json'>
                                          <div class="form-row">
                                              <div class="col-md-8">
                                                  <label for="validationCustom01">Name</label>
                                                  <input style={{ backgroundColor: "whitesmoke" }} type="text" class="form-control" name="name" placeholder="Name"/>
                                                     
                                                  <div class="valid-feedback">
                                                      Looks good!
      </div>
                                              </div>

                                              <div class="col-md-8">
                                                  <label for="validationCustomUsername">Email</label>
                                                  <div class="input-group">
                                                      <div class="input-group-prepend">
                                                          <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                      </div>

                                                      <input style={{ backgroundColor: "whitesmoke" }} type="email" class="form-control" name="email" placeholder="Email" aria-describedby="inputGroupPrepend" />
                                                       

                                                     
                                                  </div>
                                              </div>

                                              <div class="col-md-8">
                                                  <label for="validationCustomMessage">Message</label>

                                                      <input style={{ backgroundColor: "whitesmoke" }} type="text" class="form-control" name="message" placeholder="Message"/>
                                                        
                                              </div>
                                          </div>

                            
                             
                              
                            
                                  <div class="donate-btn">
                                      <button class="btn btn-primary" aria-label="Send Message" type="submit">

                                          <span >Send Message</span>
                                      </button>
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