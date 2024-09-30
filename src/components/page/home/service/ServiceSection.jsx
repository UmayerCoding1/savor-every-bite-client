import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const ServiceSection = ({img,title,des}) => {
    return (
        <div data-aos="flip-up" className='flex flex-col items-center text-center mr-10   w-60 h-56 lg:w-80   lg:h-auto'>
                 <div className='w-1/2'>
                 <img className='bg-white  p-2 rounded-lg ' src={img} alt="" />
                 </div>
                 <h3 className='text-2xl font-bold mt-5'>{title}</h3>
                 <p className='mt-3 text-gray-400'>{des}</p>
               </div>
    );
};

export default ServiceSection;