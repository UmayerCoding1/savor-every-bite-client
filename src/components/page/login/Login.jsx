import React, { useContext } from "react";
import { loginImg, logo } from "../../../provider/imageProvider";
import useTile from "../../../hooks/useTitle";
import { GithubIcon, GoogleIcon } from "../../../provider/iconProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useTile("Login");

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const LoadedUser = result.user;
        toast.success("User sign in successfully");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        // toast.error("Please try to next time");
        console.log(error.code);
      });
  };
  return (
    <div className=" mt-4 flex flex-col-reverse justify-center lg:flex-row">
      <div className=" bg-[#25e0be] rounded-s-lg lg:w-1/3">
        <img
          className="w-40 mt-2 border-b-2 border-black hidden lg:block"
          src={logo}
          alt=""
        />

        <div className="mt-20 mb-20 flex item-center justify-center lg:mt-32 ">
          <div>
            <h2 className="text-3xl font-bold">Welcome!</h2>
            <p>You are a new please ?</p>
            <p>join our family</p>
            <Link to={"/register"}>
              <button className="btn btn-outline text-black mt-5 px-5">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white  text-black rounded-e-lg   lg:w-1/2">
        <h1 className="text-2xl text-center pt-6  font-bold lg:mt-4 lg:p-0">
          Sign In
        </h1>

        <form onSubmit={handleSignIn} className="p-20  mt-2">
          <div>
            <label className="pl-2 font-bold" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              className="w-full bg-transparent border-2 h-10 mb-3 text-left pl-2 text-[15px]"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
          </div>
          <div>
            <label className="pl-2 font-bold" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              className="w-full bg-transparent border-2 h-10 text-left pl-2 text-[15px]"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </div>

          <div>
            <input
              className="h-10 cursor-pointer bg-[#E75917] text-xs text-white mt-3 w-full"
              type="submit"
              value="Sign In"
            />
          </div>

          <dir className="flex items-center justify-center flex-col mt-5">
            <p className="font-bold">Or Sign In using</p>
            <div className="mt-2">
              <button className="text-2xl mr-4">
                <GoogleIcon />
              </button>
              <button className="text-2xl ">
                <GithubIcon />
              </button>
            </div>
          </dir>
          <p className="font-bold mt-5 text-center lg:text-left">
            You have a new account please?{" "}
            <Link className="btn-link ml-2" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Login;
