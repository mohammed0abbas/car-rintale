import React from 'react';
import './card.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { baseurl } from '../../../baseurl';


export default function Card(props) {
    const [item] = useState(props.data)

    const Navigate =useNavigate()

    const handlink=()=>{
        Navigate(`/item/${item.id}`)
    }
        
  
    

    return <span>
        <div onClick={handlink} className='div-card shadw ' dir='rtl'>
            <img src={`${item.image}`} alt="image_item" width={150} height={180} />
            {/* ${baseurl}/ */}

            <div className="divcard-2">
                <h5 className='text-start '>{item.brand.name}-{item.model.name}</h5>
                <span className='m-1 span-card'>
                    <span className='d-flex justify-content-around m-0 p-0'>
                    <p >Color: {item.color}</p> 
                    <p>Passenger: {item.maxPassengers}</p> 
                    </span>
                    <span className='d-flex justify-content-around p-0 m-0'>
                    <p >Price :{item.price}/day</p> 
                    <p >Transmission:{item.transmission == 0 ? 'Manual' : 'Auto'}</p> 
                    </span>
                    
                    
                </span>
                <Link to={`/item/${item.id}`} >
                    <button className='btn-card mt-2'>

                     Details

                    </button>
                </Link>
            </div>
        </div>




    </span>;
}
