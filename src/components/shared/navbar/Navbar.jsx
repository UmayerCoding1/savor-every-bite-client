import React, { useContext, useState } from "react";
import { logo, userImage } from "../../../provider/imageProvider";
import { Link, NavLink } from "react-router-dom";
import {
  CloseIcon,
  LogoutIcon,
  MenuIcon,
  ShoppingCardIcon,
} from "../../../provider/iconProvider";
import "./navbar.css";
import { AuthContext } from "../../../provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddToCartContext } from "../../../provider/add-to-cart-provider/AddToCartProvider";


const Navbar = () => {
  const [showNavItem, setShowNavItem] = useState(false);
  const { user } = useContext(AuthContext);
  const {card} = useContext(AddToCartContext);
  

  const navItem = (
    <>
      <li className="mr-10 font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <>
          <li className="mr-10 font-bold">
            <NavLink to={"/all-foods"}>All Foods</NavLink>
          </li>
          <li className="mr-10 font-bold">
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
        </>
      )}
      <li className="mr-10 font-bold">
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li className="mr-10 font-bold">
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li className="mr-10 font-bold">
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );

  const profilePrivetItem = (
    <>
      <li className=" text-[12px] border-b font-bold text-center lg:mt-5 ">
        <NavLink to={"/my-added-food-item"}>My added food items</NavLink>
      </li>
      <li className=" text-[12px] border-b font-bold text-center lg:mt-5 ">
        <NavLink to={"/add-food-item"}>Add a food item</NavLink>
      </li>
      <li className=" text-[12px] border-b font-bold text-center lg:mt-5 ">
        <NavLink to={"/shopping-card"}>My ordered food items</NavLink>
      </li>
    </>
  );
  const mobileNavItem = (
    <>
      <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <>
          <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
            <NavLink to={"/all-foods"}>All Foods</NavLink>
          </li>
          <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </li>
          <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
            <NavLink to={"/my-added-food-item"}>My added food items</NavLink>
          </li>
          <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
            <NavLink to={"/add-food-item"}>Add a food item</NavLink>
          </li>
          <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
            <NavLink to={"/shopping-card"}>My ordered food items</NavLink>
          </li>
        </>
      )}
      <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li onClick={() =>setShowNavItem(!showNavItem)} className="mt-6 border-b pb-2 font-bold">
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // toast.success("User logOut successfully");
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error);
      });
  };

  
  
  return (
    <header>
       <ToastContainer autoClose={2000} />
      <nav className="flex items-center justify-between border-b border-b-[#da9ce47a] py-5">
        <Link to={"/"}>
          {" "}
          <img className="w-48" src={logo} alt="" />
        </Link>

        <div className="hidden lg:block">
          <ul className="flex">{navItem}</ul>
        </div>

        <div className="flex items-center">
          <div className="relative">
            <Link to={"/shopping-card"}>
              <button className="text-3xl mr-3 text-orange-500">
                <ShoppingCardIcon />
              </button>
            </Link>
            {/* <span className="w-5 h-5 absolute bg-red-500 top-[-10px] right-0 rounded-full flex items-center justify-center">
              {card.length}
            </span> */}
          </div>

          {user ? (
            <div className=" hidden lg:block">
              <div className="flex items-center ">
                <div className="flex items-center  relative ">
                  <p className="userName font-bold pr-2">
                    Hi!{user.displayName.slice(0, 4)}...{" "}
                  </p>
                  <div className="userImage">
                    <img
                      className="w-10 h-10 mr-4 rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                    <div className="profilePrivetItem  bg-[#1f0d3bfe] p-3 z-10 absolute w-52 left-1/2  ">
                    <Link to={"/my-profile"}>
                  <Link onClick={() =>setShowNavItem(!showNavItem)} to={`profile`}><button  className="bg-emerald-400 ml-10 p-2 rounded-lg">
                    View Profile
                  </button></Link>
                </Link>
                      <ul>{profilePrivetItem}</ul>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className=" btn border-2 border-[#F41919] rounded-[10px] font-b bg-[#F41919] hover:bg-[#F41919] text-white flex items-center"
                >
                  Logout <LogoutIcon />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <button className="btn ml-4 bg-[#28d9c7] hover:bg-[#28d9c7] text-white font-bold">
                  Sign In
                </button>
              </Link>
            </div>
          )}

          <button
            onClick={() => setShowNavItem(!showNavItem)}
            className="text-3xl ml-4 bg-[#24173d] p-2 rounded-full lg:hidden "
          >
            <MenuIcon />
          </button>
        </div>

        {showNavItem ? (
          <div className="absolute z-10 p-4 left-0 top-0 w-full  bg-[#24173d]   lg:hidden">
            <button
              onClick={() => setShowNavItem(!showNavItem)}
              className="text-white text-2xl"
            >
              <CloseIcon />
            </button>
            <div className="flex flex-col items-center absolute  left-1/3 top-0">
              <img className="w-36 mt-2" src={logo} alt="" />
            </div>

            {user ? (
              <div className="flex flex-col items-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <p className="my-2 font-bold pr-2">
                  Hi!{user.displayName.slice(0, 6)}...{" "}
                </p>
                <Link to={"/my-profile"}>
                  <Link onClick={() =>setShowNavItem(!showNavItem)} to={`profile`}><button  className="bg-emerald-400 p-2 rounded-lg">
                    View Profile
                  </button></Link>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Link to={"/login"}>
                  <button className="btn ml-4 bg-[#28d9c7] hover:bg-[#28d9c7] text-white font-bold">
                    Sign In
                  </button>
                </Link>
              </div>
            )}

            <div>
              <ul>
                {mobileNavItem}
                {/* {user ? {profilePrivetItem} : ''} */}
              </ul>
              {user && (
                <button
                  onClick={handleLogOut}
                  className="  mt-3 rounded-[10px] text-[#E855DE] flex items-center"
                >
                  Logout <LogoutIcon className="ml-1 text-[25px]" />
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
       
      </nav>
    </header>
  );
};

export default Navbar;
