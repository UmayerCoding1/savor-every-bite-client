import React from 'react';

const MobileService = ({img,title,des}) => {
    return (
        
             <div className="w-full h-[20vh] text-white bg-[#290938] flex items-center justify-center flex-col text-center ">
               <div className="w-1/4">
               <img className="bg-white p-2" src={img} alt="" />
               </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className='mb-5'>{des}</p>
            </div>
        
    );
};

export default MobileService;