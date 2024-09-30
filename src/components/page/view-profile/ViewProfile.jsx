import React, { useContext } from 'react';
import useTile from '../../../hooks/useTitle';
import { AuthContext } from './../../../provider/AuthProvider';
import { TypeAnimation } from 'react-type-animation';

const ViewProfile = () => {
    useTile('Profile');
    const {user} = useContext(AuthContext);
    const {photoURL,displayName,email}= user;
    return (
        <div className='mt-5  p-2  lg:flex '> 
             <div className='flex items-center justify-center'>
             <img className='w-60 h-60 rounded-full' src={photoURL} alt="" />
             </div>
             <div className=' lg:ml-5'>
             <div className='mt-5 text-4xl lg:mt-0 uppercase font-bold userName'>
                <TypeAnimation
  sequence={[
    displayName,
    500,
    displayName, //  Continuing previous Text
    500,
    displayName,
    500,
    '',
    500,
  ]}
  style={{ fontSize: '36px' }}
  repeat={Infinity}
/>
             </div>
                <p className='mt-2 font-bold'>Email: <span className='ml-3'>{email.slice(0,3)}********{email.slice(17,22)}</span></p>

                <div className='mt-5'>
                    <textarea className=' h-60 rounded-lg p-2 resize-none w-full lg:w-72' name="" id=""  placeholder='Enter your commient '></textarea><br />
                    <button className='btn mt-2 btn-outline text-emerald-500'>Add Review</button>
                </div>
             </div>
        </div>
    );
};

export default ViewProfile;