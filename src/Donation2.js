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

        <form target="_blank" method="post" action="https://us-central1-gopal-seva.cloudfunctions.net/api/data" enctype='application/json'>
        Name:
        <input type="text" name="name" onChange = {(event) => {
                this.setState({name: event.target.value});
                }} /><br/>
        email:
        <input type="text" name="email" onChange = {(event) => {
                this.setState({email: event.target.value});
                }} /><br/>
        address:
        <input type="text" name="address" onChange = {(event) => {
                this.setState({address: event.target.value});
                }} /><br/>
        city:
        <input type="text" name="city" onChange = {(event) => {
                this.setState({city: event.target.value});
                }} /><br/>
        state:
        <input type="text" name="state" onChange = {(event) => {
                this.setState({state: event.target.value});
                }} /><br/>
        country:
        <input type="text" name="country" onChange = {(event) => {
                this.setState({country: event.target.value});
                }} /><br/>
        pin:
        <input type="text" name="pin" onChange = {(event) => {
                this.setState({pin: event.target.value});
                }} /><br/>
        pan:
        <input type="text" name="pan" onChange = {(event) => {
                this.setState({pan: event.target.value});
                }} /><br/>
        mobile:
        <input type="text" name="mobile" onChange = {(event) => {
                this.setState({mobile: event.target.value});
                }} /><br/>
        <input type="text" name="link" value={link} />
        <input type="text" name="date" value={date} />
        <input type="text" name="time" value={time} />
        <input type="submit" onClick={()=>{window.location.href=link}}/>
        </form>
        );}
}

export default Donation;
        // <button onClick={this.submit} class="btn pay-button give_once" name="paytms" id="paytm_btns"><strong>Proceed</strong><br/><small></small></button>