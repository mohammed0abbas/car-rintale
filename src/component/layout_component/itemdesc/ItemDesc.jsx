import React from 'react'
import { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../API'
import { baseurl } from '../../../baseurl'
import './itemdesc.css'
import Loader from '../../../loader/Loader'


export default function ItemDesc() {

  let { id } = useParams();
  
  const [item,setitem] = useState({})
  
  const [load,setload] = useState(true)
  




  useEffect(()=>{

    API.get(`/api/products/product/${id}`)
       .then(res => {
           const temp = res.data;
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


      <section className='col-7 d-flex flex-column flex-lg-row justify-content-between'>

      

          <div className='col-12 col-lg-6 text-center text-lg-start'>

            <img src={`${baseurl}/${item.image}`} alt="" width={300}/>

          </div>

          <div className='col-12 col-lg-6 mt-4 mt-lg-0'>
            <h1>{item.name}</h1>
            <h6>{item.description}</h6>

            <div >
              <span>دينار عراقي</span><span>{item.price}</span><span>:السعر </span>
            </div>
            <div>
              <span>g</span> <span>{item.weight}</span><span>: الوزن</span>
            </div>
          </div>
        


      </section>



    </div>
     }
    </>
  )
}
