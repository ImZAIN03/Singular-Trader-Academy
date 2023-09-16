/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adjust the shadow values as needed
  };

  return (
    <div
      className="mt-20 w-full bg-cover bg-center h-80 relative flex items-center justify-center"
      style={{
        backgroundImage: `url('https://smashcode-singular-trader.web.app/static/media/networkBg.08527ac5e04e74c654d7.jpg')`, 
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl font-semibold mb-4" style={textShadowStyle}>
          Singular Trader
        </h1>
        <h1 className="text-4xl font-semibold mb-4" style={textShadowStyle}>
          Academy.
        </h1>
        <button className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 rounded-full text-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
