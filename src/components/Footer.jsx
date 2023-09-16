/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <div className="flex  md:flex-row bg-[#031329] text-white p-4">
      <div className="md:flex-grow"></div>
      <div className="flex pt-4 flex-col md:flex md:items-center">
        <img className="w-[300px] " src='https://smashcode-singular-trader.web.app/static/media/logo_main.8bc0fbdcc0695ccbc97f.png' alt='logo'/>
        <h2 className="font-semibold  mt-2 md:mt-0">Contact: admin@singulartrader.com</h2>
      </div>
      <div className="md:flex-grow"></div>
      <div className="flex pt-4 flex-col md:flex md:items-center">
        <h2 className="font-semibold ml-2 mt-2 md:mt-0 text-lg">Useful Links</h2>
        <a href="#" className="ml-2 mt-2 md:mt-0">Home</a>
        <a href="#" className="ml-2 mt-2 md:mt-0">Course</a>
        <a href="#" className="ml-2 mt-2 md:mt-0">About Us</a>
      </div>
      <div className="md:flex-grow"></div>
    </div>
  );
};

export default Footer;
