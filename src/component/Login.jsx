import React from "react";
import "./login.css";
import img from '../image/login/1.png'
import API from "../API";
import { Link } from "react-router-dom";




function Login() {


  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handllogin = () => {
    const data = new FormData();
    data.append("username", username);
    data.append("password", password);
    API.post("/User/login", data)
      .then((res) => {
        console.log(res.data);
        if (!res.data.hasError) {
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
        }
      })
  
  
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
          <input placeholder="Password"  onChange={e=>{setpassword(e.target.value)}} name="password" className="input" type="password" />
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
