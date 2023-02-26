import React from "react";
import './login.css'
import img from '../image/login/1.png'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container box_ali">
      <img src={img} alt="" />
      <div className="wrapper" style={{
        transform: 'translate(1000px, 20px)'
      }}>
        <span className="header m-0 p-0">Register</span>
        <div className="flex-col">
          
          <input
            placeholder="firstname"
            name="firstname"
            className="input"
            type="text"
          />
        </div>
        <div className="flex-col">
          
          <input
            placeholder="lastname"
            name="lastname"
            className="input"
            type="text"
          />
        </div>
        <div className="flex-col">
          
          <input
            placeholder="phonenumber"
            name="phonenumber"
            className="input"
            type="text"
          />
        </div>
        <div className="flex-col">
         
          <input
            placeholder="email"
            name="email"
            className="input"
            type="text"
          />
        </div>
        <div className="flex-col">
         
          <input
            placeholder="password"
            name="password"
            className="input"
            type="text"
          />
        </div>

        <button className="btn">Register</button>
        <div className="or">
          <div className="line"></div>
          <span>or</span>
          <div className="line"></div>
        </div>
        <Link to={'/'}>
        <button className="btn2">Login</button>
        </Link>
        
      </div>
    </div>
  );
}

export default Register;
