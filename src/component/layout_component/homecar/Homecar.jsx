import React from 'react';
import './homecar.css';
import img from '../../../image/home/multiple-car.png';
import Btn from '../Btn';


const Homecar = () => {
    return (
        <div className='con-carhom'>

            <div className=' mb-5 car-home'>

            

               <div className='mt-4'>
                <h1 className='mt-4'>Rent your car by<br />
                             an easiest way
                        </h1>
                        <p className='p-2 m-0 pt-1'>
                        more than 100 luxury cars from multi <br /> brands are always available for you

                        </p>

                       
                </div>         

            <img src={img} alt="" width={'90%'} />

            </div>
        </div>

    );
}

export default Homecar;
