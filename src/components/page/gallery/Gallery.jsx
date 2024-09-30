import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../hooks/Loading';
import { Link } from 'react-router-dom';


const Gallery = () => {
    const [allFoods,setAllFoods] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        setLoading(true);
        axios(`https://savor-every-bite-site.vercel.app/foods`)
        .then(res => {
           setAllFoods(res.data)
           setLoading(false)
        })
    },[])

    if(loading){
        return(
            <Loading/>
        )
    }
    return (
        <div>
         <div className='flex items-center'>
             <h1 className='text-5xl text-center font-bold border-b-4'>All Foods Gallery</h1>
         <div className='grid grid-cols-10 gap-2 border-4 mt-2 p-2'>
            {
                allFoods.map(food => <Link to={`/single-image/${food._id}`}><img className='w-full h-20' key={food._id} src={food.image}/></Link>)
            }
        </div>
         </div>


        </div>
    );
};

export default Gallery;

