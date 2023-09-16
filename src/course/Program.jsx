/* eslint-disable no-unused-vars */
import React from 'react';

const Program = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-6">Course Program/Chapters</h1>
      <div className="flex justify-center">
        <div className="flex items-center w-[520px] p-4 border rounded-lg mx-2">
          <img
            src="https://smashcode-singular-trader.web.app/static/media/anatomy.f35a944f3a6af031d818.png" 
            alt="Chapter I"
            className="w-[100px] h-[100px] mr-3 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Chapter I: Market psychology</h2>
            <p className='text-md text-left p-1'>This chapter performs a detailed analysis of the interaction between the market and the psychology of each of us. Solutions will be presented that will allow for effective and rational decision-making in trading. Without a deep understanding of this chapter, it will be difficult to function properly in the financial market.</p>
          </div>
        </div>
        <div className="flex items-center w-[520px] p-4 border rounded-lg mx-2">
          <img
            src="https://smashcode-singular-trader.web.app/static/media/info.a6e1e9af68585f8e3908.png" 
            alt="Chapter II"
            className="w-[100px] h-[100px] mr-3 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Chapter II: Technical analysis</h2>
            <p className='text-md text-left p-1'>This chapter can be compared to Lego blocks, each block represents a different component of market analysis. In this section, we break down everything the market is made of and describe each piece in detail and how to interpret it.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center w-[520px] p-4 border rounded-lg mx-2">
          <img
            src="https://smashcode-singular-trader.web.app/static/media/advance.31d8c48346e49fdbaca5.jpg" 
            alt="Chapter III"
            className="w-[100px] h-[100px] mr-3 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Chapter III: Advanced Analysis</h2>
            <p className='text-md text-left p-1'>This chapter focuses on combining all the concepts and tools acquired in previous chapters to help make effective and thoughtful trading decisions. We will discuss aspects such as entering and exiting transactions and market forecasts for the near future.</p>
          </div>
        </div>
        <div className="flex items-center w-[520px] p-4 border rounded-lg mx-2">
          <img
            src="https://smashcode-singular-trader.web.app/static/media/str.64fc3cd1767dc37d889f.jpg" 
            alt="Chapter IV"
            className="w-[100px] h-[100px] mr-3 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-2">Chapter IV: Strategies</h2>
            <p className='text-md text-left p-1'>This chapter focuses on discussing different trading strategies that are needed for effective investing in the market.</p>
          </div>
        </div>
      </div>
      <button className="text-left bg-[#FF0000] text-white border-none px-6 py-2 mt-8 rounded-full font-semibold font-roboto hover:text-black">Buy Now</button>
    </div>
  );
};

export default Program;
