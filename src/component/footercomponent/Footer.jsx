import './footer.css'
import { NavLink } from "react-router-dom";
import icon1 from '../../img/icon/face_white.svg'
import icon2 from '../../img/icon/insta_white.svg'
import icon3 from '../../img/icon/twiter_white.svg'

export default function Footer() {

  return <div>

    <footer>
      <div >
        <h1 className='mt-5'>logo</h1>
        <p className='m-1'>
        Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry.  Lorem Ipsum has been<br /> the industry's standard dummy text ever since the 1500s,<br /> 
        </p>        </div>


      <div className='m-2'>
        <NavLink activeclassname="active" to={"/"} className='m-3 link-nav' > Home</NavLink>
        <NavLink activeclassname="active" to={"/about"} className='m-3 link-nav' > About Us </NavLink>
        <NavLink activeclassname="active" to={"/prodect"} className='m-3 link-nav' > prodect</NavLink>
        <NavLink activeclassname="active" to={"/contact"} className='m-3 link-nav' >  contact Us</NavLink>

      </div>

      <div className='d-flex justify-content-between '>

        <a href='https://instagram.com/m__cel'><img src={icon1} className='m-4' alt="" /></a>
        <a href='https://instagram.com/m__cel'><img src={icon2} className='m-4' alt="" /></a>
        <a href='https://instagram.com/m__cel'><img src={icon3} className='m-4' alt="" /></a>

      </div>


    </footer>

  </div>;
}
