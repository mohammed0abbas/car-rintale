
import React, { useState } from 'react';
import Card from '../../card/Card';
import { useEffect } from 'react';
import API from '../../../../API';
import Btn from '../../Btn';
import img from '../../../../img/test2.jpg'
import './sectioncard.css'
import Serch from '../../prodect/Serch';



export default function SectionCard() {



    const [items, setitem] = useState([
        {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        },
        {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        },
        {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        }, {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        },
        {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        },
        {
            id: 2,
            name: 'Ferrari F60 America',
            price: 'car price',
            image: img
        },
    ])





    // useEffect(()=>{

    //      API.get(`/api/products/list`)
    //         .then(res => {
    //             const item = res.data;
    //             setitem(item);
    //             console.log(item)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    // },[])







    return <div>
        <section className='section-card container p-0  '>
            <Serch/>
            <div className='' style={{
                "width": '100%',
                "display": 'flex',
                "justifyContent": 'space-between',
                "paddingLeft": '20px',
                'paddingRight': '20px'
            }}>


                <span>
                    <Btn value=" More" link='/prodect' />
                </span>
                <span><h3>المنتجات</h3></span>
            </div>

            <div className="container justify-content-center" >
                <div className="row d-flex justify-content-center">


                    {
                        items.map((index) =>
                            <div key={index.id} className="col-xl-4  d-flex justify-content-center p-0 m-0 col-lg-4 col-sm-6 col-12 mt-4 ">
                                <Card
                                    id={index.id}
                                    price={index.price}
                                    titele={index.name}
                                    img={index.image}

                                />
                            </div>)
                    }




                </div>
            </div>



        </section>

    </div>;
}

