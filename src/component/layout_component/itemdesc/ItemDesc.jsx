import React from 'react'
import { useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import API from '../../../API'
import { baseurl } from '../../../baseurl'
import './itemdesc.css'
import Loader from '../../../loader/Loader'
import Btn from '../Btn'


export default function ItemDesc() {

  let { id } = useParams();
  
  const [item,setitem] = useState({})
  
  const [load,setload] = useState(false)
  




  useEffect(()=>{

    API.get(`Car/Show?id=${id}`)
       .then(res => {
           const temp = res.data.data;
           setitem(temp);
           console.log(temp)
           setload(false)
       })
       .catch(err=>{
           console.log(err)
       })
},[])

  return (<>


    {
      load? <Loader/> :
   
  

    <div className='continer d-flex justify-content-center text-end mt-5 mb-5'>


      <section className='col-8 d-flex flex-column flex-lg-row justify-content-between'>

      

          <div className='col-12 col-lg-6 text-center text-lg-start'>

            <img src={`${item.image}`} alt="" width={600}/>

          </div>

          <div className='col-12 col-lg-4 mt-4 mt-lg-0 text-center'>
            <h1 style={{color: '#FAA91C'}}>{item.brand?.name} {item.model?.name}</h1>
            <hr  />
            <div className='d-flex justify-content-between '>
              <span >Brand: {item.brand?.name}</span><span>Model: {item.model?.name}</span>
            </div>            
            <div className='d-flex justify-content-between '>
              <span>Color: {item.color}</span><span>Max Passenger: {item.maxPassenger}</span>
            </div>
            <div className='d-flex justify-content-between '>
              <span>Transmission : {item.transmission == 0 ? 'Manual' : 'Auto'}</span><span>Cylinders: V{item.cylinders}</span>
            </div>
            <div className='d-flex justify-content-center '>
              <span>Price: {item.price}$ / D </span>
            </div>
            <div className='d-flex m-4 justify-content-center '>
              <Link to={`/form/${id}`}>
              <Btn link="#" value="Order Now" ></Btn>
              </Link>
            </div>
          </div>
        


      </section>



    </div>
     }
    </>
  )
}
