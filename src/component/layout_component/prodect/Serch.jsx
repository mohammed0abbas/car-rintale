import React from 'react';

const Serch = () => {
    return (
        <div className='row justify-content-center'>
                <div className=' serch-div row' dir='ltr'>
                    <span className='col-3  mt-2 p-0'>
                         <input type="text" placeholder='Serch .... ' className='serch p-2 m-2 ' />
                    </span>
                   <span className='col-2  m-3 p-0'>
                    <select class="form-select " aria-label="Default select example">
                        <option selected>Open  menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                   </span>
                   <span className='col-2  m-3 p-0'>
                    <select class="form-select " aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                   </span>
                   <span className='col-2 m-3 p-0'>
                    <select class="form-select" placeholder='price' aria-label="Default select example">
                        
                        <option hidden selected >Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                   </span>
                    
                </div>
            </div>
    );
}

export default Serch;
