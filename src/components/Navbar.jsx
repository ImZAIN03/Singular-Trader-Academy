/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mt-4 bg-[#031329] text-white py-2 px-3 sticky top-0 w-full sm:w-4/5 md:w-4/5 lg:w-4/5 mx-auto rounded-full z-50 relative">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            className="w-48 h-auto"
            src="https://smashcode-singular-trader.web.app/static/media/logo_main.8bc0fbdcc0695ccbc97f.png"
            alt="yes"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:bg-white hover:text-black border border-white font-semibold py-2 px-4 rounded-full"
          >
            Menu
          </button>
          {menuOpen && (
            <div className="absolute mt-4 right-0 w-48 bg-[#031329] text-white py-2 px-4 rounded-lg shadow-lg">
              <ul>
                <li>
                  <Link to="/" className="block hover:text-black font-semibold mb-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block hover:text-black font-semibold mb-2">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/course" className="block hover:text-black font-semibold mb-2">
                    Course
                  </Link>
                </li>
                <li>
                  <a href="/course" className="block hover:text-black font-semibold mb-2">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/course" className="block hover:text-black font-semibold mb-2">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:bg-white hover:text-black border border-white font-semibold py-2 px-4 rounded-full block"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:flex space-x-6 mt-2 md:mt-0">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <Link to="/" className="font-semibold">
            About Us
          </Link>
          <Link to="/course" className="font-semibold">
            Course
          </Link>
          <a href="/course" className="font-semibold">
            FAQ
          </a>
          <a href="/course" className="font-semibold">
            Disclaimer
          </a>
          <Link
            to="/login"
            className="text-white hover:bg-white hover:text-black border border-white font-semibold py-2 px-4 rounded-full"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
