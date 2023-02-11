import React from 'react'
import './section_about.css'
import Btn from '../Btn'
import imag_bg from '../../../image/home/1.png'
import img_sect1 from '../../../image/home/2.png'



export default function Section_about() {
    return (
        <div>






            <img src={imag_bg} alt="" className='img_bg' />

            <section>
                <div className='row d-flex justify-content-between'>
                   
                    <div className="col-12 col-md-4 m-0 p-0  ml-5 pt-5">
                        <h1>Rent your car by<br />
                             an easiest way
                        </h1>
                        <p className='p-2 m-0 pt-1'>
                        more than 100 luxury cars from multi <br /> brands are always available for you

                        </p>

                        <div className='m-2' width='40px'><Btn value=' Start Booking ' link='#'/></div>
                    </div>



                     <div className="col-12 col-md-8"><img src={img_sect1} alt="" className='img2' width={'125%'}/></div>
                </div>
            </section>
      
        </div>
    )
}
