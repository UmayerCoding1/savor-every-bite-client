import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { registerImg } from "../../../provider/imageProvider";
import { GithubIcon, GoogleIcon } from "../../../provider/iconProvider";
import { AuthContext } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            toast.success("Update profile");
          })
          .catch((err) => toast.error(err.code));
        form.reset();
      })
      .catch((error) => {
        console.log(error.code);
        toast.error(error.code);
      });
  };
  return (
    <div className=" mt-4 flex flex-col justify-center lg:flex-row">
      <div className=" rounded-s-lg lg:w-1/3 lg:mt-36 ">
        <img src={registerImg} alt="" />
      </div>
      <div className="bg-white  text-black rounded-lg   lg:w-1/2">
        <h1 className="text-2xl text-center pt-6  font-bold lg:mt-4 lg:p-0">
          Sign up
        </h1>

        <form onSubmit={handleRegister} className="p-20  mt-2">
          <div>
            <label className="pl-2 font-bold" htmlFor="email">
              Name
            </label>{" "}
            <br />
            <input
              className="w-full bg-transparent border-2 h-10 mb-3 text-left pl-2 text-[15px]"
              type="text"
              name="name"
              id=""
              placeholder="Name"
            />
          </div>

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
            <label className="pl-2 font-bold" htmlFor="email">
              Photo URL
            </label>{" "}
            <br />
            <input
              className="w-full bg-transparent border-2 h-10 mb-3 text-left pl-2 text-[15px]"
              type="url"
              name="photoUrl"
              id=""
              placeholder="Photo URL"
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
            <p className="font-bold">Or Sign Up using</p>
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
            You have already account please?{" "}
            <Link className="btn-link ml-2" to={"/login"}>
              Sign In
            </Link>
          </p>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Register;
