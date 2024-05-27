// ./src/components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import lightLogo from '../images/light.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                Traveller
                {/* <img src={lightLogo} alt="logo" className="h-20 m-auto w-auto" /> */}
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8 ml-auto">
            <NavLink
              to="/"
              exact
              activeClassName="text-blue-500 border-b-2 border-blue-500"
              className="text-gray-800 hover:text-blue-500 transition duration-300 px-3 py-2"
            >
              Home
            </NavLink>
            
            <NavLink
              to="/services"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
              className="text-gray-800 hover:text-blue-500 transition duration-300 px-3 py-2"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-blue-500 border-b-2 border-blue-500"
              className="text-gray-800 hover:text-blue-500 transition duration-300 px-3 py-2"
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            exact
            activeClassName="bg-gray-100 text-gray-900"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
         
          <NavLink
            to="/services"
            activeClassName="bg-gray-100 text-gray-900"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="bg-gray-100 text-gray-900"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
