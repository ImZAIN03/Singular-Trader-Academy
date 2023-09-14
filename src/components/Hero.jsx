/* eslint-disable no-unused-vars */
import React from 'react';

const Hero = () => {
  return (
    <div className="flex">
      <div className="bg-cover bg-center  w-1/2 relative">
        {/* First Container */}
        <div className="h-full flex items-center text-left justify-center">
          <div className="text-black text-center max-w-md">
            <h1 className="text-[#1D1D1DEF] text-5xl mb-8 font-semibold">Make the most of Market Movements</h1>
            <p className="text-lg leading-relaxed">Get access to the key information that will help you catapult your trading career now!</p>
            <button className="bg-black text-white border-none px-6 py-2 mt-4 rounded-full font-semibold font-roboto">Singular Trader Academy</button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src="https://smashcode-singular-trader.web.app/static/media/intro.bb4bf6e0ce7fcf9032e0.png" alt="The Image" className="h-100 w-100 object-contain" />
      </div>
    </div>
  );
};

export default Hero;
