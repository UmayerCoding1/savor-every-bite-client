import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleImage = () => {
    const zoomImg = useLoaderData();
    const {image,title}=zoomImg;
    return (
        <div>
            <h2>{title}</h2>
            <div className='flex items-center justify-center'>
            <img src={image} alt="" />
        </div>
        </div>
    );
};

export default SingleImage;