import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ShoppingCardIcon, Tk } from "../../provider/iconProvider";
import useTile from "../../hooks/useTitle";
import axios from "axios";
import { AddToCartContext } from "../../provider/add-to-cart-provider/AddToCartProvider";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FoodDetails = () => {
  const loadedFoodData = useLoaderData();
  const {handleCardProduct} = useContext(AddToCartContext);
  const {user} = useContext(AuthContext);
  

  useTile('Details | add to card')
  
  const {
    _id,
    image,
    title,
    Food_Category,
    Price,
    stock,
    Food_Origin,
    rating,
    Made_By,
    description,
  } = loadedFoodData;
  const [quantity, setQuantity] = useState(1);

  const handleIncQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleDenQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCard = () => {
    const email = user.email;
    const userName = user.displayName;
    const cardItem  = {image,title,Made_By,Food_Origin,Price,quantity,email,userName}
    handleCardProduct(_id)
    axios.post('https://savor-every-bite-site.vercel.app/add-to-cart',cardItem)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        toast.success('Your Food add successfully') 
      }
      setTimeout(()=>{
        toast.dismiss();
      },1000)
      
    })
    
  }

  




  return (
    <div className="bg-yellow-300 p-10">
      <div className="mt-5 bg-white p-4 text-black lg:grid grid-cols-4 ">
        <div className="p-2 col-span-2">
          <Link to={`/single-image/${_id}`}><img className="w-96 rounded-lg" src={image} alt="" /></Link>
          
        </div>

        <div className="p-2 col-span-2">
          <h2 className="text-5xl font-bold">{title}</h2>
          <p className="text-xs text-gray-500 py-3 ">With <span className="text-cyan-400 font-bold">{Made_By}</span></p>
          <div>{rating}</div>

          <p className=" text-gray-500  py-2">{description}</p>

          <div>
            {
              Food_Origin ? <button className="btn btn-outline rounded-xl border-cyan-500 mr-5">
              {Food_Origin}
            </button> : ''
            }
            <button className="btn btn-outline rounded-xl border-cyan-500 mr-5">
              {Food_Category}
            </button>
          </div>
          <p className="flex items-center py-5 font-bold">
            Price: <Tk className="ml-5" />
            {Price}
          </p>
          <p className="flex items-center py-5 font-bold">
            Stock: <span className="pl-5">{stock}</span>
          </p>
          <div className="mb-5 flex items-center">
            <p className="mr-4 font-bold">Quantity:</p>
            <button
              onClick={() => handleDenQuantity()}
              className="text-2xl font-bold"
            >
              -
            </button>
            <input
              className="bg-transparent border-[1px] w-20 mx-3 cursor-pointer  text-lg"
              type="text"
              name=""
              id=""
              readOnly
              value={quantity}
            />
            <button
              onClick={() => handleIncQuantity()}
              className="text-2xl font-bold"
            >
              +
            </button>
          </div>
         
         <Link>
         <button onClick={handleAddToCard} className="w-full btn bg-[#840A43] hover:bg-[#840A43] text-white flex items-center">
            <ShoppingCardIcon /> Add To cart
          </button>
         </Link>
          <div className=" p-2 ">
            <h2 className="bg-emerald-200 p-2 inline-block rounded-2xl font-semibold">
              {" "}
              This Product <span>SubTotal : </span>
              {quantity * Price}{" "}
            </h2>
          </div>
          <ToastContainer autoClose={2000}/>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
