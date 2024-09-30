import React, { useState } from 'react';
import { Minus, PlusB0 } from '../../../../provider/iconProvider';
import Faq from 'react-faq-component';

const FAQ = () => {
    const [showFAQAns,setShowFAQAns]=useState(true);
    return (
        <div className='mt-16'>
            <div className='flex items-center justify-center mb-5'>
            <span className='w-16 bg-orange-500 h-[2px] block'></span>
             <h2 className='text-2xl font-bold mx-2 text-orange-500 lg:text-3xl'> Frequently Asked Question</h2>
             <span className='w-16 bg-orange-500 h-[2px] block'></span>
           </div>


           <div className='flex items-center justify-center mt-5'>
            <button className='btn ml-4 btn-outline text-red-500'>I’m a customer</button>
            <button className='btn ml-4 btn-outline text-white'>I’m a Food Man</button>
           </div>

           <div className='mt-16'>
              <div className='mb-2'>
                <h2 onClick={() => setShowFAQAns(!showFAQAns)} className='flex items-center text-2xl font-bold cursor-pointer text-gray-500'>{showFAQAns ? <PlusB0 className='text-red-500 mr-5'/> : <Minus className='text-red-500 mr-5'/>} I got the wrong food. What should I do?</h2>
                <p className={showFAQAns ? 'hidden overflow-hidden' : 'mt-3 '}>We’re extremely sorry for the inconvenience. Please report this issue through our app with a photo of the food or you can also immediately contact our support team with the helpline.</p>
              </div>
           </div>
        </div>
    );
};

export default FAQ;