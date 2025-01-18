import { Link, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSignUpNavigation = () => {
    navigate('/Register'); // Navigate to the Register page
  };

  return (
    <form>
      <div className="bg-stone-800 grid min-h-screen py-4 hover:brightness-[100%] flex text-center">
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl">
          <div className="mt-4">
            <h1 className="text-2xl font-semibold text-black border-b-2 border-slate-900 cursor-pointer">
              Login
            </h1>
          </div>

          <div className="mt-8">
            <TextField
              label="Email"
              variant="outlined"
              className="w-[300px] bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600"
            />
          </div>

          <div className="mt-8">
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              className="w-[300px] bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600"
            />
          </div>

          <div className="mt-7 flex items-center gap-2">
            <input
              id="default-checkbox"
              type="checkbox"
              className="rounded-lg w-4 h-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember Me
            </label>
            <h1 className="ml-auto text-sm hover:text-cyan-700 cursor-pointer">
              <a href="#">Forgot Password?</a>
            </h1>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="text-xl font-semibold bg-blue-800 text-white hover:bg-gray-800 w-[300px] py-1.5 rounded-full shadow-md cursor-pointer"
            >
              Login
            </button>
          </div>

          <div className="mt-1">
            <h1 className="text-center">or</h1>
          </div>

          <div className="mt-3 flex flex-1 gap-4 justify-center">
            <div className="border rounded hover:border-green-400">
              <a href="https://mail.www.google.com">
                <FcGoogle className="text-3xl" />
              </a>
            </div>
            <div className="border rounded hover:border-green-400">
              <a href="https://x.com/?mx=2">
                <FaXTwitter className="text-3xl" />
              </a>
            </div>
            <div className="border rounded hover:border-green-400">
              <a href="https://www.facebook.com/">
                <BiLogoFacebookSquare className="text-3xl" />
              </a>
            </div>
            <div className="border rounded hover:border-green-400">
              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex gap-5 items-center">
            <h1 className="text-xs">
              Do you have an account?{" "}
              <span
                className="hover:text-indigo-800 font-semibold text-sm cursor-pointer"
                onClick={handleSignUpNavigation}
              >
                SignUp
              </span>
            </h1>
            <h1 className="text-sm ml-auto hover:text-orange-700 cursor-pointer">
              Need Help?
            </h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
