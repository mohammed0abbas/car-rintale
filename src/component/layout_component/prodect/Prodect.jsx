import React, { useState, useEffect } from 'react';
import API from '../../../API';
import Loader from '../../../loader/Loader';
import Card from '../card/Card';
import Btn from '../Btn';
import img from '../../../img/test2.jpg'
import SectionCard from '../home/sectioncard/SectionCard';
import Serch from './Serch';
import '../home/sectioncard/sectioncard.css'
import { fakejson } from '../../../fakejson'





export default function Prodect() {

    const [items, setitems] = useState(fakejson)
    const [load, setload] = useState(true)

    // useEffect(() => {

    //     API.get(`/api/products/list`)
    //         .then(res => {
    //             const item = res.data;
    //             setitems(item);
    //             setload(false)

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])




    return <>





        <div>



            {
                // load ? <Loader /> : 

                <section className='section-card container p-0  m-md-5'>
                    <Serch />
                    <div className='' style={{
                        "width": '100%',
                        "display": 'flex',
                        "justifyContent": 'space-between',
                        "paddingLeft": '20px',
                        'paddingRight': '20px'
                    }}>


                    </div>

                    <div className="container justify-content-center" >
                        <div className="row d-flex justify-content-center">


                            {
                                items.map((index) =>
                                    <div key={index.id} className="col-xl-4  d-flex justify-content-center p-0 m-0 col-lg-4 col-sm-6 col-12 mt-4 ">
                                        <Card
                                            data={index}

                                        />
                                    </div>)
                            }




                        </div>
                    </div>



                </section>

            }

        </div>
    </>;
}
