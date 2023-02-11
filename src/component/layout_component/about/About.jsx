import React from 'react';

import img_about from '../../../img/about_img/about_img.png'
import './about.css'


export default function about() {




  


    return <div className='d-flex justify-content-center'>

        <section>
            <div className="div-continer1 d-flex flex-column flex-md-row  justify-content-center justify-content-md-between pt-0 text-center text-md-end">
                <img src={img_about} alt="" width={400} height={550} className='' />
               
                <div className="div-word pt-5 " dir='rtl'>
                    <h1 className='color1'>من نحن؟</h1>
                    <p>شركة محلية مبنية على فكرة شخصية تم
                        <br /> طرحها في برنامج ينهض النسخة الثالثة
                        <br /> المقدم بأشراف مؤسسة المحطة وبالشراكة
                        <br /> مع UNDP و EXPETISE FRANCE
                    </p>

                    <h4 className='color1 mt-5 mb-2'>ما هي تازة؟</h4>
                    <p>

                        شركة تقوم بتنظيف وتغليف الخضار والفواكه
                        <br />  العراقية وفق شروط صحية وتسويقها
                        <br />  بطريقة تواكب الحداثة وبأيادي عراقية
                    </p>



                </div>



            </div>
        </section>
    </div >;
}
