import React from "react";
import "./login.css";
import img from '../image/login/1.png'
import API from "../API";
import { Link } from "react-router-dom";




function Login() {


  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handllogin = () => {
  
    if(username === "m_cel" || password === "12345678"){
      localStorage.setItem('token', '123456789')
      window.location.href = "/"
    }
  
  
  }


  return (

    <div className="container box_ali">
      <img src={img} alt="" />
      <div className="wrapper">
        <span className="header">Login</span>
        <div className="flex-col">
          <label htmlFor="username">Username</label>
          <input placeholder="Username" onChange={(e)=>{setusername(e.target.value)}} name="username" className="input" type="text" />
        </div>
        <div className="flex-col">
          <label htmlFor="password">Password</label>
          <input placeholder="Password"  onChange={e=>{setpassword(e.target.value)}} name="password" className="input" type="text" />
        </div>
        <button className="btn" onClick={handllogin}>Login</button>
        <div className="or">
          <div className="line"></div>
          <span>or</span>
          <div className="line"></div>
        </div>
        <Link to={'/register'}>
         <button className="btn2">Register</button>
        </Link>
       
      </div>
    </div>
  );
}

export default Login;
