import React,{Component} from 'react';
// import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import prabhupada from "./img/prabhupada.png";
// var customLink = "/custom-donate"
import logo from './img/logo_nav.jpeg';
import footer from './img/footer-image-fadded.jpg';
import heart_static from './img/heart.png';
import heart_anim from './img/heart_anim.gif';
import ClearIcon from '@material-ui/icons/Clear';
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

class donation extends Component{
    constructor(props){
        super(props);
            this.state = {
                anim : 0
            
        }
    }
    render(){
        var heart_text = (this.state.anim==0)?(<span class="heart-text">Proceed</span>):(<span></span>);
        var heart;
        if(this.state.anim==0) heart = heart_static;
        else heart = heart_anim; 
        var link=window.localStorage.getItem('link');
        var amount=window.localStorage.getItem('amount');
        var isCustom=window.localStorage.getItem('isCustom');
        var today = new Date();
        var timestamp = today.getTime();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        var time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var date=mm + '/' + dd + '/' + yyyy;
        if(isCustom!=="true")
        var title = (<h3>Total Donation amount:<span style={{"font-family":"Special Elite"}}> ₹ {amount}</span></h3>)
    // if(isCustom==="true") link=window.location.origin+customLink;
    return (


        <section class="container-fluid donate-proceed" id="form_details">
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
     
     <ClearIcon style={{fontSize:"5em",cursor:"pointer",color:"#7e7e7e"}}onClick={()=>{this.setState({anim:1});setTimeout(()=>{window.history.back()},2500)}}/>

     </div>
            </div>
        </nav>
    </div>
        <div class="donation_form" style={{height:"400px"}}>
        <div class="container" >
        <div class="donation_form_heading">
        {title}
        </div>

                    <form class="needs-validation donate-form" role="form" id="cartForm" method="post" action="https://us-central1-gopal-seva.cloudfunctions.net/api/data" enctype='application/json' novalidate>


            <input type="hidden" name="amount" value={amount} />

            
            <input type="hidden" name="time" value={time} />
            <input type="hidden"  name="date" value={date} />
            <input type="hidden" name="link" value={link} />
            <input type="hidden" name="timestamp" value={timestamp} />

        <div class="row">
        <div class="col-md-7" style={{"border-top":" 3px solid #fcc201",paddingTop:"30px"}}>
        <div class="row">

        <div class="col-md-7">
        <div class="form-group">
        <label>Full Name <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="text" id="FirstName_id2" name="name" class="form-control" placeholder="Name" autocomplete="on" required/>
        </div>
        </div>
        <div class="col-md-5">
        <div class="form-group">
        <label>Email <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange"}} type="text" id="EmailAddress_id3" name="email" class="form-control emailcontrol" placeholder="Email" autocomplete="off" required/>
        </div>
        </div>
        <div class="col-md-8">
        <div class="form-group">
        <label>Address <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="text" id="StreetAddress1_id4" name="address" class="form-control" autocomplete="off" placeholder="Address" required/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Pin/Postal Code <sup>*</sup></label>
                                            <input type="text" style={{ borderWidth: 1, borderColor: "orange" }} id="PostalCode_id5" name="pin" class="form-control pincode" autocomplete="off" placeholder="Pincode" required/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>City <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="text" id="City_id6" name="city" class="form-control ctyctrl" autocomplete="off" placeholder="City" required/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>State <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange"}} type="text" id="State_id7" name="state" class="form-control stctrl" placeholder="State" autocomplete="off" required/>
        </div>
        </div>
                <div class="col-md-4">
        <div class="form-group">
        <label>Mobile <sup>*</sup></label>
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="text" id="Mobile_id10" name="mobile" class="form-control mblcontrol" placeholder="Mobile" autocomplete="off" required/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="hidden" value="INDIA" id="Country_id8" name="country" class="form-control cntryctrl" autocomplete="off" required/>
        </div>
        </div>
        <div class="col-md-12">
        <div class="form-group">
        <label for="validationCustom01">PAN </label>
                                            <input style={{ borderWidth: 1, borderColor: "orange" }} type="text" id="PANNumber_id9" name="pan" class="form-control pancontrol" placeholder="To claim 80G receipt, PAN number is required" autocomplete="off" />
                                            
        </div>
        </div>








        </div>
        <div class="row">
            <div class="col-md-4">

                </div>
        </div>
        </div>
        <div class="col-md-5">
        <img src={prabhupada} class="donate-img"/>
        <center>
                        <div class="payment-button">
        <div class="form-group">

                            
        </div>
        </div>
        
        <div class="payment-button">
        <div class="form-group">
        <button class="btn pay-button give_once" type="submit" name="paytm" id="paytm_btn"><bold style={{"font-family":"Balsamiq Sans","font-size":"2em"}}>Proceed</bold><br/></button>
                            
        </div>
        </div> <span style={{position:"relative",bottom:"80px"}}>with</span>
        <img src={heart} class="heart"/>
        </center>
        </div>
        </div>
        </form>
        </div>
        </div>

        <img src={footer} class="don-footer"/>
        </section>

        );
}
}

export default donation;