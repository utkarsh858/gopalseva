import React,{Component} from 'react';
// import api from './api'


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
            pan:"",
            mobile:"",
            
        }
    }
    submit = async()=>{
    // await api.submitQueryForm(this.state).then(data => {
    //     this.setState({
    //     confirmMsg:"Thank You. We will reply as soon as possible",
    //     show : false,
    // })
    // });
    
    }
    render(){
    return (
<form class="form">
Please provide us the details<br/>
<input type="text" id="name" />
<input type="text" id="email" />
<input type="text" id="address" />
<input type="text" id="pin" />
<input type="text" id="city" />
<input type="text" id="state" />
<input type="text" id="country" />
<input type="text" id="pan" />
<input type="text" id="mobile" />
<button></button>
</form>


        );}
}

export default Donation;