import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Order from "./components/Order";
import SignIn from "./components/SignIn";


const App = () => {
  return (
    <>
      
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          
          <Route exact path="/Menu" element={<Menu />}></Route>
          <Route exact path="/Registration" element={<Registration />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Admin" element={<Admin />}></Route>
          <Route exact path="/Order" element={<Order />}></Route>
          <Route exact path="/Menu/Order" element={<Order />}></Route>
          <Route exact path="/Menu/Order/Menu" element={<Order />}></Route>
          <Route exact path="/Registration/SignIn" element={<SignIn />}></Route>
          <Route exact path="/Registration/SignIn/Registration" element={<Registration />}></Route>
          <Route exact path="/Registration/SignIn/Registration/SignIn" element={<SignIn />}></Route>

/Menu/Order/Menu
        </Routes>
        
        </>
    
  )
}
export default App