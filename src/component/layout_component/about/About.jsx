import React from 'react';

import img_about from '../../../image/about/Group.png'
import './about.css'


export default function about() {




  


    return <div className='d-flex justify-content-center'>

        <section>
            <div className="div-continer1 d-flex flex-column flex-md-row  justify-content-center justify-content-md-between pt-0 text-center text-md-end">
                <img src={img_about} alt="" width={600}  className='' />
               
                <div className="div-word pt-5 text-center p-4" dir='rtl'>
                    <h1 className='color1'> About us</h1>
                    <p>
                    UnaryCar is a reliable, affordable and eco-friendly <br/>car rental company  
                    dedicated to providing<br/> exceptional customer service 
                     and <br/> a seamless rental experience
                    </p>

                    



                </div>



            </div>
        </section>
    </div >;
}
