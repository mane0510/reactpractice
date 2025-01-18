import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 

  const handleSignInClick = () => {
    navigate('/');
  };

  return (
    <form>
      <div className="bg-stone-800 grid min-h-screen py-4 hover:brightness-[100%] flex text-center">
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[450px] rounded-xl">
          <div className="mt-4">
            <h1 className="text-2xl font-semibold text-black border-b-2 border-slate-900">
              Register
            </h1>
          </div>

          <div className="mt-8">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
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

          <div className="mt-8">
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              className="w-[300px] bg-transparent border-0 outlined-none h-10 placeholder:text-slate-600"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="text-xl font-semibold bg-blue-800 text-white hover:bg-gray-800 w-[300px] py-1.5 rounded-full shadow-md"
            >
              Register
            </button>
          </div>

          <div className="mt-1">
            <h1 className="text-center">or</h1>
          </div>

          <div className="mt-3 flex flex-1 gap-4 justify-center">
            <div className="border rounded hover:border-green-400">
              <FcGoogle className="text-3xl" />
            </div>
            <div className="border rounded hover:border-green-400">
              <FaXTwitter className="text-3xl" />
            </div>
            <div className="border rounded hover:border-green-400">
              <BiLogoFacebookSquare className="text-3xl" />
            </div>
            <div className="border rounded hover:border-green-400">
              <FaLinkedin className="text-3xl" />
            </div>
          </div>

          <div className="mt-6 flex gap-2 items-center justify-center">
            <h1 className="text-xs">Do you have an account?</h1>
            <button
              type="button"
              onClick={handleSignInClick}
              className="hover:text-indigo-800 font-semibold text-sm bg-transparent border-none cursor-pointer"
            >
              Sign In
            </button>
            <h1 className="text-sm ml-auto hover:text-orange-700 cursor-pointer">
              Need Help?
            </h1>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
