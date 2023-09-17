/* eslint-disable no-unused-vars */
import React from 'react';

const Section = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row mt-3">
          <div className="w-full lg:w-1/2">
            <img
              src="https://smashcode-singular-trader.web.app/static/media/sec_2.0e0df1e6b568f4c59bec.jpeg"
              alt="The Image"
              className="h-90 w-90 object-contain shadow-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-cover bg-center relative">
            <div className="h-full flex items-center text-center lg:text-left justify-center p-4">
              <div className="text-black max-w-md">
                <h1 className="text-[#1D1D1DEF] text-3xl mb-4 font-bold">
                  Improve your chart analysis using our solutions
                </h1>
                <p className="text-md text-lg">
                  Are you having difficulty interpreting the data visible on the screen? We understand that the financial market carries many challenges and making rational decisions can be difficult. That is why, thanks to our years of experience, we have already made all the typical mistakes, so you do not have to repeat them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
