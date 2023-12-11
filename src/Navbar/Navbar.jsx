import React, { useState } from 'react';



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


    return (
        <div>
        
      {/* Navbar starts */}

<nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 text-white mr-6">


        <div className="flex items-center">
  <div className="avatar">
  <div className="w-14 rounded">
    <img className='' src="https://i.ibb.co/2vKwp5t/356209715-117516454709683-8495291898662524202-n-removebg-preview.png" />
  </div>
  
</div>
    <div className='ml-4 font-mono font-semibold text-lg '>
    <h2>SOURAV DUTTA</h2>
    
  </div>

  </div>

        
        
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2zm0 5h12a1 1 0 110 2H4a1 1 0 110-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 3a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="font-mono font-semibold text-lglg:flex-grow">
            <a
              href="#home"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>

 {/* Navbar ends */}

        </div>
    );
};

export default Navbar;