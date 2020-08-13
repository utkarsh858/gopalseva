import React,{Component} from 'react';
// import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/jetpack.css';
import api from "./api"
// const axios = require('axios');


class Donation extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            address:"",
            pin:"",
            city:"",
            state:"",
            country:"",
            pan :"",
            mobile:"",
            link : window.localStorage.getItem('link'),
            date:"",
            time:""
        }
    }

hari = async()=>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
    this.setState({
        date:mm + '/' + dd + '/' + yyyy,
        time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    })
    await api.submitDonationData(this.state).then(data => {
        window.location.href = window.localStorage.getItem('link');
    });

    // await axios.post('https://us-central1-gopal-seva.cloudfunctions.net/api/data',this.state)    
    }

    render(){
    return (

        <section class="container-fluid donate-proceed" id="form_details">
        <div class="donation_form">
        <div class="container">
        <div class="donation_form_heading">
        <h3>Please share the details for the receipt<span id="amt_info_lbl" class="text-color-2"></span></h3>
        </div>

        <form class="needs-validation" role="form" id="cartForm" method="post" action="/">
        <div class="row">
        <div class="col-md-7">
        <div class="row">
        <div class="col-md-2">
        <div class="form-group">
        <label>Title <sup>*</sup></label>
        <select id="TitleControl" name="Title" class="form-control">
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Miss">Miss</option>
        <option value="Dr.">Dr.</option>
        <option value="Ms.">Ms.</option>
        </select>
        </div>
        </div>
        <div class="col-md-5">
        <div class="form-group">
        <label>Full Name <sup>*</sup></label>
        <input type="text"  id="FirstName_id2" name="FirstName" class="form-control" autocomplete="off" 				onChange = {(event) => {
				this.setState({name: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-5">
        <div class="form-group">
        <label>Email <sup>*</sup></label>
        <input type="text"  id="EmailAddress_id3" name="EmailAddress" class="form-control emailcontrol" autocomplete="off" 				onChange = {(event) => {
				this.setState({email: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-8">
        <div class="form-group">
        <label>Address <sup>*</sup></label>
        <input type="text"  id="StreetAddress1_id4" name="StreetAddress1" class="form-control" autocomplete="on"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Pin/Postal Code <sup>*</sup></label>
        <input type="text"  id="PostalCode_id5" name="PostalCode" class="form-control pincode" autocomplete="off" 				onChange = {(event) => {
				this.setState({pin: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>City <sup>*</sup></label>
        <input type="text"  id="City_id6" name="City" class="form-control ctyctrl" autocomplete="off" 				onChange = {(event) => {
				this.setState({city: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>State <sup>*</sup></label>
        <input type="text"  id="State_id7" name="State" class="form-control stctrl" autocomplete="off" 				onChange = {(event) => {
				this.setState({state: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Country</label>
        <input type="text" value="INDIA" id="Country_id8" name="Country" class="form-control cntryctrl" autocomplete="off" 				onChange = {(event) => {
				this.setState({country: event.target.value});
				}}
/>
        </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
        <label>PAN <sup>*</sup></label>
        <input type="text"  id="PANNumber_id9" name="PANNumber" class="form-control pancontrol" autocomplete="off" 				onChange = {(event) => {
				this.setState({pan: event.target.value});
				}}
/>
        </div>
        </div>

        <div class="col-md-4">
        <div class="form-group">
        <label>Mobile <sup>*</sup></label>
        <input type="text"  id="Mobile_id10" name="Mobile" class="form-control mblcontrol" autocomplete="off" 				onChange = {(event) => {
				this.setState({mobile: event.target.value});
				}}
/>
        </div>
        </div>

        </div>
        </div>
        <div class="col-md-5">

        <button onClick={this.hari}>proceed</button>
        </div>
        </div>
        </form>
        </div>
        </div>
        </section>

        );}
}

export default Donation;
        // <button onClick={this.submit} class="btn pay-button give_once" name="paytms" id="paytm_btns"><strong>Proceed</strong><br/><small></small></button>