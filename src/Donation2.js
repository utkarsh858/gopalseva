import React,{Component} from 'react';
// import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/jetpack.css';
import api from "./api"
// const axios = require('axios');
const request = require('request');
const superagent = require('superagent');

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
            time:"",
            done:false,
        }
    }

    hari = async()=>{
//     var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
//     this.setState({
//         date:mm + '/' + dd + '/' + yyyy,
//         time:today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
//     })
await api.submitDonationData(this.state).then(data => {
    this.setState({
        done:true 
    })
        // window.location.href = window.localStorage.getItem('link');
    });

// request.post('https://us-central1-gopal-seva.cloudfunctions.net/api/data',JSON.stringify(this.state))
// superagent
//   .post('https://us-central1-gopal-seva.cloudfunctions.net/api/data')
//   .send(this.state) // sends a JSON post body
//   .set('X-API-Key', 'foobar')
//   .set('accept', 'json')
//   .end((err, res) => {
//     // Calling the end function will send the request
//     console.log(res)
//     console.log(err)
//   });
}

render(){
    var link=window.localStorage.getItem('link');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date=mm + '/' + dd + '/' + yyyy;

return (

    <div>
    <div class="header fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
    <a class="navbar-brand" href="/"><img src="https://drive.google.com/file/d/1zrpkz0mi9xlHMKEGb6FU4HXpmQPfgxrg/view?usp=sharing" alt="" /></a>
    </div>
    </nav>
    </div>
    <div class="container">



    <form class="needs-validation"  method="post" action="https://us-central1-gopal-seva.cloudfunctions.net/api/data" enctype='application/json' novalidate>

    <div class="form-row">
    <div class="col-md-4 mb-3">
    <label for="validationCustom01">Name</label>
    <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" name="name" placeholder="Name"
    required onChange={(event) => {
        this.setState({ name: event.target.value });
    }} />
    <div class="valid-feedback">
    Looks good!
    </div>
    </div>

    <div class="col-md-4 mb-3">
    <label for="validationCustomUsername">Email</label>
    <div class="input-group">
    <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupPrepend">@</span>
    </div>

    <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="email" class="form-control" name="email" placeholder="Email" aria-describedby="inputGroupPrepend" required onChange={(event) => {
        this.setState({ email: event.target.value });
    }} />

    <div class="invalid-feedback">
    Please choose an email.
    </div>
    </div>
    </div>
    </div>

        {/* email:
        <input type="text" name="email" onChange = {(event) => {
                this.setState({email: event.target.value});
            }} /><br/> */}

            <div class="form-row">
            <div class="form-group col-md-8">
            <label for="inputAddress">Address</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="1234 Main St" name="address" onChange={(event) => {
                this.setState({ address: event.target.value });
            }} />
            </div>


            </div>


            <div class="form-row">
            <div class="form-group col-md-4">
            <label for="validationCustom03">City</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="City" required name="city" onChange={(event) => {
                this.setState({ city: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid city.
            </div>
            </div>
            <div class="col-md-4 mb-4">
            <label for="validationCustom04">State</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="State" required name="state" onChange={(event) => {
                this.setState({ state: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid state.
            </div>
            </div>



            </div>    

            <div class="form-row">

            <div class="col-md-4 mb-4">
            <label for="validationCustom05">Country</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="Country" required name="country" onChange={(event) => {
                this.setState({ country: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid Country.
            </div>
            </div>

            <div class="col-md-4 mb-4">
            <label for="validationCustom05">PIN</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="PIN" required name="pin" onChange={(event) => {
                this.setState({ pin: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid pin.
            </div>
            </div>


            </div>

            <div class="form-row">
            <div class="form-group col-md-4">
            <label for="validationCustom06">PAN</label>
            <input style={{ borderWidth: 1, borderColor: "orange", backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="PAN" required name="pan" onChange={(event) => {
                this.setState({ pan: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid Pan.
            </div>
            </div>

            <div class="form-group col-md-4">
            <label for="validationCustom07">Mobile</label>
            <input style={{ borderWidth: 1, borderColor: "orange",backgroundColor: "whitesmoke" }} type="text" class="form-control" placeholder="Mobile" required name="mobile" onChange={(event) => {
                this.setState({ mobile: event.target.value });
            }} />
            <div class="invalid-feedback">
            Please provide a valid Mobile Number.
            </div>
            </div>
            </div>

        {/* address:
        <input type="text" name="address" onChange = {(event) => {
                this.setState({address: event.target.value});
            }} /><br/> */}
        {/* city:
        <input type="text" name="city" onChange = {(event) => {
                this.setState({city: event.target.value});
            }} /><br/> */}
        {/* state:
        <input type="text" name="state" onChange = {(event) => {
                this.setState({state: event.target.value});
            }} /><br/> */}
        {/* country:
        <input type="text" name="country" onChange = {(event) => {
                this.setState({country: event.target.value});
            }} /><br/> */}
        {/* pin:
        <input type="text" name="pin" onChange = {(event) => {
                this.setState({pin: event.target.value});
            }} /><br/> */}
        {/* pan:
        <input type="text" name="pan" onChange = {(event) => {
                this.setState({pan: event.target.value});
                }} /><br/>
        mobile:
        <input type="text" name="mobile" onChange = {(event) => {
                this.setState({mobile: event.target.value});
            }} /><br/> */}
            <div class = "row">


            <div class="col-md-6">
            <input type="text" name="link" value={link} />

            </div>
            <div class="col-md-2">
            <span > <input class="btn btn-primary btn-lr" type="submit" onClick={() => { }} value="Proceed" /></span>


            </div>
            </div>
            <input type="hidden"  name="date" value={date} />
            <input type="hidden" name="time" value={time} />
            <input type="hidden" name="link" value={link} />

            </form>

            </div>
            </div>
            );}
}

export default Donation;
        // <button onClick={this.submit} class="btn pay-button give_once" name="paytms" id="paytm_btns"><strong>Proceed</strong><br/><small></small></button>