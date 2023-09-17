/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Login to your Account</h2>
        <div className="mb-4">
          <div className="flex items-center mb-8">
            <span className="text-gray-700 text-sm font-bold mr-2">📧</span>
            <label className="text-gray-700 text-sm font-bold mr-9">Email:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-8">
            <span className="text-gray-700 text-sm font-bold mr-2">🔒</span>
            <label className="text-gray-700 text-sm font-bold mr-2">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-slate-100 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-black hover:bg-slate-100 hover:text-black text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
          <div className='text-left'>
            <p className="text-left inline-block align-baseline font-semibold text-sm text-black">
              Not have an account?
            </p>
            <Link
              className="underline inline-block align-baseline font-semibold text-sm text-blue  mr-2"
              to="/signup"
            >
              signup
            </Link>
          </div>
          <div className='text-right underline'>
            <Link
              className="inline-block align-baseline font-semibold text-sm text-blue"
              to="/forgot"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
 
export default Form;
