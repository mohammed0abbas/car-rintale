import React from "react";
import Nav from "./component/nav_component/Nav";
import Home from './component/layout_component/Home'
import Footer from "./component/footercomponent/Footer";
import ItemDesc from "./component/layout_component/itemdesc/ItemDesc";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import About from './component/layout_component/about/About'
import Contact from "./component/layout_component/contact/Contact";
import Prodect from "./component/layout_component/prodect/Prodect";
import Login from "./component/Login";
import Regester from "./component/Register";
import Prodectcompany from "./component/layout_component/compnyprodect/Prodectcompany";
// import Form from "./component/formbokkeng/Form";


function App() {
  return (
    <div className="App">
    
     {
      localStorage.getItem('token')?<BrowserRouter>
     <Nav/>
    <Routes>
      <Route path="/" index element={<Home/>}  />
      <Route path="/about" element={<About/>} />
      <Route path="/prodect" element={<Prodect/>}/>
      <Route path="/company/:id" element={<Prodectcompany/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/item/:id" element={<ItemDesc/>} />
      {/* <Route path="/form/:id" element={<Form/>} /> */}

    
      
    </Routes>
    <Footer/>
  </BrowserRouter> 
  
  :
  
  <BrowserRouter>
     
    <Routes>
     
      <Route index path="/" element={<Login/>} />
      <Route path="/register" element={<Regester/>} />
      
    </Routes>
    
  </BrowserRouter> 
  
  
  }
     
    </div>
  );
}

export default App;
