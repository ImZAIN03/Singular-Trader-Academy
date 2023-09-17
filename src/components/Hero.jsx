/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-3 mb-16">
      <div className="lg:w-1/2 bg-cover bg-center text-center lg:text-left relative">
        <div className="h-full flex flex-col justify-center p-4 lg:p-0">
          <div className="text-black max-w-md mx-auto lg:text-left">
            <h1 className="text-[#1D1D1DEF] text-3xl lg:text-5xl mb-4 lg:mb-8 font-semibold">
              Make the most of Market Movements
            </h1>
            <p className="text-lg leading-relaxed">
              Get access to the key information that will help you catapult your trading career now!.
            </p>
            <button className="bg-black text-white border-none px-6 py-2 mt-4 rounded-full font-semibold font-roboto">
              <Link to="/login">
              Singular Trader Academy
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://smashcode-singular-trader.web.app/static/media/intro.bb4bf6e0ce7fcf9032e0.png"
          alt="The Image"
          className="h-100 w-100 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
