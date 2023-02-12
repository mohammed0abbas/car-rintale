import React, { useEffect } from 'react'
import Section_About from './home/Section_about'
import './home.css'
import Section_Advertising from './home/Section_Advertising'
import Section_contact from './home/section_contact/Section_contact'
import SectionCard from './home/sectioncard/SectionCard'
import Loader from '../../loader/Loader'
import { useState } from 'react'
import Homecar from './homecar/Homecar'

export default function Home() {
    const [load,setload] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setload(false)
        },1000)
        
    },[])

    return (<>
    <Homecar/>
        <div className="div-home">
              {
                    load ? <Loader/> :  <div className="div-continer">
                

                
               
                {/* <Section_About/> */}
                <SectionCard/>
                <Section_Advertising/>
                <Section_contact/>
               
                
                </div>
                }
           
        </div>
        </>)
}
