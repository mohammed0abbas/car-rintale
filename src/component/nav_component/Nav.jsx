import React,{useState} from 'react'
import './nav.css';
import img from '../../image/logo/5.png';

import { NavLink,Link} from "react-router-dom";



export default function Nav() {



    
   const [dropdownclass,setdropdown] = useState('close');
   


    const handldrop =(e)=>{
        e.preventDefault();
        if(dropdownclass === "close")
        setdropdown("open");
        else
        setdropdown('close')
    }


    return (
        <div className='div-con'>
            <nav className=''>
                <div>
                    
               
                    <img src={img} alt="" width={220} />
                 
                 
                </div>

                <div className='nav_link larg-screen' dir='' >
                   
                <NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/"} className='m-3 link-nav' >Home</NavLink>  
                <NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/about"} className='m-3 link-nav' >About Us </NavLink> 
                <NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/prodect"} className='m-3 link-nav' >Prodect</NavLink>
                <NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/contact"} className='m-3 link-nav' > Contact Us</NavLink>
           
                </div>

                <div className="medlle-screen" >
                  <div className={dropdownclass} onClick={handldrop}>
                     <div className='dropdown dropdown1'></div>
                      <div className='dropdown dropdown2'></div>
                      <div className='dropdown dropdown1'></div>
                  </div>
                
                 {(dropdownclass === "open") && <ul>
                <li><NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/"} className='m-3 link-nav' >Home</NavLink>  </li>
                <li><NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/about"} className='m-3 link-nav' >About Us </NavLink> </li>
                <li><NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/prodect"} className='m-3 link-nav' >Prodect</NavLink> </li>
                <li><NavLink onClick={()=>{setdropdown('close')}} activeclassname="active" to={"/contact"} className='m-3 link-nav' > Contact Us</NavLink></li>
            </ul>}</div>
            </nav>


           
        </div>
    )
}
