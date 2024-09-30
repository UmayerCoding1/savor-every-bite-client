import React, { useState } from "react";
import {
  EyeIcon,
  PlusIcon,
  ShoppingCardIcon,
  Tk,
} from "../../../../../provider/iconProvider";
import { Link } from "react-router-dom";

const Product = ({ food }) => {
  const { _id, image, title, Price, rating ,Food_Origin} = food;
  
  
  
  
  
  
  
  return (
    <Link to={`/food-details/${_id}`}>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="border-2 border-white rounded-lg flex   justify-center flex-col p-5"
      >
        <div className="w- 58  h-28 ">
          <img className="w-[95%] h-full rounded-lg " src={image} alt="" />
        </div>

        <h2 className="text-lg font-semibold pt-1 lg:text-lg grow">{`${title.length < 8 ? title : title.slice(0,8)}`}{title.length < 10 ? '' : '....'}</h2>
        <p>{rating}</p>
        <div className="flex items-center justify-between relative">
          <p className="flex items-center text-[15px] text-emerald-400 font-bold">
            <Tk />
            {Price}
          </p>

          <div className="flex ">
            <Link to={`/food-details/${_id}`}>
              <button className="w-8 h-8 bg-yellow-400 mr-2 rounded-xl flex items-center justify-center text-xl  hover:text-[25px] hover:shadow-lg shadow-white    text-black">
                <EyeIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
