import React, { useContext, useEffect, useState } from "react";
import useTile from "../../../hooks/useTitle";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";
import ShoppingCartTable from "./shopping-cart-table/ShoppingCartTable";
import Swal from "sweetalert2";
import CompoBanner from "../../shared/compoBanner/CompoBanner";
import Loading from "../../../hooks/Loading";
import { Tk } from "../../../provider/iconProvider";
import { Link } from "react-router-dom";
import { bkash } from "../../../provider/imageProvider";



/**
 *
 *  promo code = usb174
 */


const ShoppingCard = () => {
  useTile("Shopping Card");
  const { user } = useContext(AuthContext);
  const [shopCart, setShopCart] = useState([]);
  const [loading,setLoading]= useState(false);
  const [paymentName,setPaymentName] = useState(undefined);
  const [openCheckOutBox,setOpenCheckOutBox]=useState(false);
  
  
  useEffect(() => {
    setLoading(true)
    axios(
      `https://savor-every-bite-site.vercel.app/add-to-cart?email=${user.email}`
    ).then((res) => {setShopCart(res.data)
   setLoading(false);

    });
  }, []);

  // if(loading){
  //   return(
  //    <Loading/>
  //   )
  // }

  const handleRemoveAddToCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://savor-every-bite-site.vercel.app/add-to-cart/${id}`)
          .then((res) => {
            const result = res.data;
            console.log(result);

            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
              const remainingFood = shopCart.filter((food) => food._id !== id);
              setShopCart(remainingFood);
            }
          });
      }
    });

    
  };

  // handle sub total price
  let subTotalPrice = shopCart.reduce((initialVal,curElem) => {
    const {Price,quantity} = curElem;
    initialVal = initialVal + Price * quantity;
    return initialVal
  },0);

  const shipping = subTotalPrice * 0.10; 
  const totals = subTotalPrice + shipping;


  const handleCheckOut = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const payment = form.payment.value;
    const total = form.total.value;
    console.log({name,email,payment,total});
    
  }

  return (
    <div>
    <dir>
        <CompoBanner title={'Shopping Card'} pageTitle={'Shopping Card'}/>
    </dir>

      <div className="overflow-x-auto">
        <table className="table text-center border-b-2">
          {/* head */}
          <thead className="bg-white">
            <tr>
              <th></th>
              <th>Product</th>
              <th>Food Origin</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shopCart.map((cartItem) => (
              <ShoppingCartTable
                key={cartItem._id}
                cartItem={cartItem}
                handleRemoveAddToCart={handleRemoveAddToCart}
                
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-2 border-t-0 h-32 lg:flex items-center  justify-between">
        <div className="ml-5">
          <input
            className="w-60 h-14 text-xs text-left pl-2 text-white bg-[#333]"
            type="text"
            name=""
            id=""
            placeholder="Promo code hear"
          />
          <button className="btn bg-[#FFA500]  border-[#FFA500] text-white hover:bg-[#FFA500]">
            Apply
          </button>
        </div>

        <div className="ml-5 mt-3 lg:mr-20">
          <button className="btn bg-red-500 text-white border-0 hover:bg-red-700">Clear Card</button>
        </div>
      </div>


      <div className=" lg:flex items-center justify-between">

      <div className={openCheckOutBox ? 'block w-1/2':'hidden'}>
      <div className='p-2  lg:grid grid-cols-5 gap-4'>
            <div className=' p-3 border-r-2'>
                <img onClick={() => setPaymentName('Bkash')} className='bg-white w-fit p-1 cursor-pointer' src={bkash} alt="" />
                <img onClick={() => setPaymentName('Nagad')} className='bg-white w-fit mt-2 cursor-pointer' src="https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png" alt="" />
            </div>

            <div className='col-span-4'>
              <form onSubmit={handleCheckOut}>
                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="text" name="name" id="" defaultValue={user.displayName} readOnly/><br />

                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="email" name="email" id="" defaultValue={user.email} readOnly/><br />

                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="text" name="payment"  id="" placeholder="Choose a method" defaultValue={paymentName} required readOnly /><br /> <br />

                 <input className='my-2 text-xs bg-gray-100 text-left pl-2 w-72 h-14' type="text" name="total"  id=""  Value={totals} readOnly/><br /> <br />

                 <input className="btn btn-primary w-72" type="submit" value="Confirm" />
              </form>
            </div>
           
        </div>
      </div>

        <div className=" border-2  h-60 mt-2 p-10 lg:w-96">
           <div className="flex items-center justify-between font-bold border-b-2 border-gray-400 pb-1">
             <h3>Subtotal:</h3>
             <p className="flex items-center"><Tk/>{subTotalPrice}</p>
           </div>
           <div className="mt-8 flex items-center justify-between font-bold border-b-2 border-gray-400 pb-1">
             <h3>Shopping:</h3>
             <p className="flex items-center">0.10</p>
           </div>
           <div className="mt-3 flex items-center justify-between font-bold border-b border-gray-400 pb-1">
             <h3>Total</h3>
             <p className="flex items-center"><Tk/> {totals}</p>
           </div>

           <div>
           
           <button onClick={() => setOpenCheckOutBox(true)}  className="btn w-full mt-3 bg-[#F36249] text-white border-0 hover:bg-emerald-500">
            Proceed to Checkout
            </button>
           
           </div>

        </div>
      </div>

      
    </div>
  );
};

export default ShoppingCard;
