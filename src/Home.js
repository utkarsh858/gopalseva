import React,{Component} from 'react';
import './App.css';
import './bootstrap.min.css';
import './style.css';

import './jetpack.css';
import './style.min_iskcon.css';
import './responsive.min.css';

import './style_givelify_orig.css';
import './style.php';
// import next_page from './donation.js';

import imgUrl from './radha1.jpg';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// const imgUrl = "http://iskconfoodrelief.com/wp-content/uploads/2020/04/Distribution-Team-1.jpg";


class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      give_flag : 0,
      array_num : 0,
      give_once_links : [
      "1.com",
      "2.com",
      "3.com",
      "4.com",
      "5.com",
      "6.com",
      "7.com",
      "8.com",
      "9.com",
      "10.com",
      "11.com",
      ],
      give_monthly_links : [
      "13.com",
      "23.com",
      "33.com",
      "43.com",
      "53.com",
      "63.com",
      "73.com",
      "83.com",
      "93.com",
      "10.com",
      "11.com",
      ],
    }

  }
scrollTo = (target) =>{
      scroller.scrollTo(target, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
}
  proceedHandler = ()=>{
   if(this.state.give_flag==0){
    // window.location.href=this.state.give_once_links[this.state.array_num]
   window.localStorage.setItem('link',this.state.give_once_links[this.state.array_num])
   }else{
    // window.location.href=this.state.give_monthly_links[this.state.array_num]
   window.localStorage.setItem('link',this.state.give_monthly_links[this.state.array_num])
   } 
   window.location.href="/donate"
  }

  render(){
  return (

   
      

    <div className="Home">


      

    <div class="header fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <a class="navbar-brand" href="/"><img src="https://drive.google.com/file/d/1zrpkz0mi9xlHMKEGb6FU4HXpmQPfgxrg/view?usp=sharing" alt=""/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <div class="donate-btn">
    <button onClick={() => { this.scrollTo('our-achievements-inner') }} class="btn btn-primary">Donate</button>
    </div>
    </div>
    </div>
    </nav>
    </div>
    <div class="banner-sec">
    <div class="banner-info">
    <div class="banner-info-inner">
    <h2>Food For Life Program in Bahadurgarh</h2>
    </div>
    </div>
    </div>

    <section class="container-fluid donate-proceed cause_details" id="cause_details">
    <div class="our-achievements" id="our-achievements-inner">
    <div class="container">
    <div class="our-achievements-inner">
    <div class="row">
    <div class="col-md-5">
    <h2>Our Achievements</h2>
    <div class="our-achievement-items">
    <div class="our-achievement-item">
    <div class="our-achievement-item-info">
    <h4>55 million</h4>
    <p>Meals distributed world wide since 1966</p>
    </div>
    </div>
    <div class="our-achievement-item">
    <div class="our-achievement-item-info">
    <h4>36.4 million</h4>
    <p>Meals provided only in India</p>
    </div>
    </div>
    <div class="our-achievement-item">
    <div class="our-achievement-item-info">
    <h4>5 Million</h4>
    <p>Meals in Bahadurgarh</p>
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-7" id="form_i">
    <div class="package-wrap">
    <div class="package-inner">
    <input type="hidden" id="payment_mode" value="onetime"/>
    <ul class="nav nav-pills nav-justified" role="tablist">
    <li class="nav-item">


    <a class="nav-link active" data-toggle="tab" 
    onClick={()=>{this.state.give_flag = 0}}
     id="onetime">Give Once</a>
    
    </li>
    <li class="nav-item">
    <a class="nav-link" data-toggle="tab"
    onClick={()=>{this.state.give_flag = 1}}

    id="recurring">Give Monthly</a>
    </li>
    </ul>


    <div class="tab-content">
    <div id="tab-1" class="tab-pane give_once" style={{display: "block"}}>


    <ul class="list-group list-group-horizontal" 
    onClick={()=>{this.state.array_num = 0}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>800</span></li>
    <li class="list-group-item">Support Meals for 10 children</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="purpose_of_donation" class="custom-control-input" value="800"/>
    <label class="custom-control-label" for="customRadio1"></label>
    </div>
    </li>
    </ul>


    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 1}}

    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>1000</span></li>
    <li class="list-group-item">Support livelihood for 1 person with disability</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="purpose_of_donation" class="custom-control-input" value="1000"/>
    <label class="custom-control-label" for="customRadio2"></label>
    </div>
    </li>
    </ul>



    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 2}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>1500</span></li>
    <li class="list-group-item">Support meals for 20 children</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio3" name="purpose_of_donation" class="custom-control-input" value="1500"/>
    <label class="custom-control-label" for="customRadio3"></label>
    </div>
    </li>
    </ul>



    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 3}}
    >
    <li class="list-group-item"><i class="fa fa-rupee-sign" aria-hidden="true"></i> <span>2000</span></li>
    <li class="list-group-item">Support livelihood for 2 people with disability</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio4" name="purpose_of_donation" class="custom-control-input" value="2000"/>
    <label class="custom-control-label" for="customRadio4"></label>
    </div>
    </li>
    </ul>




    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 4}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>2500</span></li>
    <li class="list-group-item">Support  classroom training for 1 visually impaired</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio5" name="purpose_of_donation" class="custom-control-input" value="2500"/>
    <label class="custom-control-label" for="customRadio5"></label>
    </div>
    </li>
    </ul>




    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 5}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>3500</span></li>
    <li class="list-group-item">Support 3 sight restoring surgeries </li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio6" name="purpose_of_donation" class="custom-control-input" value="3500"/>
    <label class="custom-control-label" for="customRadio6"></label>
    </div>
    </li>
    </ul>




    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 6}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>5000</span></li>
    <li class="list-group-item">Support classroom training for a 2 visually impaired children</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio7" name="purpose_of_donation" class="custom-control-input" value="5000"/>
    <label class="custom-control-label" for="customRadio7"></label>
    </div>
    </li>
    </ul>




    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 7}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>6500</span></li>
    <li class="list-group-item">Support 5 sight restoring surgeries</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio8" name="purpose_of_donation" class="custom-control-input" value="6500"/>
    <label class="custom-control-label" for="customRadio8"></label>
    </div>
    </li>
    </ul>




    <ul class="list-group list-group-horizontal"
    onClick={()=>{this.state.array_num = 8}}
    >
    <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i>
    <span></span><input type="text" id="custom_amount_ot_value" name=""/> </li>
    <li class="list-group-item">How much are you going to give today?</li>
    <li class="list-group-item">
    <div class="custom-control custom-radio">
    <input type="radio" id="custom_amount_onetime" name="purpose_of_donation" class="custom-control-input" value="custom"/>
    <label class="custom-control-label" for="custom_amount_onetime"></label>
    </div>
    </li>
    </ul>



    </div>

    <div class="package-proceed">
    <button 
    onClick={this.proceedHandler}
    id="next_page" value="Proceed" class="btn btn-warning btn-lg">Proceed</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>


      {/* <section class="container" id="about_details">
        <div class="about-sec">
      <div class="container"> */}
      <section class="container-fluid donate-proceed cause_details" id="cause_details">
      <div class="our-achievements" id="our-achievements-inner">
      <div class="container">
    {/* <div class="our-achievements-inner"> */}
    <div class="about-sec-inner">
    <div class="about-sec-info">
    <h3>About GopalSeva</h3>
    <p>GopalSeva is an international organisation that works with partners in more than 30 countries to eliminate avoidable hunger, and fight for the rights and needs of people with disability.</p>
    </div>
    <div class="about-sec-info">
    <h3>In India since 1970</h3>
    <p>GopalSeva' work in India has enabled thousands of people to lead lives of independence and dignity. We have been working with local partners to strengthen organisations and communities, and have supported the treatment of millions of people with eye disorders. We have educated, counseled, trained and rehabilitated people who are visually impaired or blind, and helped extend the reach of eye services to the least served areas of India.</p>
    </div>
    <div class="about-video">
    <a href="../template_809/#">
    <iframe width="80%" height="500" src="https://www.youtube.com/embed/nGS9ibpp2_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </a>
    </div>
    </div>
    </div>
    </div>

    <div class="our-value">
    <div class="container">
    <div class="section-title-1">
    <div class="our-value-it">
    <h2>Our Values</h2>
    </div>

    <div class="section-title-1-divider"></div>
    </div>
    <div class="our-value-items">
    <div class="row">
    <div class="col-md-4 our-value-item">
    <h3>Protecting Stomarch with hunger</h3>
    <p>Blindness is an important cause and the effect of poverty. We work with poor and marginalised communities in developing countries. At Sightsavers, we believe that people should not go blind unnecessarily. We prevent, treat and cure avoidable blindness and promote eye health.</p>
    </div>
    <div class="col-md-4 our-value-item">
    <h3>Equal Food</h3>
    <p>People with empty stomach should be able to develop their potential to the full. We work with disabled people and others to promote equal rights and opportunities. We strengthen organisations and commnities to develop practical and enduring solutions.</p>
    </div>
    <div class="col-md-4 our-value-item">
    <h3>Collaboration</h3>
    <p>We achieve much more when we collaborate. We forge alliances and partnerships to ensure a positive and long term impact on people's lives. Our supporters are a key part of the solution. We work together to accomplish our goals.</p>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div class="modal story_modal" id="debki-story">
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
    <img src="debki.jpg" alt="Hari Hari"></img>
    </div>
    </div>
    <div class="col-md-7">
    <div class="modal-story-body-txt d-flex justify-content-between">
    <div class="modal-story-con">
    <h3>Debki's story</h3>
    <p>28-year-old Debki hails from the Bahadurgarh District of Haryana. Debki has orthopedic disability and stays with her parents and three siblings in the Dumka district of Jharkhand.</p>

    <p>Earlier, Debki's father was the sole earning member of the house. He was a daily wage employee and the earnings were not enough for the entire family to sustain themselves. However, after the intervention of Sightsavers in association with Chetna Vikas, Debki received a one-year training in Computer from Vocational Training Institute in Dumka.</p>

    <p>Today, Debki runs a Photo Studio/Printing Centre in her district. She has been a member of Utthan Nishakt Swayam Sahayata Samuha, a Self-Help Group supported by Sightsavers. Besides that, Debki is also pursuing her post-graduation from IGNOU (Indira Gandhi National Open University). "I am really glad to be able to financially support my family. Hopefully, I will take teaching as a profession in the long-run."</p>

    </div>

    <div class="share_story">
    <span>Share this story</span>
    <ul>
    <li><a href="https://www.facebook.com/SightsaversIndia/" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
    <li><a href="https://twitter.com/sightsaversIN" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/sightsavers-india-16395093/" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
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

    <div class="modal story_modal" id="shobha-story">
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
    <img src="debki.jpg" alt=""></img>
    </div>
    </div>
    <div class="col-md-7">
    <div class="modal-story-body-txt d-flex justify-content-between">
    <div class="modal-story-con">
    <h3>Shobha's story</h3>
    <h4>A Gleaming Vision</h4>
    <p>65-year-old Shobha is a daily wage labourer and lives with her son in Alipurduar, West Bengal. Thrice a week, Shobha would walk up the hill to collect dry leaves and branches that were used as fuel.</p>
    <p>Shobha was diagnosed with cataract in the eye screening camp organised by Sightsavers in her village under the Rural Eye Health Programme. She was referred to the base hospital and was operated for the cataract-
    removal surgery. "Cataract had really affected me in many ways. I could not even do my day-to-day work before the surgery. However, since I can see clearly now, I wait to go back to my normal life," says Shobha.
    </p>
    </div>

    <div class="share_story">
    <span>Share this story</span>
    <ul>
    <li><a href="https://www.facebook.com/SightsaversIndia/" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a></li>
    <li><a href="https://twitter.com/sightsaversIN" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/sightsavers-india-16395093/" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
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
    <div class="modal story_modal" id="alia-story">
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
    <img src="Food_for_life.jpg" alt=""/>
    </div>
    </div>
    <div class="col-md-7 d-flex">
    <div class="modal-story-body-txt d-flex justify-content-between">
    <div class="modal-story-con">
    <h3>Aliya's story</h3>
    <h4>Six-year old Aliya is a native of Hazaribagh, Jharkhand. She has low vision since birth.</h4>
    <p>Aliya was enrolled in a nursery school where she had become irregular due to the non-availability of resources to help her through in studies. While visiting a doctor, it was found that due to the damage in the cornea of her eye, Aliya's vision could not get any better.</p>
    <p>Sightsavers in association with Sarva Shiksha Abhiyan had distributed Low Vision Devices to children with visual impairment under its Inclusive Education Programme in Jharkhand and providentially, Aliya was a part of it. With the help of these devices, Aliya was finally able to read like any other child who could.</p>
    <p>Aliya is now regular at school and enjoys her studies like never before. Her parents feel grateful towards Sightsavers' team in helping out their daughter.</p>
    </div>

    <div class="share_story">
    <span>Share this story</span>
    <ul>
    <li><a href="https://www.facebook.com/SightsaversIndia/" target="_blank"><i class="fa fa-facebook-f" aria-hidden="true"></i></a></li>
    <li><a href="https://twitter.com/sightsaversIN" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
    <li><a href="https://www.linkedin.com/in/sightsavers-india-16395093/" target="_blank"><i class="fa fa-linkedin-in" aria-hidden="true"></i></a></li>
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
    {/* <div class="people-support">
    <div class="container">
  <div class="section-title-1"> */}
{/* <section class="container-fluid donate-proceed cause_details" id="cause_details"> */}
<div class="our-achievements" id="our-achievements-inner">
<div class="container">
<div class="our-achievements-inner">
<h2>People we have supported</h2>
</div>
<div class="people-support-items">
<div class="row">
<div class="col-md-4 people-support-item">
<div class="people-support-item-inner">
<img src="/debki.jpg" alt="Hari Hari"/>
<h5>Stories / Social inclusion</h5>
<h3>Debki's story</h3>
<p>28-year-old Debki hails from the Dumka District of Jharkhand. Debki has orthopedic disability and stays with her parents and three siblings in the Dumka district of Jharkhand.</p>
<div class="btn-row">
<a href="../template_809/#" data-toggle="modal" data-target="#debki-story">Read story</a>
</div>
</div>
</div>
<div class="col-md-4 people-support-item">
<div class="people-support-item-inner">
<img src="mataji.jpg" alt="Krishna"/>
<h5>Stories/ Eye health</h5>
<h3>Shobha's story</h3>
<p>65-year-old Shobha is a daily wage labourer and lives with her son in Alipurduar, West Bengal.</p>
<div class="btn-row">
<a href="../template_809/#" data-toggle="modal" data-target="#shobha-story">Read story</a>
</div>
</div>
</div>
<div class="col-md-4 people-support-item">
<div class="people-support-item-inner">
<img src="debki.jpg" alt="Gauranga"/>
<h5>Stories/Inclusive Education</h5>
<h3>Aliya's story</h3>
<p>With the help of Low Vision Devices six year old Aliya was finally able to read and regularly attend school in Hazaribagh, Jharkhand.</p>
<div class="btn-row">
<a href="../template_809/#" data-toggle="modal" data-target="#alia-story">Read story</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<div class="twit-banner" >
<div class="container">

<div id="tweets" class="twitter">
<span><a href="savevalues.in" target="_blank" class="social-btn"><i class="fa fa-twitter"> </i></a></span>

<ul class="good_old_twitter_widget"><li>Who is best suited to solve problems in their local community? A recent study from <a href="savevalues.in" class="twitter-user">@SAVE</a> found that one in 10 people sleep empty stomach ...16 hours ago</li></ul>    </div>
</div>

</div>



<footer id="fill" style={{height: 576}}>
<div class="container"><div id="footer" class="footer-content" style={{position: "fixed", left: 0, top: 120}}>

{/* <section id="container"> */}
<section class="l-section wpb_row height_large color_secondary with_img with_overlay with_shape parallax_fixed" id="contact"><div class="l-section-img loaded" style={{ backgroundImage: "url(" + imgUrl + ")"}} data-img-width="1280" data-img-height="576"></div><div class="l-section-overlay" style={{ background: "rgba(0,0,0,0.65)" }}></div><div class="l-section-shape type_custom pos_bottom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100%" fill="currentColor">

</svg></div><div class="l-section-h i-cf"><div class="g-cols vc_row type_default valign_top"><div class="vc_col-sm-12 wpb_column vc_column_container animate_afb animate_start"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_text_column"><div class="wpb_wrapper"><p>For non-Indian passport holders: Due to financial rules of the government, non-Indian passport holders can donate only through the FCRA accounts. Please use the contact form below if you need any assistace in this connection.

</p><h2 style={{ textAlign: "center" }} class="highlight highlight_primary">CONTACT <span class="highlight highlight_primary">US</span></h2>
</div></div><div class="w-separator size_medium"></div><div class="g-cols wpb_row  type_default valign_top vc_inner"><div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="wpb_text_column"><div class="wpb_wrapper"><h3>Registered Head Office: ISKCON, Hare Krishna Land, Juhu, Mumbai.</h3>
</div></div><div class="w-separator size_large"></div><div class="w-iconbox iconpos_left style_circle color_primary align_left no_text"><div class="w-iconbox-icon" style={{ fontSize: "120%" }}><i class="fa fa-phone"></i></div><div class="w-iconbox-meta"><h3 class="w-iconbox-title">+91 9654 789 832</h3></div></div><div class="w-separator size_small"></div><div class="w-iconbox iconpos_left style_circle color_primary align_left no_text"><div class="w-iconbox-icon" style={{ fontSize: "120%" }}><i class="far fa-envelope"></i></div><div class="w-iconbox-meta"><h3 class="w-iconbox-title">yudhistir@iskcon.org</h3></div></div></div></div></div><div class="vc_col-sm-6 wpb_column vc_column_container animate_afb animate_start"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="w-form  layout_ver for_cform us_form_1">
<form class="w-form-h" autocomplete="off" action="http://iskconfoodrelief.com/" method="post">

<div class="w-form-row for_text with_icon cols_2">
<div class="w-form-row-field">
<i class="far fa-user"></i>		<input aria-label="Name" type="text" name="us_form_1_text_1" value="" placeholder="Name" />
</div>
<div class="w-form-row-state">Fill out this field</div>
</div>
<div class="w-form-row for_text required with_icon cols_2">
<div class="w-form-row-field">
<i class="fas fa-at"></i>		<input aria-label="Email" type="text" name="us_form_1_text_2" value="" placeholder="Email *" data-required="true" aria-required="true" />
</div>
<div class="w-form-row-state">Fill out this field</div>
</div>
<div class="w-form-row for_textarea required with_icon">
<div class="w-form-row-field">
<i class="fa fa-pencil"></i>		<textarea aria-label="Message" name="us_form_1_textarea_1" placeholder="Message *" data-required="true" aria-required="true"></textarea>
</div>
<div class="w-form-row-state">Fill out this field</div>
</div>
<div class="w-form-row for_captcha required">
<div class="w-form-row-label">
<span> <span>24 + 11 = ?</span></span>
</div>
<div class="w-form-row-field">
<input type="hidden" name="us_form_1_captcha_1_hash" value="a90322307c32cc0eae0bc5aa02df8d9c" />
<input aria-label="us_form_1_captcha_1" type="text" name="us_form_1_captcha_1" placeholder="" data-required="true" aria-required="true" />
</div>
<div>Enter the equation result to proceed</div>
</div>
<input type="hidden" name="action" value="us_ajax_cform" /><input type="hidden" name="post_id" value="5" /><input type="hidden" name="form_index" value="1" /><div class="w-form-row for_submit align_left">
<div class="donate-btn">
<button class="btn btn-primary"  aria-label="Send Message" type="submit">
{/* <span class="g-preloader type_1"></span> */}
<span >Send Message</span>
</button>
</div>
</div>	</form>
<div class="w-form-message"></div>

</div></div></div></div></div><div class="w-separator size_huge"></div></div></div></div></div></div></section>



{/* </section> */}
<div class="foot-sidebar sc_foot3">

</div>
</div>
</div>
</footer>








</div>

);}
}

export default Home;
