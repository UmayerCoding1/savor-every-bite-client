import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Location from './locaation/Location';
import { AuthContext } from '../../../../provider/AuthProvider';

const HotelLocation = () => {
    const [allLocation,setAllLocation]= useState([]);
    const {loading} = useContext(AuthContext);
   useEffect(()=> {
    axios('https://savor-every-bite-site.vercel.app/location-count')
    .then(res => setAllLocation(res.data))
   },[])

   if(loading){
    return <div className='flex items-center justify-center mt-20'>
        <span className="loading loading-ring loading-lg"></span>
    </div>
}

    return (
        <div className='mt-16'>
           <div className='flex items-center justify-center mb-5'>
            <span className='w-16 bg-orange-500 h-[2px] block'></span>
             <h2 className='text-3xl font-bold mx-2 text-orange-500'> We deliver to</h2>
             <span className='w-16 bg-orange-500 h-[2px] block'></span>
           </div>


           <div className='grid grid-cols-2 gap-4 lg:grid-cols-6'>
             {allLocation.map(location => {
                return([
                    <Location key={location._id} hotelLocation={location}/>
                ])
             }) }
           </div>
        </div>
    );
};

export default HotelLocation;