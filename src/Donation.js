import React,{Component} from 'react';
import './App.css';
import './style.css';
import './bootstrap.min.css';
import './jetpack.css';


class Donation extends Component {



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
        <input type="text" value="" id="FirstName_id2" name="FirstName" class="form-control" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-5">
        <div class="form-group">
        <label>Email <sup>*</sup></label>
        <input type="text" value="" id="EmailAddress_id3" name="EmailAddress" class="form-control emailcontrol" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-8">
        <div class="form-group">
        <label>Address <sup>*</sup></label>
        <input type="text" value="" id="StreetAddress1_id4" name="StreetAddress1" class="form-control" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Pin/Postal Code <sup>*</sup></label>
        <input type="text" value="" id="PostalCode_id5" name="PostalCode" class="form-control pincode" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>City <sup>*</sup></label>
        <input type="text" value="" id="City_id6" name="City" class="form-control ctyctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>State <sup>*</sup></label>
        <input type="text" value="" id="State_id7" name="State" class="form-control stctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
        <label>Country</label>
        <input type="text" value="INDIA" id="Country_id8" name="Country" class="form-control cntryctrl" autocomplete="off"/>
        </div>
        </div>
        <div class="col-md-3">
        <div class="form-group">
        <label>PAN <sup>*</sup></label>
        <input type="text" value="" id="PANNumber_id9" name="PANNumber" class="form-control pancontrol" autocomplete="off"/>
        </div>
        </div>

        <div class="col-md-4">
        <div class="form-group">
        <label>Mobile <sup>*</sup></label>
        <input type="text" value="" id="Mobile_id10" name="Mobile" class="form-control mblcontrol" autocomplete="off"/>
        </div>
        </div>





        </div>
        </div>
        <div class="col-md-5">
        <div class="payment-button">
        <div class="form-group">
        <button class="btn pay-button give_once" name="paytm" id="paytm_btn"><strong>Proceed</strong><br/><small></small></button>
							
        </div>
        </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </section>

        );}
}

export default Donation;