import React from "react";
import signpic from "../images/order.jpeg";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../reg.css';
import axios from "axios";
class Registration extends React.Component {
  
  
    constructor() {
      
    super();
    
    
    this.state = {

      input: {},

      errors: {}

    };

    

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

      
  
  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;

  

    this.setState({

      input

    });

  }

 
  
  handleSubmit(event) {

    event.preventDefault();
    

  

    if(this.validate()){

        console.log(this.state);

      


        let input = {};

        input["name"] = "";

        input["number"] = "";

        input["chooseTime"] = "";

        input["deliveryAdress"] = "";
        input["Orderdetails"] = ""; 
        input["Orderprice"] = "";
                                                  
        this.setState({input:input});

        axios.post('http://localhost:3000/Order',input)
        .then(Response => console.log(Response.data));
        this.setState({name:'', number:'',chooseTime:'',deliveryAdress:'',Orderdetails:'',Orderprice:''})

        alert('Order Successfull');
      // // 
      //   if(input) {
      //     axios.post("http://localhost:3000/Register",input)
      //     .then(Response=>console.log(Response))
      //   } else {
      //     alert("invalid details")
      //   };
        
       
        

    }

    
   



 
  }

validate(){

      let input = this.state.input;
     

      let errors = {};

      let isValid = true;

  

      if (!input["name"]) {

        isValid = false;

        errors["name"] = "Please enter your name.";

      }

  

      if (!input["number"]) {

        isValid = false;

        errors["number"] = "Please enter your number.";

      }

      if (!input["chooseTime"]) {

        isValid = false;

        errors["chooseTime"] = "Please  chooseTime.";

      }

  


  

      if (!input["deliveryAdress"]) {

        isValid = false;

        errors["deliveryAdress"] = "Please enter your deliveryAdress.";

      }

  

     
  
      

      this.setState({
        

        errors: errors

      });

  

      
      return isValid;
      

      


  }


  
 


 

  render() {
    
    return (

        <>
        <section className="signup">
                    <div className="container">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Orderpage</h2>
                                <form method="POST" className="register-form" id="register-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" value={this.state.input.name}
        
        onChange={this.handleChange} id="name" autoComplete="off" placeholder="Your Name"/>
                                    </div>
                                    <div className="text-danger">{this.state.errors.name}</div>
                                    <div className="form-group">
                                        <label for="phone"><i className="zmdi zmdi-phone"></i></label>
                                        <input type="number" name="number" value={this.state.input.number}
        
        onChange={this.handleChange} id="email" autoComplete="off" placeholder="Your phone number"/>
                                    </div>
                                    <div className="text-danger">{this.state.errors.number}</div>
                                    <div className="form-group">
                                   
                                    
                                    <select  name="chooseTime" value={this.state.input.chooseTime}
        
        onChange={this.handleChange}>
        <div className="text-danger">{this.state.errors.chooseTime}</div>
                        <option> Select Your time </option>
                        <option value="10:00 Am-10:15AM">10:00 Am-10:15AM</option>
                        <option value="10:15Am-10:30AM">10:15Am-10:30AM</option>
                        <option value="10:30 Am-10:45AM">10:30 Am-10:45AM</option>
                        <option value="10:45 Am-11:00AM">10:45 Am-11:00AM</option>
                        <option value="11:00 Am-11:15">11:00 Am-11:15Am</option>
                        <option value="11:15 Am-11:30AM">11:15 Am-11:30AM</option>
                        <option value="11:30 Am-11:45AM">11:30 Am-11:45AM</option>
                        <option value="11:45 Am-12:00PM">11:45 Am-12:00PM</option>
                        <option value="12:15 PM-12:30PM">12:15 PM-12:30PM</option>
                        <option value="12:30 Am-12:45AM">12:30 Am-12:45AM</option>
                        <option value="12:45 Am-1:00AM">12:45 Am-1:00AM</option>
                        <option value="1:00 Am-1:15AM">1:00 Am-1:15AM</option>
                        <option value="1:15 Am-1:30AM">1:15 Am-1:30AM</option>
                        <option value="1:30 Am-1:45AM">1:30 Am-1:45AM</option>
                        <option value="1:45 Am-2:00AM">1:45 Am-2:00AM</option>
                        <option value="2:00 Am-2:15AM">2:00 Am-2:15AM</option>
                        <option value="2:15 Am-2:30AM">2:15 Am-2:30AM</option>
                        <option value="2:45 Am-3:00AM">2:45 Am-3:00AM</option>
                        <option value="3:00 Am-3:15AM">3:00 Am-3:15AM</option>
                        <option value="3:15 Am-3:30AM">3:15 Am-3:30AM</option>
                        <option value="3:30 Am-3:45AM">3:30 Am-3:45AM</option>

                    </select>
                    
        
                                    </div>
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-pin"></i></label>
                                        <input type="text" name="deliveryAdress" value={this.state.input.deliveryAdress}
        
        onChange={this.handleChange} id="name" autoComplete="off" placeholder=" provide delivery address"/>
                                    </div>
                                    <div className="text-danger">{this.state.errors.deliveryAdress}</div>
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-shopping-cart"></i></label>
                                        <input type="text" name="Orderdetails" value={this.state.input.Orderdetails}
        
        onChange={this.handleChange} id="name" autoComplete="off" placeholder="Your Orderdetails"/>
                                    </div>
                                    <div className="text-danger">{this.state.errors.Orderdetails}</div>
                                    <div className="form-group">
                                        <label for="name"><i className="zmdi zmdi-money"></i></label>
                                        <input type="text" name="Orderprice" value={this.state.input.Orderprice}
        
        onChange={this.handleChange} id="name" autoComplete="off" placeholder="Order price"/>
                                    </div>
                                    <div className="text-danger">{this.state.errors.Orderprice}</div>
        
        
                                    
                                    
                                    <div className="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink href="#" className="term-service">Terms of service</NavLink></label>
                                    </div>
                                    
                                    <div className="form-group form-button">
                                        <input type="submit" name="signup" id="signup" className="form-submit" value="Confirm Order"  onclick= "validate()"  />
                                    </div>
                                </form>
                            </div>
                            <div className="signup-image">
                                <figure><img src= {signpic} alt="signup pic" /></figure>
                                <NavLink to="./Menu" className="signup-image-link">no check the Menu</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        
        

        </>
        );
    }
    }
    export default Registration;