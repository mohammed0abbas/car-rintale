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
import Login from "./component/login/Login";
import Regester from "./component/login/Regester";


function App() {
  return (
    <div className="App">
    
     
     <BrowserRouter>
     <Nav/>
    <Routes>
      <Route path="/" index element={<Home/>}  />
      <Route path="/about" element={<About/>} />
      <Route path="/prodect" element={<Prodect/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/item/:id" element={<ItemDesc/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Regester/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
