/* eslint-disable no-unused-vars */
import React from 'react'

const Training = () => {
  return (
    <div className="flex mt-12 mb-16">
      <div className="bg-cover bg-center text-left w-1/2 relative">
        <div className="h-full flex items-center text-left justify-center">
          <div className="text-black text-left max-w-md">
            <h1 className="text-[#1D1D1DEF] text-3xl text-left mb-3 font-semibold">
                Training program for traders
            </h1>
            <p className="text-[16px] font-semibold ">
            Our course focuses on a deep analysis of both the technical and psychological aspects of the financial market. During the course, we pay special attention to understanding the psychological aspects of trading and learning to reprogram our perception of the market and manage emotions. Remember that 80% of success in the financial market depends on psychology and how you react to market changes. Our course is aimed at both beginners and advanced traders. All training videos that we have prepared come from an experienced trader who shares his knowledge of the financial market, derived from years of experience and mistakes made. Our experts will help you understand how the best traders in the world make money and what the key elements of a successful investment strategy are.
            </p>
            <button className=" text-left bg-[#FF0000] text-white border-none px-6 py-2 mt-4 rounded-full font-semibold font-roboto">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <img src="https://smashcode-singular-trader.web.app/static/media/laptop.19f6d78b46aafd92bcfd.png" alt="The Image" className="h-100 w-100 object-contain" />
      </div>
    </div>
    )
}

export default Training