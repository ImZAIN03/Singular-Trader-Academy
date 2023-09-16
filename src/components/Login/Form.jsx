/* eslint-disable no-unused-vars */
import React from 'react';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-center text-2xl font-bold mb-4">Login to your Account</h2>
        <div className="mb-4">
          <div className="flex items-center">
            <label className="text-gray-700 text-sm font-bold mr-2">Email:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center">
            <label className="text-gray-700 text-sm font-bold mr-2">Password:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Not have an account?
          </a>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
