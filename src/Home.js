import React,{Component} from 'react';
 import  {Link as Direct} from 'react-router-dom';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './css/bootstrap.min.css';
import './css/jetpack.css';
import './css/style.min_iskcon.css';
import './css/responsive.min.css';
import './css/style_givelify_orig.css';
import './style.php';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


/*this must be last imported CSS else there will be problems in during runtime*/
import './css/style.css';
import './css/App.css';


// import next_page from './donation.js';



// import ButtonAppBar from './NavBarHK.js';

import imgUrl from './img/radha1.jpg';
import logo from './img/logo_nav.jpeg';


import debkiimg from  './img/sitarama.jpg';
import utsav1 from "./img/utsav_vigrah_1.jpeg";
import utsav2 from "./img/utsav_vigrah_2.jpeg";




// this file contains all the code for the stories and carousel, that we need
// here in this file we will refernce that code as per our requirements
import StoryModal from './Story.js' ;


// const imgUrl = "http://iskconfoodrelief.com/wp-content/uploads/2020/04/Distribution-Team-1.jpg";


class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      give_flag : 0,
      array_num : 0,
      amount:"",
      isCustom:"false",
      give_once_links : [
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.payumoney.com/react/app/merchant/#/pay/merchant/E3C27F8A2FC2FCF18EC20F91BC1A6CC7?param=7115583",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
"https://www.google.com",
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
      smooth: 'easeInOutQuart',
      offset : -50,
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

   window.localStorage.setItem('amount',this.state.amount)
   window.localStorage.setItem('isCustom',this.state.isCustom)
   // window.location.href="/donate"
  }

  render(){
    var customDonate;
    if(this.state.give_flag==0)
        customDonate = (
                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item">
                                        <span>Custom</span>
                               
                                        </li>
                                        <li class="list-group-item">How much are you going to give today?</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                array_num:8,
                                                amount:"",
                                                isCustom:"true",
                                            })



                                        }}class="custom-control custom-radio">
                                        <input type="radio" id="custom_amount_onetime" name="purpose_of_donation" class="custom-control-input" value="custom"/>
                                        <label class="custom-control-label" for="custom_amount_onetime"></label>
                                        </div>
                                        </li>
                                        </ul>)
    else 
        customDonate = (<div></div>)

  	const responsive = {
	  superLargeDesktop: {
	    // the naming can be any, depends on you.
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5,
        partialVisibilityGutter: 40
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 3,
        partialVisibilityGutter: 10
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2,
        partialVisibilityGutter: 30
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1,
        partialVisibilityGutter: 30
	  }
	};

	
  return (

    <div className="home" >


    {/*As of now we don't possess any additional items to be added as menu so I am removing the menu option, your servant*/}
    {
    <div class="header fixed-bottom">
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="/"><img src={logo} width="150px" height="80px" alt="Gopal Seva Logo"/></a>

            {/*
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
            */}
            {/*
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            */}
                <div class="justify-content-end" >    
                    <div class="donate-btn">
                        <button onClick={() => { this.scrollTo('form_i') }} class="btn btn-primary">
                            Donate
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    </div>
    }

    

    <div class="banner-sec" >
        <div class="banner-info">
            <div class="banner-info-inner">
                <h2>Food For Life Program in Bahadurgarh</h2>
            </div>
        </div>
    </div>



    <section class="container-mk " id="cause_details" >


        <div class="our-achievements" id="our-achievements-inner">
            
            <div class="container-mk2">


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


                    <div class="col-md-7" id="form_i" >
                        <div class="package-wrap package-inner">
                            
                            
                                <input type="hidden" id="payment_mode" value="onetime"/>
                                

                                <ul class="nav nav-pills nav-justified " role="tablist">
                                    <li class="nav-item ">
                                        <a class="nav-link active " data-toggle="tab" 
                                        onClick={()=>{
                                        this.setState({
                                            give_flag:0,
                                        })
                                        }}
                                         id="onetime">
                                            Give Once
                                        </a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link " data-toggle="tab"
                                        onClick={()=>{
                                            this.setState({
                                                give_flag : 1,
                                            })
                                        }}
                                        id="recurring">
                                            Give Monthly
                                        </a>
                                    </li>
                                </ul>


                                <div class="tab-content">
                                    <div id="tab-1" class="tab-pane give_once" style={{display: "block"}}>


                                        <ul class="list-group list-group-horizontal" 
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>800</span></li>
                                        <li class="list-group-item">Support Meals for 10 children</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                array_num:0,
                                                amount:"800",
                                                isCustom:"false",
                                            })
                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="purpose_of_donation" class="custom-control-input" value="800"/>
                                        <label class="custom-control-label" for="customRadio1"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>1000</span></li>
                                        <li class="list-group-item">Support livelihood for 1 person with disability</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                                                                    this.setState({
                                                array_num:1,
                                                amount:"1000",
                                                isCustom:"false",
                                            })

                                        }}class="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="purpose_of_donation" class="custom-control-input" value="1000"/>
                                        <label class="custom-control-label" for="customRadio2"></label>
                                        </div>
                                        </li>
                                        </ul>



                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>1500</span></li>
                                        <li class="list-group-item">Support meals for 20 children</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                array_num:2,
                                                amount:"1500",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio3" name="purpose_of_donation" class="custom-control-input" value="1500"/>
                                        <label class="custom-control-label" for="customRadio3"></label>
                                        </div>
                                        </li>
                                        </ul>



                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fa fa-rupee-sign" aria-hidden="true"></i> <span>2000</span></li>
                                        <li class="list-group-item">Support livelihood for 2 people with disability</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                array_num:3,
                                                amount:"2000",
                                                isCustom:"false",
                                            })


                                    }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio4" name="purpose_of_donation" class="custom-control-input" value="2000"/>
                                        <label class="custom-control-label" for="customRadio4"></label>
                                        </div>
                                        </li>
                                        </ul>




                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>2500</span></li>
                                        <li class="list-group-item">Support  classroom training for 1 visually impaired</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                array_num:4,
                                                amount:"2500",
                                                isCustom:"false",
                                            })



                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio5" name="purpose_of_donation" class="custom-control-input" value="2500"/>
                                        <label class="custom-control-label" for="customRadio5"></label>
                                        </div>
                                        </li>
                                        </ul>




                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>3500</span></li>
                                        <li class="list-group-item">Support 3 sight restoring surgeries </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                array_num:5,
                                                amount:"3500",
                                                isCustom:"false",
                                            })

               
                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio6" name="purpose_of_donation" class="custom-control-input" value="3500"/>
                                        <label class="custom-control-label" for="customRadio6"></label>
                                        </div>
                                        </li>
                                        </ul>




                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>5000</span></li>
                                        <li class="list-group-item">Support classroom training for a 2 visually impaired children</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                array_num:6,
                                                amount:"5000",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio7" name="purpose_of_donation" class="custom-control-input" value="5000"/>
                                        <label class="custom-control-label" for="customRadio7"></label>
                                        </div>
                                        </li>
                                        </ul>




                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item"><i class="fas fa-rupee-sign" aria-hidden="true"></i> <span>6500</span></li>
                                        <li class="list-group-item">Support 5 sight restoring surgeries</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                array_num:7,
                                                amount:"6500",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio8" name="purpose_of_donation" class="custom-control-input" value="6500"/>
                                        <label class="custom-control-label" for="customRadio8"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        {customDonate}

                                        

                                    </div>

                                    <div class="package-proceed">
                                        <Direct to="/donate"><button 
                                        onClick={this.proceedHandler}
                                        id="next_page" value="Proceed" class="btn btn-warning btn-lg">Proceed</button>
                                        </Direct>
                                    </div>

                                </div>

                            </div>

                        
                    </div>
                </div>
            </div>
        </div>

        </div>
    
    </section>


      
    <section class="container-fluid" id="about_details">
        <div class="about-sec">
            <div class="container">
    
    
    <div class="about-sec-info">
    <h3 class="clear-spaces add-bottom-space">About GopalSeva</h3>
    <p>GopalSeva is an international organisation that works with partners in more than 30 countries to eliminate avoidable hunger, and fight for the rights and needs of people with disability.</p>
    </div>
    <div class="about-sec-info">
    <h3 class="clear-spaces add-bottom-space">In India since 1970</h3>
    <p>GopalSeva' work in India has enabled thousands of people to lead lives of independence and dignity. We have been working with local partners to strengthen organisations and communities, and have supported the treatment of millions of people with eye disorders. We have educated, counseled, trained and rehabilitated people who are visually impaired or blind, and helped extend the reach of eye services to the least served areas of India.</p>
    </div>
    <div class="about-video">
    <center>
    <a href="../template_809/#">
    <iframe width="80%" height="500" src="https://www.youtube.com/embed/nGS9ibpp2_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </a>
    </center>
    </div>
    </div>
    </div>

    </section>

    <section class="container-mk">


    <div class="our-value">
        <div class="container-mk2">
        <div class="section-title-1">
            <h2 class="clear-spaces">Our Values</h2>
            <div class="section-title-1-divider"></div>
        </div>
        <div class="our-value-items">
        <div class="row">
        <div class="col-12 col-md-4 ">
            <div class="our-value-item">
                <h3>Protecting Stomarch with hunger</h3>
                <p>Blindness is an important cause and the effect of poverty. We work with poor and marginalised communities in developing countries. At Sightsavers, we believe that people should not go blind unnecessarily. We prevent, treat and cure avoidable blindness and promote eye health.</p>
                </div>
        </div>
        <div class="col-12 col-md-4 ">
            <div class="our-value-item">
                <h3>Equal Food</h3>
                <p>People with empty stomach should be able to develop their potential to the full. We work with disabled people and others to promote equal rights and opportunities. We strengthen organisations and commnities to develop practical and enduring solutions.</p>
            </div>
        </div>
        <div class="col-12 col-md-4 ">
            <div class="our-value-item">
                <h3>Collaboration</h3>
                <p>We achieve much more when we collaborate. We forge alliances and partnerships to ensure a positive and long term impact on people's lives. Our supporters are a key part of the solution. We work together to accomplish our goals.</p>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>

    



    <StoryModal id="debki-story" scrollHandler={this.scrollTo} imgsrc={debkiimg} content={<><h3>Debki's story</h3><p>28-year-old Debki hails from the Bahadurgarh District of Haryana. Debki has orthopedic disability and stays with her parents and three siblings in the Dumka district of Jharkhand.</p><p>Earlier, Debki's father was the sole earning member of the house. He was a daily wage employee and the earnings were not enough for the entire family to sustain themselves. However, after the intervention of Sightsavers in association with Chetna Vikas, Debki received a one-year training in Computer from Vocational Training Institute in Dumka.</p><p>Today, Debki runs a Photo Studio/Printing Centre in her district. She has been a member of Utthan Nishakt Swayam Sahayata Samuha, a Self-Help Group supported by Sightsavers. Besides that, Debki is also pursuing her post-graduation from IGNOU (Indira Gandhi National Open University). "I am really glad to be able to financially support my family. Hopefully, I will take teaching as a profession in the long-run."</p></>}/> 

    <StoryModal id="shobha-story" scrollHandler={this.scrollTo} imgsrc={utsav2} content={<><h3>Shobha's story</h3><h4>A Gleaming Vision</h4><p>65-year-old Shobha is a daily wage labourer and lives with her son in Alipurduar, West Bengal. Thrice a week, Shobha would walk up the hill to collect dry leaves and branches that were used as fuel.</p><p>Shobha was diagnosed with cataract in the eye screening camp organised by Sightsavers in her village under the Rural Eye Health Programme. She was referred to the base hospital and was operated for the cataract-    removal surgery. "Cataract had really affected me in many ways. I could not even do my day-to-day work before the surgery. However, since I can see clearly now, I wait to go back to my normal life," says Shobha.</p></>}/> 

    <StoryModal id="alia-story" scrollHandler={this.scrollTo} imgsrc={utsav1} content={<><h3>Aliya's story</h3><h4>Six-year old Aliya is a native of Hazaribagh, Jharkhand. She has low vision since birth.</h4><p>Aliya was enrolled in a nursery school where she had become irregular due to the non-availability of resources to help her through in studies. While visiting a doctor, it was found that due to the damage in the cornea of her eye, Aliya's vision could not get any better.</p><p>Sightsavers in association with Sarva Shiksha Abhiyan had distributed Low Vision Devices to children with visual impairment under its Inclusive Education Programme in Jharkhand and providentially, Aliya was a part of it. With the help of these devices, Aliya was finally able to read like any other child who could.</p><p>Aliya is now regular at school and enjoys her studies like never before. Her parents feel grateful towards Sightsavers' team in helping out their daughter.</p></>}/> 
    
    
    
    
    



<div class="people-support" >
    <div class="container">

        <div class="section-title-1">
            <h2>People we have supported</h2>
        </div>

        {/*<div class="people-support-items " style={{ paddingBottom: '30px',paddingRight: '60px',paddingLeft: '60px', position: 'relative' }}>

    */}

        
        <div class="people-support-items">

        
        {/* To understant the code of this carosel please vistit the below link : https://www.npmjs.com/package/react-multi-carousel*/}
        <Carousel
          arrows = {true}
          swipeable={true}
          draggable={true}
		  showDots={true} renderDotsOutside={true}
		  responsive={responsive}
		  ssr={true} // means to render carousel on server-side.
		  infinite={true}
		  autoPlay={this.props.deviceType !== "mobile" ? true : false}
		  autoPlaySpeed={2500}
		  
		  
		>
		    <div>
		  		<div class="people-support-item">
                    <div class="people-support-item-inner">
                        <img src={debkiimg} width="200px" height="200px" alt="Hari Hari IMG 1"/>
                        <h5>Stories / Social inclusion</h5>
                        <h3>First Story</h3>
                        <p>Hare krishna Please accept my humble obeisances</p>
                        <div class="btn-row">
                            <a href="../template_809/#"  data-toggle="modal" data-target="#debki-story">Read story</a>
                        </div>
                    </div>
                </div>
		    </div>


		    <div>
		    	<div class=" people-support-item">
                    <div class="people-support-item-inner">
                        <img src={utsav2} width="200px" height="200px" alt="Krishna IMG 2"/>
                        <h5>Stories/ Eye health</h5>
                        <h3>Second Story</h3>
                        <p>Hare krishna Please accept my humble obeisances</p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#shobha-story">
                                Read story
                            </a>
                        </div>
                    </div>
                </div>
		    </div>
		    <div>
		    	<div class=" people-support-item">
                    <div class="people-support-item-inner">
                        <img src={utsav1} width="200px" height="200px" alt="Gauranga IMG 3"/>
                        <h5>Stories/Inclusive Education</h5>
                        <h3>Third Story</h3>
                        <p>Hare krishna Please accept my humble obeisances</p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#alia-story">
                                Read story
                            </a>
                        </div>
                    </div>
                </div>
		    </div>
		    <div>
		    	<div class="people-support-item">
                    <div class="people-support-item-inner">
                        <img src={utsav1} width="200px" height="200px" alt="NityaNanda IMG 4"/>
                        <h5>Stories/Inclusive Education</h5>
                        <h3>Fourth Story</h3>
                        <p>Hare krishna Please accept my humble obeisances</p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#alia-story">
                                Read story
                            </a>
                        </div>
                    </div>
                </div>
		    </div>
		  
		</Carousel>

            
        </div>


    </div>
</div>


</section>



    


    {/*<ButtonAppBar />*/}


























</div>


);}
}

export default Home;
