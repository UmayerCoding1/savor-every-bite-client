import React, { useState } from 'react';
import { CheckIcon, CloseIcon, Tk } from '../../../../provider/iconProvider';


import Swal from 'sweetalert2'
import axios from 'axios';

// // or via CommonJS
// const Swal = require('sweetalert2')


const ShoppingCartTable = ({cartItem,handleRemoveAddToCart}) => {
    const {_id,image,title,Made_By,Price,quantity,email,userName,Food_Origin}= cartItem;
    const [updateQuantity, setUpdateQuantity] = useState(quantity);
    const[updateBtn,setUpdateBtn]= useState(false);

    const handleIncQuantity = () => {
        if (updateQuantity < 5) {
            setUpdateQuantity(updateQuantity + 1);
        }
        setUpdateBtn(true)
      };
    
      const handleDenQuantity = () => {
        if (updateQuantity > 1) {
            setUpdateQuantity(updateQuantity - 1);
        }
        setUpdateBtn(true);
      };


      const handleQuantityUpdate = (_id) => { 
     const uQuantity = {updateQuantity}
        fetch(`https://savor-every-bite-site.vercel.app/add-to-cart/${_id}`, {
           method: 'PUT',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(uQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUpdateBtn(false)
            if(data.matchedCount >0){
                Swal.fire({
                    title: `${title}`,
                    text: `Quantity is update`,
                    icon: "success"
                  });
            }
        })

      }

     

      const total = Price * updateQuantity;
      
      
    return (
        
      <tr>
        <th>
           <button onClick={() => handleRemoveAddToCart(_id)} className='border-2  p-[3px] rounded-full text-red-500 border-red-500'><CloseIcon className='text-[15px]'/></button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">{title}</div>
              <div className="text-sm opacity-50">{Made_By}</div>
            </div>
          </div>
        </td>
        <td>
            {Food_Origin}
        </td>
        <td>
          <p className='flex items-center'> <Tk/>{Price}</p>
        </td>
        <td>
            <div className='flex items-center'>
            <button
              onClick={() => handleDenQuantity()}
              className="text-2xl font-bold"
            >
              -
            </button>
            <input
              className="bg-transparent border-[1px] text-white w-10 mx-3 cursor-pointer  text-lg"
              type="text"
              name=""
              id=""
              readOnly
              value={updateQuantity}
            />
            <button
              onClick={() => handleIncQuantity()}
              className="text-2xl font-bold"
            >
              +
            </button>

            {
                updateBtn ? <button onClick={() => handleQuantityUpdate(_id)} className='text-2xl ml-2 text-emerald-400  '><CheckIcon/></button> : ''
            }
            
            </div>
        </td>
        <td>
          <button className="btn btn-ghost btn-xs"><Tk/>{total}</button>
        </td>

        <td>
            <button className='bg-red-500 px-4 rounded-lg'><span>Paid</span></button>
        </td>
      </tr>
     
        
    );
};

export default ShoppingCartTable;