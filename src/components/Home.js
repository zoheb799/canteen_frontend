import React from "react";
import Homee from "../images/home-img.webp";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
const Home = () => {
    return (
        <>
            <section className="home" id="home">
    <div className="content">
        <h3>WELCOME TO MJCET LOGISTICS</h3>
        <p>Now order online and get it delivered to you in just few minutes.</p>
        <NavLink to="./Menu" className="btn">Order Now</NavLink>
    </div>
    <div className="image">
    <figure><img src= {Homee} alt="home pic" /></figure>

   

    </div>

</section>

        </>
    )
}
export default Home