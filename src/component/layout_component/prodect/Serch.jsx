import React from 'react';
import { brands,models,prices } from '../../../fakejson';

const Serch = () => {
    const [temp, settemb] = React.useState(
        {
            
            brands: brands,
            models: models,
            prices: prices

        }
    )

    const brand = brands()
    const model = models()
    const price = prices()

    
    return (
        <div className='row justify-content-center'>
                <div className=' serch-div row' dir='ltr'>
                    <span className='col-3  mt-2 p-0'>
                         <input type="text" placeholder='Serch .... ' className='serch p-2 m-2 ' />
                    </span>
                   <span className='col-2  m-3 p-0'>
                    <select class="form-select " aria-label="Default select example">
                        <option selected>All brands</option>
                        {
                         brand.map((index) => <option key={index.id} value={index.id}>{index.name}</option>)
                        }
                        
                        
                    </select>
                   </span>
                   <span className='col-2  m-3 p-0'>
                    <select class="form-select " aria-label="Default select example">
                        <option selected>All models</option>
                        {
                            model.map((index) => <option key={index.id} value={index.id}>{index.name}</option>)
                        }
                    </select>
                   </span>
                   <span className='col-2 m-3 p-0'>
                    <select class="form-select" placeholder='price' aria-label="Default select example">
                        
                        <option hidden selected >All price</option>
                        <option value="1">0$ - 50$</option>
                        <option value="2">50$ - 100$</option>
                        <option value="3">100$ - 200$</option>
                    </select>
                   </span>
                    
                </div>
            </div>
    );
}

export default Serch;
