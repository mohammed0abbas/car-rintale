import React, { useState,useEffect } from 'react'
import API  from '../../../API'
import { baseurl } from '../../../baseurl'
import image1 from '../../../image/adv/1.png'
import image2 from '../../../image/adv/2.png'



export default function Section_Advertising() {


    const [img,setimg] = useState([
        {image:image1},
        {image:image2}
    ])
  


//     useEffect(()=>{

//         API.get(`/api/Advertis/advetis`)
//            .then(res => {
//                const img = res.data;
//                setimg(img);
              
               
//            })
//            .catch(err =>{
//                console.log(err)
//            })
//    },[])

  const img1 = [];

(img.map(e=>{
               img1.push(e.image) 
           }))
  
 
   

    return (
        <div>
           
           
            <section className='container'>
                <div  className="row d-flex justify-content-center justify-content-md-between">
                    {
                          img1.map(e =>{
                            return <span key={e} className=' mt-4 mt-md-0 col-12 col-md-6 m-0 '>
                            <img src={`${e}`} alt="" className=' col-12  shadow' />
                            </span>
                            // ${baseurl}/
                        })
                    }
               
            </div>
            </section>
        </div>
    )
}
