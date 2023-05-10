import React from "react";
import './login.css'
import img from '../image/login/1.png'
import { Link } from "react-router-dom";
import API from "../API";


function Register() {

  const [temp, settemp] = React.useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    password: ''
  })

  const handleRegister = () => {
    const data ={
      "fisrtName": temp.firstname,
      "lastName": temp.lastname,
      "email": temp.email,
      "phoneNumber": temp.phonenumber,
      "password": temp.password,
      "role": 0
    }

    API.post("/User/Create", data)
      .then((res) => {
        console.log(res.data);
        if (!res.data.hasError) {
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            onChange={(e) => {
              settemp({ ...temp, firstname: e.target.value });
            }}
          />
        </div>
        <div className="flex-col">
          
          <input
            placeholder="lastname"
            name="lastname"
            className="input"
            type="text"
            onChange={(e) => {
              settemp({ ...temp, lastname: e.target.value });
            }}
          />
        </div>
        <div className="flex-col">
          
          <input
            placeholder="phonenumber"
            name="phonenumber"
            className="input"
            type="text"
            onChange={(e) => {
              settemp({ ...temp, phonenumber: e.target.value });
            }}
          />
        </div>
        <div className="flex-col">
         
          <input
            placeholder="email"
            name="email"
            className="input"
            type="text"
            onChange={(e) => {
              settemp({ ...temp, email: e.target.value });
            }}
          />
        </div>
        <div className="flex-col">
         
          <input
            placeholder="password"
            name="password"
            type="password"
            className="input"
            onChange={(e) => {
              settemp({ ...temp, password: e.target.value });
            }}
          />
        </div>

        <button className="btn" onClick={handleRegister}>Register</button>
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
