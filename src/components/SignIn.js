import React from "react";
import signupic from "../images/signup-image.jpg";
import { NavLink,useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
const SignIn = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        
        navigate("/");
      };
    return (
       <>
             <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                    <figure><img src= {signupic} alt="signup pic" /></figure>
                        <NavLink to="./Registration" className="signup-image-link">Create an account</NavLink>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onClick={redirectToHome}/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></NavLink></li>
                                <li><NavLink to="#"><i className="display-flex-center zmdi zmdi-google"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
            
             </>
    )
}
export default SignIn