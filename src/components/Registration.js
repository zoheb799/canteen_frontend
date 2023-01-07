import React from "react";
import signpic from "../images/signin-image.jpg";
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

        input["email"] = "";

        input["password"] = "";

        input["confirm_password"] = "";
                                                  
        this.setState({input:input});

        axios.post('http://localhost:3000/Register',input)
        .then(Response => console.log(Response.data));
        this.setState({name:'', email:'',password:'',confirm_password:''})

        alert('Registration Successfull');
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

  

      if (!input["email"]) {

        isValid = false;

        errors["email"] = "Please enter your email Address.";

      }

  

      if (typeof input["email"] !== "undefined") {

          

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {

          isValid = false;

          errors["email"] = "Please enter valid email address.";

        }

      }

  

      if (!input["password"]) {

        isValid = false;

        errors["password"] = "Please enter your password.";

      }

  

      if (!input["confirm_password"]) {

        isValid = false;

        errors["confirm_password"] = "Please enter your confirm password.";

      }

  

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

          

        if (input["password"] !== input["confirm_password"]) {

          isValid = false;

          errors["password"] = "Passwords don't match.";

        }

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
                        <h2 className="form-title">Registration</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" value={this.state.input.name}

onChange={this.handleChange} id="name" autoComplete="off" placeholder="Your Name"/>
                            </div>
                            <div className="text-danger">{this.state.errors.name}</div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" value={this.state.input.email}

onChange={this.handleChange} id="email" autoComplete="off" placeholder="Your Email"/>
                            </div>
                            <div className="text-danger">{this.state.errors.email}</div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" value={this.state.input.password}

onChange={this.handleChange}id="password" autoComplete="off" placeholder="Password"/>
                            </div>
                            <div className="text-danger">{this.state.errors.password}</div>
                            
                            <div className="form-group">
                                <label for="password"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="confirm_password"value={this.state.input.confirm_password}

              onChange={this.handleChange} id="confirm_passwords" autoComplete="off" placeholder="Confirm your password"/>
                            </div>
                            <div className="text-danger">{this.state.errors.confirm_password}</div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <NavLink href="#" className="term-service">Terms of service</NavLink></label>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"  onclick= "validate()"  />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src= {signpic} alt="signup pic" /></figure>
                        <NavLink to="./SignIn" className="signup-image-link">I am already member</NavLink>
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