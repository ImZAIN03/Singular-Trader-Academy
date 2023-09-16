/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-2/6">
        <div className="mb-4">
          <Link to="/login" className="text-black text-sm font-semibold">
            <span className="border border-gray-800 rounded-full px-5 py-3">
              Back
            </span>
          </Link>
        </div>
        <h2 className="text-center text-2xl font-bold mb-4">Forgot Password</h2>

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
        <div className="mb-4 flex justify-center">
          <button
            className="border border-gray-800 bg-black text-white hover:bg-white hover:text-black  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
