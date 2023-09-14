/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#031329] text-white py-2 px-3 sticky top-0 w-4/5 mx-auto rounded-full">
      <div className="flex justify-between items-center">
        <img className='w-200 h-12' src='https://smashcode-singular-trader.web.app/static/media/logo_main.8bc0fbdcc0695ccbc97f.png' alt='yes' />
        <div className="space-x-6">
          <a href="#" className="hover:text-black font-semibold">Home</a>
          <a href="#" className="hover:text-black font-semibold">About Us</a>
          <a href="#" className="hover:text-black font-semibold">Course</a>
          <a href="#" className="hover:text-black font-semibold">FAQ</a>
          <a href="#" className="hover:text-black font-semibold">Disclaimer</a>
          <button className="text-white hover:bg-white hover:text-black border border-white font-semibold py-2 px-4 rounded-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
