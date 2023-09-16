/* eslint-disable no-unused-vars */
import React from 'react';

const Topics = () => {
  return (
    <div className="flex mt-3">
      <div className="bg-cover w-1/2 relative p-4">
        <h1 className="text-[#1D1D1DEF] text-3xl md:text-4xl ml-20 mb-4 text-left font-bold ">
          The range of topics covered in the course includes:
        </h1>
        <ul className="list-disc pl-8 text-lg ml-20">
          <li>Introduction to the financial market</li>
          <li>Psychological aspects of investing</li>
          <li>Basic principles of trading</li>
          <li>Advanced market analysis</li>
          <li>Technical tools and patterns</li>
          <li>Discussion of the most common mistakes made by traders</li>
          <li>Presentation of various investment strategies</li>
        </ul>
      </div>
      <div className="w-1/2 flex items-center justify-center pr-4 pl-2">
        <img
          src="https://smashcode-singular-trader.web.app/static/media/sec_4.e2d1ff3d35765274ea79.jpg"
          alt="The Image"
          className="h-80 md:h-90 w-auto object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Topics;
