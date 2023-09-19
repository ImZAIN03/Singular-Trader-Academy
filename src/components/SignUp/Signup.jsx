/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { firestore } from '../../../src/firebase';
import { collection, addDoc } from "@firebase/firestore";

const Signup = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const docRef = await addDoc(collection(firestore, "users"), userData);
      console.log("Document written with ID: ", docRef.id);

      // Clear input fields after successful signup.
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-6 sm:px-0">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 w-full"
          onSubmit={handleSave}
        >
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
              ref={firstNameRef}
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
              ref={lastNameRef}
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
              ref={emailRef}
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
              ref={passwordRef}
            />
          </div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-black hover:bg-slate-100 hover:text-black text-white font-bold py-2 px-5 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
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
