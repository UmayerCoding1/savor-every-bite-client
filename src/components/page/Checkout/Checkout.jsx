import React, { useContext, useState } from 'react';
import { bkash } from '../../../provider/imageProvider';
import { AuthContext } from './../../../provider/AuthProvider';

const Checkout = () => {
    const [pementName,setPementName] = useState(undefined);
    const {user} = useContext(AuthContext);
    // const {displayName,email}= user;
    console.log(pementName);
    
    return (
        <div className='p-2 lg:grid grid-cols-5 gap-4'>
            <div className=' p-3 border-r-2'>
                <img onClick={() => setPementName('Bkash')} className='bg-white w-fit p-1 cursor-pointer' src={bkash} alt="" />
                <img onClick={() => setPementName('Nagad')} className='bg-white w-fit mt-2 cursor-pointer' src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="" />
            </div>

            <div className='col-span-4'>
              <form>
                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="text" name="name" id="" defaultValue={user.displayName} readOnly/><br />

                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="email" name="email" id="" defaultValue={user.email} readOnly/><br />

                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="text" name="pement" id="" defaultValue={pementName} readOnly/><br />
              </form>
            </div>
           
        </div>
    );
};

export default Checkout;