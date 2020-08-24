import React,{Component} from 'react';
 import  {Link as Direct} from 'react-router-dom';
import Appreciation from './Appreciation.js';
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


// import next_page f9rom './donation.js';



// import ButtonAppBar from './NavBarHK.js';

import imgUrl from './img/radha1.jpg';
import logo from './img/logo_nav.jpeg';


import debkiimg from  './img/sitarama.jpg';
import utsav1 from "./img/utsav_vigrah_1.jpeg";
import utsav2 from "./img/utsav_vigrah_2.jpeg";
import temp from './img/mataji.jpg';

import cow1 from './img/cow1.jpeg';
import cow2 from './img/cow2.jpeg';
import vigraha1 from './img/vigraha1.jpeg';
import vigraha2 from './img/vigraha2.jpeg';
import foodforlife1 from './img/foodforlife1.jpeg';
import foodforlife2 from './img/foodforlife2.jpeg';
import bookdis1 from './img/bookdis1.jpeg'
import bookdis2 from './img/bookdis2.jpeg'

import pranab from './img/pranab.jpg'
import devendra from './img/devendra.jpg'
import narendra from './img/narendra.jpg'
// this file contains all the code for the stories and carousel, that we need
// here in this file we will refernce that code as per our requirements
import StoryModal from './Story.js' ;


// const imgUrl = "http://iskconfoodrelief.com/wp-content/uploads/2020/04/Distribution-Team-1.jpg";


class Home extends Component {

  constructor(props){
    super(props)
    this.state={
      give_flag : 1,
      array_num : 0,
      amount:"",
      isCustom:"false",
      give_once_link:"",
      give_monthly_link:"",
      donate_direct:"",
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

        window.localStorage.setItem('link',this.state.give_once_link)
   }else{


        window.localStorage.setItem('link',this.state.give_monthly_link)

   } 

   window.localStorage.setItem('amount',this.state.amount)
   window.localStorage.setItem('isCustom',this.state.isCustom)
   // window.location.href="/donate"
   // if(window.localStorage.getItem('link')!=="") this.setState({donate_direct:"/donate"})
  }

  render(){
    var customDonate;
    if(this.state.give_flag==0)
        customDonate = (
            <React.Fragment>
            <ul class="list-group list-group-horizontal" 
                                        
                                        >
                                        <li class="list-group-item">₹ 1100</li>
                                        <li class="list-group-item">Vigraha-Sevā Bāl-bhoga</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://pmny.in/0IJnwTAZFwVh",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"1100",
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
                                        <li class="list-group-item">₹ 5100</li>
                                        <li class="list-group-item">Vigraha-Sevā Rāj-Bhoga  </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                                                                    this.setState({
                                                
                                                give_once_link:"https://pmny.in/3I4UwS3MRLBi",
                                                give_monthly_link:"",
                                                amount:"5100",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 3100</li>
                                        <li class="list-group-item">Vigraha-Sevā Sandhyā-Bhoga  </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://pmny.in/GIoSGDnwHJF4",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"3100",
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
                                        <li class="list-group-item">₹ 6000</li>
                                        <li class="list-group-item">Prasādam Distribution (200 Plates Khichadi) </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://pmny.in/BIEp1EGjfCHX",
                                                give_monthly_link:"",
                                                amount:"6000",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 9000</li>
                                        <li class="list-group-item">Prasādam Distribution (300 Plates Khichadi) </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://pmny.in/PIlbZiR6zjp3",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"9000",
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
                                        <li class="list-group-item">₹ 6450</li>
                                        <li class="list-group-item">Sponsor Srimad Bhāgavatam Set for a vaishnava</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://pmny.in/bIYpuE3jEx84",
                                                give_monthly_link:"",
                                                amount:"6450",
                                                donate_direct:"/donate",
                                                isCustom:"false",
                                            })

               
                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio6" name="purpose_of_donation" class="custom-control-input" value="3500"/>
                                        <label class="custom-control-label" for="customRadio6"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">
                                        ₹ 3100
                               
                                        </li>
                                        <li class="list-group-item">Ārti Paraphernalia </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                donate_direct:"/donate",
                                                give_once_link:"https://pmny.in/1IJqIgXYxBRw",
                                                give_monthly_link:"",
                                                amount:"3100",
                                                isCustom:"true",
                                            })



                                        }}class="custom-control custom-radio">
                                        <input type="radio" id="custom_amount_onetime2" name="purpose_of_donation" class="custom-control-input" value="custom"/>
                                        <label class="custom-control-label" for="custom_amount_onetime2"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        <ul class="list-group list-group-horizontal"
                                        
                                        >
                                        <li class="list-group-item">₹ 15,000</li>
                                        <li class="list-group-item">Bhagavad Gitā Distribution (108)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://pmny.in/IIWqUgfYSyts",
                                                give_monthly_link:"",
                                                amount:"15,000",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 30,000</li>
                                        <li class="list-group-item">Prasādam Distribution (1000 Plates Khichadi)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://pmny.in/8IAJ2vJz1zp2",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"30,000",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio8" name="purpose_of_donation" class="custom-control-input" value="6500"/>
                                        <label class="custom-control-label" for="customRadio8"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">₹ 35,000</li>
                                        <li class="list-group-item">Sponsor a cow (We don't have any cow)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://pmny.in/nIyUTS1M1oLa",
                                                give_monthly_link:"",
                                                amount:"35,000",
                                                donate_direct:"/donate",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio9" name="purpose_of_donation" class="custom-control-input" value="6500"/>
                                        <label class="custom-control-label" for="customRadio9"></label>
                                        </div>
                                        </li>
                                        </ul>
            <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">
                                        ₹ 90,000
                               
                                        </li>
                                        <li class="list-group-item">Prasādam Distribution (3000 Plates Khichadi)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                donate_direct:"/donate",
                                                give_once_link:"https://pmny.in/RIfp9EMj4ChK",
                                                give_monthly_link:"",
                                                amount:"90,000",
                                                isCustom:"true",
                                            })



                                        }}class="custom-control custom-radio">
                                        <input type="radio" id="custom_amount_onetime" name="purpose_of_donation" class="custom-control-input" value="custom"/>
                                        <label class="custom-control-label" for="custom_amount_onetime"></label>
                                        </div>
                                        </li>
                                        </ul>





                                        <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">
                                         Custom
                               
                                        </li>
                                        <li class="list-group-item">How much are you going to give today?</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                donate_direct:"/donate",
                                                give_once_link:"custom-once.com",
                                                give_monthly_link:"",
                                                amount:"",
                                                isCustom:"true",
                                            })



                                        }}class="custom-control custom-radio">
                                        <input type="radio" id="custom_amount_onetime3" name="purpose_of_donation" class="custom-control-input" value="custom"/>
                                        <label class="custom-control-label" for="custom_amount_onetime3"></label>
                                        </div>
                                        </li>
                                        </ul>
                                        </React.Fragment>
                                        )
    else 
        customDonate = (
            <React.Fragment>
                <ul class="list-group list-group-horizontal" 
                                        
                                        >
                                        <li class="list-group-item">₹ 1100 </li>
                                        <li class="list-group-item">Vigraha-Sevā Bāl-bhoga  </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0069U6SIO9W6 ",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"1100",
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
                                        <li class="list-group-item">₹ 5100</li>
                                        <li class="list-group-item">Vigraha-Sevā Rāj-Bhoga  </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                                                                    this.setState({
                                                
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0018QEN28JBB",
                                                give_monthly_link:"",
                                                amount:"5100",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 3100</li>
                                        <li class="list-group-item">Vigraha-Sevā Sandhyā-Bhoga</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0057KRPUNGWQ",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"3100",
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
                                        <li class="list-group-item">₹ 3000</li>
                                        <li class="list-group-item">Prasādam Distribution (100 Plates Khichadi) </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0017AG4ZZENA",
                                                give_monthly_link:"",
                                                amount:"3000",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 6000</li>
                                        <li class="list-group-item">Prasādam Distribution (200 Plates Khichadi)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL009993KARJYY",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"6000",
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
                                        <li class="list-group-item">₹ 3100</li>
                                        <li class="list-group-item">Ārti Paraphernalia   </li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{
                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0052Q6QKZISH",
                                                give_monthly_link:"",
                                                amount:"3500",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 6450</li>
                                        <li class="list-group-item">Sponsor Srimad Bhāgavatam Set for a vaishnava</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0087TJYWNBKP",
                                                give_monthly_link:"",
                                                amount:"6450",
                                                donate_direct:"/donate",
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
                                        <li class="list-group-item">₹ 15,000</li>
                                        <li class="list-group-item">Bhagavad Gitā Distribution (108 books)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL00723ZSHENXC",
                                                give_monthly_link:"",
                                                donate_direct:"/donate",
                                                amount:"15,000",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio8" name="purpose_of_donation" class="custom-control-input" value="6500"/>
                                        <label class="custom-control-label" for="customRadio8"></label>
                                        </div>
                                        </li>
                                        </ul>


                                        <ul class="list-group list-group-horizontal">
                                        <li class="list-group-item">₹ 9,000</li>
                                        <li class="list-group-item">Prasādam Distribution (300 Plates Khichadi)</li>
                                        <li class="list-group-item">
                                        <div onClick={()=>{

                                            this.setState({
                                                give_once_link:"https://app.lotuspay.com/merchant/plan/AL0096QVXSXWGD",
                                                give_monthly_link:"",
                                                amount:"9,000",
                                                donate_direct:"/donate",
                                                isCustom:"false",
                                            })

                                        }} class="custom-control custom-radio">
                                        <input type="radio" id="customRadio9" name="purpose_of_donation" class="custom-control-input" value="6500"/>
                                        <label class="custom-control-label" for="customRadio9"></label>
                                        </div>
                                        </li>
                                        </ul>
            
            </React.Fragment>
            )

  	const responsive = {
	  superLargeDesktop: {
	    // the naming can be any, depends on you.
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5,
        slidesToSlide : 3,
        partialVisibilityGutter: 40
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 3,
        slidesToSlide : 3, 
        partialVisibilityGutter: 10
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2,
        slidesToSlide : 2,
        partialVisibilityGutter: 30
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1,
        slidesToSlide : 1,
        partialVisibilityGutter: 30
	  }
	};

    const responsive2 = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
        slidesToSlide : 1,
        partialVisibilityGutter: 40
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide : 1, 
        partialVisibilityGutter: 10
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide : 1,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide : 1,
        partialVisibilityGutter: 30
      }
    }

    const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
          const { totalItems, currentSlide } = carouselState;
          return (
            <div className="custom-button-group">
              

            {/*

              <button onClick={() => previous()}>Previous slide</button>
              <button onClick={() => next()}>Next slide</button>

            */}
              <button onClick={() => previous()}><i  className="custom-left-arrow" />  </button>
              <button onClick={() => next()}><i  className="custom-right-arrow" /> </button>

              {/*
              <button
                onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
              >
                Go to a random slide
              </button>
          */}
            </div>
          );
        };

    const CustomButtonGroup2 = ({ next, previous, goToSlide, carouselState }) => {
          const { totalItems, currentSlide } = carouselState;
          return (
            <div className="custom-button-group2">
              

            {/*

              <button onClick={() => previous()}>Previous slide</button>
              <button onClick={() => next()}>Next slide</button>

            */}
              <button onClick={() => previous()}><i  className="custom-left-arrow bring-to-right" />  </button>
              <button onClick={() => next()}><i  className="custom-right-arrow" /> </button>

              {/*
              <button
                onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
              >
                Go to a random slide
              </button>
          */}
            </div>
          );
        };

        const CustomDot = ({ onClick, active, index, carouselState }) => {
          const { currentSlide } = carouselState;
          return (
            <li style={{ background: active ? "grey" : "initial" }}>
              <button
                style={{ background: active ? "grey" : "initial" }}
                onClick={() => onClick()}
              />
            </li>
          );
        };
    
	
  return (

    <div className="home" >


    {/*As of now we don't possess any additional items to be added as menu so I am removing the menu option, your servant*/}
    {
    <div class="header fixed-bottom" >
        <nav class="navbar navbar-light" style={{paddingBottom:0, paddingTop:0}}>
            <div class="container" style={{width:"100%"}}>
                <a class="navbar-brand" href="/" >
                <img src={logo}  class="nav-img" alt="Gopal Seva Logo"/></a>

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
                        <button onClick={() => { this.scrollTo('form_i') }} class="btn btn-primary" style={{"font-family":"Balsamiq Sans","font-size":"1.3em"}}>
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
                <h2 >Your donation will help <span style={{color:"#cc0000"}}>ISKCON Bahadurgarh</span> reach every home and spread Krishna Consciousness</h2>
            </div>
        </div>
    </div>


    <div class="empty-gap-creater">
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
                                    <h4>700+</h4>
                                    <p>Daily temple visitors.</p>
                                </div>
                            </div>
                            <div class="our-achievement-item">
                                <div class="our-achievement-item-info">
                                    <h4>1200+</h4>
                                    <p>Daily distribution of prasadam plates.</p>
                                </div>
                            </div>
                            <div class="our-achievement-item">
                                <div class="our-achievement-item-info">
                                    <h4>100+</h4>
                                    <p>Daily distribution of Srila Prabhupada's transcendental literatures.</p>
                                </div>
                            </div>
                            <div class="our-achievement-item responsive-hide">
                                <div class="our-achievement-item-info">
                                    <h4>15+</h4>
                                    <p>Dedicated servants</p>
                                </div>
                            </div>
                            <div class="our-achievement-item responsive-hide">
                                <div class="our-achievement-item-info">
                                    <h4>1 Master</h4>
                                    <p>Sri Sri Radha-Madangopal Ji</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-7" id="form_i" >
                        <div class="package-wrap package-inner">
                            
                            
                                <input type="hidden" id="payment_mode" value="onetime"/>
                                

                                <ul class="nav nav-pills nav-justified " role="tablist">
                                    <li class="nav-item ">
                                        <a class="nav-link  " data-toggle="tab" 
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
                                        <a class="nav-link active" data-toggle="tab"
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


                                        


                                        {customDonate}

                                        

                                    </div>

                                    <div class="package-proceed">
                                        <Direct to={this.state.donate_direct}><button 
                                        onClick={this.proceedHandler}
                                        id="next_page" value="Proceed" class="btn btn-warning btn-lg" style={{"font-family":"Alef"}}>Proceed</button>
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
            <div class="container-mk2">
    
    
    {/*<div class="about-sec-info">
    <h3 class="clear-spaces add-bottom-space">About GopalSevā</h3>
    <p>
    GopalSevā is a platform to generate funds for the ongoing services at ISKCON Bahadurgarh.</p>
    </div> */}
    <div class="about-sec-info">
    <h3 class="clear-spaces add-bottom-space"><span style={{color:"#cc0000"}}>ISKCON Bahadurgarh</span> <span style={{color:"#fb6500"}}>.... at a glance</span></h3>
    <p>A surge of positivity with people chanting Hare Krishna Mahamantra, singing melodious kirtans and glories of Krishna, ringing cymbals and dancing in a moment of pure joy; that is any ISKCON temple picturized through words. Visit an ISKCON Temple and you will probably realize that happiness is simply attained by something as simple as chanting the holy names of God, dancing, and feasting your way out of problems!</p>
    </div>
    <div class="about-video">
    <center style={{width:"100%"}}>
    <a href="../template_809/#">
    <iframe style={{borderRadius:"5px"}} width="100%" height="500" src="https://www.youtube.com/embed/ZcZqFHEhnMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
    </a>
    </center>
    </div>
    </div>
    </div>

    </section>




     <StoryModal         setGiveOnce={()=>{this.setState({give_flag:0})}} 
        setGiveMonthly={()=>{this.setState({give_flag:1})}}
        
        handler={(once_link,monthly_link,amt,don_dir,cus)=>{

            this.setState({
                give_once_link:once_link,
                give_monthly_link:monthly_link,
                amount:amt,
                donate_direct:don_dir,
                isCustom:cus,
            })
        }}

        options={[{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        {
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        ]}

     id="foodForLife" scrollHandler={this.scrollTo} imgsrc={foodforlife2} content={<><h3>Food For Life/ Annadān Sevā</h3><p>Annadanam Sevā means feeding the needy. Srila Prabhupada, the Founder-Acarya of ISKCON once said” No one should go hungry within 10 miles of an ISKCON temple.” Serving a hungry stomach with two square meal is the topmost necessity for the survival.</p><p>Encompassing this vision of Srila Prabhupada, ISKCON Bahadurgarh is working strenuously towards nourishing the society by regular prasadam distribution programs.</p><p>While the challenges are enormous, they can be overcome by the collective effort of each one of us and requires your whole-hearted support.
You may also sponsor one needy child a full meal of Krishna Prasdam for an entire year. Please come forward and donate generously.</p></>}/> 
    <StoryModal         setGiveOnce={()=>{this.setState({give_flag:0})}} 
        setGiveMonthly={()=>{this.setState({give_flag:1})}}
        
        handler={(once_link,monthly_link,amt,don_dir,cus)=>{

            this.setState({
                give_once_link:once_link,
                give_monthly_link:monthly_link,
                amount:amt,
                donate_direct:don_dir,
                isCustom:cus,
            })
        }}
        options={[{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        {
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        ]}

    id="vigrahaSevā" scrollHandler={this.scrollTo} imgsrc={vigraha2} content={<><h3>Sri Vigraha Sevā</h3><h4>A direct loving exchange through Deity service</h4><p>All of us are endowed with the tendencies of loving and serving. Being a social entity, we all desire that these two tendencies be reposed in a way that we derive unlimited happiness and a long-term fulfilment. Become a part of Sri Vigraha Sevā and let your loving and serving tendencies be directed in a manner that combines together to increase your devotion and also let you embark on the path of success.</p>Genuine love is symptomized by the offering of the items dear to the beloved and rendering service to him unconditionally. When such a bond of love is established, even the serving experience becomes a lifetime cherished memory. Let us allow our service enthusiasm brim out of the fountain of our heart as an expression of the gratitude towards the Lordships for all the unlimited blessings showered upon us. Let us make an offering of love through delicacies to the Lord. <p></p><p>An opportunity for you to contribute towards Aabhusan , daily worship, bhoga offerings, garland offering & various other sevās which are regularly performed to the Deities in our temple. You can choose to offer Deity sevās to Their Lordships Sri Sri Radha MadanGopal and receive their blessings.</p></>}/> 

    <StoryModal 
        setGiveOnce={()=>{this.setState({give_flag:0})}} 
        setGiveMonthly={()=>{this.setState({give_flag:1})}}
        
        handler={(once_link,monthly_link,amt,don_dir,cus)=>{

            this.setState({
                give_once_link:once_link,
                give_monthly_link:monthly_link,
                amount:amt,
                donate_direct:don_dir,
                isCustom:cus,
            })
        }}
        options={[{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        {
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        ]}

    id="goSevā" scrollHandler={this.scrollTo} imgsrc={cow2} content={<><h3>Cow Care/Go Sevā</h3><h4>Because Krishna loves the cows.....</h4><p>Because Krishna loves the cows, His devotees not only protect them but also see to their comfort, a practice that has spiritual, psychological, and practical material benefits.</p><p>In our simple life, we appreciate more and more the value of the cows. Cow protection helps us think of Krishna. We can catch glimpses of His attractive and wonderful personality in many ways that would be more difficult without protected cows.</p><p>Your donation will help us to support on-going maintenance expenses such as Goshala construction, purchasing a cow, fodder, medical expenses etc. We are determined to care for the entire life of the cow. We await for your kind participation in this transcedental service by providing us with cows. If you are unable to sponsor a cow you can give small amount also....we will collect and then purchase a cow.</p></>}/> 
    <StoryModal 


        setGiveOnce={()=>{this.setState({give_flag:0})}} 
        setGiveMonthly={()=>{this.setState({give_flag:1})}}
        
        handler={(once_link,monthly_link,amt,don_dir,cus)=>{

            this.setState({
                give_once_link:once_link,
                give_monthly_link:monthly_link,
                amount:amt,
                donate_direct:don_dir,
                isCustom:cus,
            })
        }}
        options={[{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        {
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },{
            amount:"323",
            cause:"dewfdwefwef",
            monthly_link:"dwedwdwed.wedwed.dwedw",
            once_link:"dwedwed.kkokokoko"
        },
        ]}
    id="bookDis" scrollHandler={this.scrollTo} imgsrc={bookdis2} 

    content={<><h3>Book Distribution/Sāstra Dān</h3><h4>Books are the basis.....</h4><p>Srila Prabhupada's books have changed hundreds of thousands of lives in a very positive way. At ISKCON, devotees go out in severe cold, intense heat and monsoon. just to give out the treasure-house of vedic knowledge to the suffering souls. Millions of people have been given a progressive spiritual direction in life by reading Srila Prabhupad,s books. These books are so potent that anyone who reads them is sure to become krishna Conscious, so it is a very valuable service to distribute our books.</p><p>You can sponsor the distribution of Srimad Bhagavat Gita freely to those sincere devotees who seek to advance inspiritual life but genuinely cannot afford to buy one.</p></>}/> 
    


<center>
      <div class="people-support" >
          <div class="transparent-mk card-width-increase">


              <div class="section-title-1">
                  <h2>Our Active Services</h2>
              </div>

              
              <div class="people-support-items ">


              
              {/* To understant the code of this carosel please vistit the below link : https://www.npmjs.com/package/react-multi-carousel*/}
           

                <Carousel
                      
                      
            		  arrows = {false}
            		  responsive={responsive}
            		  ssr={true} // means to render carousel on server-side.
            		  infinite={true}
            		  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={2500}
                      customButtonGroup={<CustomButtonGroup2 />}
                      renderButtonGroupOutside={true}
            		  showDots={true}

                      
            		  
            		>
            		        
                            <div class="people-support-item">
                                <div class="people-support-item-inner">
                                    <img src={foodforlife1} width="100%" style={{borderRadius:"5px"}} alt="Food Distribution"/>
                                    <h5>Food For Life/ Annadān Sevā</h5>
                                    <h3>Prasadam: Lord’s special treat </h3>
                                    <p>Because by the liberal distribution of Krsna-prasadam and sankirtan, the whole world can become peaceful and prosperous.</p>
                                    <div class="btn-row">
                                        <a href="../template_809/#"  data-toggle="modal" data-target="#foodForLife">Explore more</a>
                                    </div>
                                </div>
                            </div>

                        


            
                <div class=" people-support-item">
                    <div class="people-support-item-inner">
                        <img src={vigraha1} width="100%" style={{borderRadius:"5px"}} alt="Krishna IMG 2"/>
                        <h5>Diety Worship/Vigraha Sevā</h5>
                        <h3>A direct loving exchange through Deity service</h3>
                        <p>Because by your unalloyed service to the Deities, you will become more and more attracted to the spiritual world....</p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#vigrahaSevā">
                                Explore more
                            </a>
                        </div>
                    </div>
                </div>
            
            
                <div class=" people-support-item">
                    <div class="people-support-item-inner">
                        <img src={cow1}width="100%" style={{borderRadius:"5px"}} alt="Gauranga IMG 3"/>
                        <h5>Cow Care/Go Sevā</h5>
                        <h3>Because Krishna loves cows</h3>
                        <p>Cows & Krishna have always been together. Krishna serves cows in Vrndavan & so should we.... </p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#goSevā">
                                Explore more
                            </a>
                        </div>
                    </div>
                </div>
            
            
                <div class="people-support-item">
                    <div class="people-support-item-inner">
                        <img src={bookdis1} width="100%" style={{borderRadius:"5px"}} alt="NityaNanda IMG 4"/>
                        <h5>Book Distribution/Sāstra Dān</h5>
                        <h3>Wisdom for the soul</h3>
                        <p>Because one transcendental book distributed means we go forward one step in our Krishna Consciousness.... </p>
                        <div class="btn-row">
                            <a href="../template_809/#" data-toggle="modal" data-target="#bookDis">
                                Explore more
                            </a>

                        </div>
            		  </div></div>
                      
            		</Carousel>
          


              
                  
              </div>


          </div>
      </div>
</center>





<section class="container">



    <div class=" row">


      <div class="d-none d-lg-block col-lg-1"></div>
    
    <div class="col-12 col-lg-11">
    <div class="our-value">
        <div class="container transparent-mk-our-values">

            <div class="section-title-1">
                <h2 class="clear-spaces">Important dignitaries speak about 'ISKCON'</h2>
                <div class="section-title-1-divider"></div>
            </div>



                

                    <Carousel 
                      arrows = {false}
                      responsive={responsive2}
                      ssr={true} // means to render carousel on server-side.
                      infinite={true}
                      
                      customButtonGroup={<CustomButtonGroup />}
                      renderButtonGroupOutside={true}
                      showDots={true}
                      renderDotsOutside ={ true}
                      
                    >

                      
                        <Appreciation content={"The ISKCON family has emerged at the forefront of the quest to create a more peaceful, harmonious and compassionate society. ISKCON's journey has been a manifestation of 'Vasudhaiva Kutumbakam' Integration has been at the core of your philosophy. ISKCON's story has been the story of the determination and devotion of lakhs of devotees spread across the world. Inspired by the teaching of Lord Krishna, they spread His message far and wide. The efforts of the ISKCON family in sectors like education, publishing and disaster-relief are commendable."} title={"Prime Minister of India"} image={narendra} name={"Narendra Modi"}/>
                        <Appreciation content={"ISKCON has over the years played an important role in popularizing the noble and eternal message of the Srimad Bhagvad Gita, and promotion spiritual harmony. if today the Bhagavad-Gita is printed of copies in scores of Indian. languages and distributed all over the world, the credit for this sacred service goes chiefly to ISKCON. I congratulate ISKCON for its efforts to highlight and propagate the timeless teachings of Lord Krishna across the World. I also pay humble tribute to the contributions of His Divine A.C. Bhaktivedanta Swami Prabhupada who Incorporated ISKCON in 1966 and whose teachings continue to resobate in the hearts of Krishna devotees all over the world even today."} title={"Former President of India"} image={pranab} name={"Pranab Mukherjee"}/>
                        <Appreciation content={"We achieve much more when we collaborate. We forge alliances and partnerships to ensure a positive and long term impact on people's lives. Our supporters are a key part of the solution. We work together to accomplish our goals."} title={"Former Chief Minister of Maharastra."} image={devendra} name={"Devendra Fadnavis"}/>

                    </Carousel>
            



        </div>
    </div>

    </div>
    <div class="d-none d-lg-block col-lg-1"></div>

    </div>

    <div class="empty-gap-creater">
    </div>


</section>


    


    {/*<ButtonAppBar />*/}


























</div>


);}
}

export default Home;
