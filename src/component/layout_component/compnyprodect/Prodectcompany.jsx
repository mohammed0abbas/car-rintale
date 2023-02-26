import Card from '../card/Card';
import React from 'react';
import { useParams } from 'react-router-dom';
import API from '../../../API';

const Prodectcompany = () => {

    let { id } = useParams();
    const [items, setItems] = React.useState([]);
        React.useEffect(() => {
            API.get(`/Car/Get?company=${id}`)
                .then(res => {
                    const persons = res.data.data;
                    setItems(persons);
                    console.log(persons);
                }
                )

            
        }, [id]);


    return (
        <div>



            {
                // load ? <Loader /> : 

                <section className='section-card container p-0  m-md-5'>
                   
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
   
    );
}

export default Prodectcompany;
