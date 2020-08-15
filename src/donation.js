import React,{Component} from 'react';
// import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';

// var customLink = "/custom-donate"

class donation extends Component{
    render(){
        var link=window.localStorage.getItem('link');
        var amount=window.localStorage.getItem('amount');
        var isCustom=window.localStorage.getItem('isCustom');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date=mm + '/' + dd + '/' + yyyy;


    // if(isCustom==="true") link=window.location.origin+customLink;
    return (


        <section class="container-fluid donate-proceed" id="form_details">
        <div class="donation_form">
        <div class="container">
        <div class="donation_form_heading">
        <h3>Total Donation amount: INR {amount}</h3>
        </div>

        <form class="needs-validation" role="form" id="cartForm" method="post" action="https://us-central1-gopal-seva.cloudfunctions.net/api/data" enctype='application/json'>


            <input type="hidden" name="amount" value={amount} />

            
             <input type="hidden" name="time" value={time} />
            <input type="hidden"  name="date" value={date} />
            <input type="hidden" name="link" value={link} />

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
        <input type="text"  id="FirstName_id2" name="name" class="form-control" autocomplete="on"/>
        </div>
        </div>
        <div class="col-md-5">
        <div class="form-group">
        <label>Email <sup>*</sup></label>
        <input type="text"  id="EmailAddress_id3" name="email" class="form-control emailcontrol" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-8">
        <div class="form-group">
        <label>Address <sup>*</sup></label>
        <input type="text"  id="StreetAddress1_id4" name="address" class="form-control" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Pin/Postal Code <sup>*</sup></label>
        <input type="text"  id="PostalCode_id5" name="pin" class="form-control pincode" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>City <sup>*</sup></label>
        <input type="text"  id="City_id6" name="city" class="form-control ctyctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>State <sup>*</sup></label>
        <input type="text"  id="State_id7" name="state" class="form-control stctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Country</label>
        <input type="text" value="INDIA" id="Country_id8" name="country" class="form-control cntryctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
        <label>PAN <sup>*</sup></label>
        <input type="text"  id="PANNumber_id9" name="pan" class="form-control pancontrol" autocomplete="off"/>
        </div>
        </div>

        <div class="col-md-4">
        <div class="form-group">
        <label>Mobile <sup>*</sup></label>
        <input type="text"  id="Mobile_id10" name="mobile" class="form-control mblcontrol" autocomplete="off"/>
        </div>
        </div>






        </div>
        </div>
        <div class="col-md-5">
        <div class="payment-button">
        <div class="form-group">
        <label>Please choose your payment method</label>
        <button class="btn pay-button give_once" type="submit" name="paytm" id="paytm_btn"><strong>Proceed</strong><br/><small>(Powered by Paytm)</small></button>
							
        </div>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </section>

        );
}
}

export default donation;