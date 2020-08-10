import React from 'react';
import './App.css';
import './style.css';
import './bootstrap.min.css';





function DynamicSpan(props){
    return (
        <span id="amt_info_lbl" class="text-color-2">
            {props.value}
        </span>
    );
}

function Donation(props) {
    return (


        <section class="container-fluid donate-proceed" id="form_details">
            <div class="donation_form">
                <div class="container">
                    <div class="donation_form_heading">
                        <h3>Total Donation amount: INR <DynamicSpan value={props.value}/></h3>
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
                                            <input type="text"  id="FirstName_id2" name="FirstName" class="form-control" autocomplete="on"/>
									</div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label>Email <sup>*</sup></label>
                                                <input type="text" id="EmailAddress_id3" name="EmailAddress" class="form-control emailcontrol" autocomplete="off"/>
									</div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label>Address <sup>*</sup></label>
                                                    <input type="text"  id="StreetAddress1_id4" name="StreetAddress1" class="form-control" autocomplete="off"/>
									</div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label>Pin/Postal Code <sup>*</sup></label>
                                                        <input type="text" id="PostalCode_id5" name="PostalCode" class="form-control pincode" autocomplete="off"/>
									</div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label>City <sup>*</sup></label>
                                                            <input type="text"  id="City_id6" name="City" class="form-control ctyctrl" autocomplete="off"/>
									</div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label>State <sup>*</sup></label>
                                                                <input type="text"  id="State_id7" name="State" class="form-control stctrl" autocomplete="off"/>
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

                                                                        <div class="col-md-4 give_monthly" style={{display: "none"}}>
                                                                            <div class="form-group">
                                                                                <label>Debit Instruction</label>
                                                                                <select class="form-control" name="Frequency">
                                                                                    <option value="-1">- Select -</option>
                                                                                    <option value="1">1st to 5th of the month</option>
                                                                                    <option value="4">6th to 10th of the month</option>
                                                                                    <option value="2">11th to 20th of the month</option>
                                                                                    <option value="3">21st to 31st of the month</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-4 give_monthly" style={{display: "none"}}>
                                                                            <div class="form-group">
                                                                                <label>Number of Years</label>
                                                                                <select class="form-control" name="SupportForNumberOfYears">
                                                                                    <option value="-1" selected="">- Select -</option>
                                                                                    <option value="1">1 year</option>
                                                                                    <option value="2">2 years</option>
                                                                                    <option value="3">3 years</option>
                                                                                    <option value="4">4 years</option>
                                                                                    <option value="5">5 years</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div class="col-md-5">
                                                                            <div class="form-group">
                                                                                <label>What prompted you to give today?</label>
                                                                                <select class="form-control">
                                                                                    <option>-select-</option>
                                                                                    <option>-select-</option>
                                                                                    <option>-select-</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
								<div class="col-md-12">
                                                                            <div class="declare_checkbox">
                                                                                <div class="custom-control custom-checkbox">
                                                                                    <input type="checkbox" class="custom-control-input" id="customCheck" name="" checked=""/>
                                                                                        <label class="custom-control-label" for="customCheck">I declare that I am an Indian national.</label>

                                                                                        <input type="hidden" value="" id="CauseDetails" name="CauseDetails"/>
                                                                                            <select id="PaymentModeControl" name="PaymentMode" class="hidden_field">
                                                                                                <option value="3">Card</option>
                                                                                                <option value="4">Paytm</option>
                                                                                                <option value="5">Standing Instructions</option>
                                                                                                <option value="6">UPI</option>
                                                                                                <option value="7">ENACH</option>
                                                                                                <option value="8">UPI-Donation</option>
                                                                                            </select>
                                                                                            <input type="hidden" id="cause_info" value="sight_restoration_opts"/>
                                                                                                <input type="hidden" id="GivingType" name="GivingType" value="2"/>
                                                                                                    <input type="hidden" id="causeID" value="C-01"/>
                                                                                                        <input type="hidden" id="causeAmount" value=""/>
                                                                                                            <input type="hidden" readonly="" id="cartTotal" name="DonationAmount" class="raligntext" style={{textAlign: "right"}} value="6500"/>
                                                                                                                <input type="hidden" readonly="" id="Nationality" name="Nationality" value="1"/>
                                                                                                                    <input type="hidden" readonly="" id="CampaignID" name="CampaignID" value="1"/>
										</div>
									</div>
								</div>
							</div>
						</div>
                                                                                                    <div class="col-md-5">
                                                                                                        <div class="payment-button">
                                                                                                            <div class="form-group">
                                                                                                                <label>Please choose your payment method</label>
                                                                                                                <button class="btn pay-button give_once" name="paytm" id="paytm_btn"><strong>E-Wallet/ Credit &amp; Debit card/ Net Banking</strong><br/><small>(Powered by Paytm)</small></button>
                                                                                                                    <button class="btn pay-button give_once" name="cc" id="cc_btn"><strong>Credit &amp; Debit card/ Net Banking</strong><br/><small>(Powered by Ingenico ePayments)</small></button>
                                                                                                                        <button class="btn pay-button give_monthly" style={{display: "none"}} name="cc_mth" id="cc_mth_btn"><strong>Credit Card</strong><br/><small>(Powered by Ingenico ePayments)</small></button>
                                                                                                                            <button class="btn pay-button give_monthly" style={{display: "none"}} name="cc_mth_nach" id="cc_mth_btn2"><strong>NetBanking</strong><br/><small>(Powered by Ingenico ePayments)</small></button>
                                                                                                                                <button class="btn pay-button give_once" name="kotak" id="kotak_btn"><strong>UPI</strong><br/><small>(Powered by CCAvenue)</small></button>								
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

export default Donation;