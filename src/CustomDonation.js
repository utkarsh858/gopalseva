import React,{Component} from 'react';

export default class CustomDonation extends Component{

	componentDidMount(){
		var link = window.localStorage.getItem('link')
		var amount = window.localStorage.getItem('amount')
		document.domain = "www.payumoney.com"
		console.log(document.domain)
		// var novoForm = window.open(link, "wFormx", "width=800,height=600,menubar=no,status=no,titilebar=no,");
		// novoForm.onload = function() {

		// 	novoForm.document.getElementsByName("amount")[0].value = amount;
		// console.log(novoForm.document.getElementsByName("amount")[0])
		// }

	}

	render(){
    	return(
    		<div>Please proceed for payment in opened window</div>
    	)
    }

}
