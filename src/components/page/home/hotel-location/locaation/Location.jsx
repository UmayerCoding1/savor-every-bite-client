import React from 'react';


import './location.css'
const Location = ({hotelLocation}) => {

    
    const {image,tile,count_ras} = hotelLocation
    return (
        <div  className='p-4  relative cursor-pointer'>
           <div className='w-40 h-60 '> 
            <img className='paper-p w-full h-full rounded-lg object-cover' src={image} alt="" />
              <div className='absolute  bottom-5 font-bold  p-2'>
                <h2 className='text-lg'>{tile}</h2>
                <p>({count_ras} Reastaurant )</p>
              </div>
           </div>
          
          
        </div>
    );
};

export default Location;