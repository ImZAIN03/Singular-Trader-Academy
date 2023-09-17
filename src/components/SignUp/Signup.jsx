/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[800px] mx-auto px-6 sm:px-0">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-full">
          <h2 className="text-center text-2xl font-bold mb-4">
            Sign Up for an Account
          </h2>

          <div className="mb-4">
            <div className="flex items-center mb-3">
              <label className="text-gray-700 text-sm font-bold">
                First Name:
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your First Name"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-3">
              <label className="text-gray-700 text-sm font-bold">
                Last Name:
              </label>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter Your Last Name"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-3">
              <label className="text-gray-700 text-sm font-bold">Email:</label>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <label className="text-gray-700 text-sm font-bold">Password:</label>
            </div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-black hover:bg-slate-100 hover:text-black text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-black">
              Already have an account?{" "}
              <Link className="underline font-semibold text-blue" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
