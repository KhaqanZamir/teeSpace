import React, {useState} from "react";
import { Search, Handbag } from "lucide-react";
import Button from "./Button";

const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);
  
  const handleClick = () => {
    window.open("https://www.google.com");
  }

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="src/assets/images/logo-black.png" alt="TeeSpace Logo" className="h-6 sm:h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium hover:font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-myGreen">Home</li>
          <li className="cursor-pointer hover:text-myGreen">TeeSpace</li>
          <li className="cursor-pointer hover:text-myGreen">Shop</li>
          <li className="cursor-pointer hover:text-myGreen">Blog</li>
          <li className="cursor-pointer hover:text-myGreen">Pages</li>
          
          {/* Search Icon Input field */}
          <li className="hidden lg:block relative">
            {showSearch ? (
              <input
                type="text"
                autoFocus
                placeholder="Search here"
                onBlur={() => setShowSearch(false)}
                className="w-40 px-3 py-1 text-sm focus:outline-none focus:border-b focus:border-myGreen"
              />
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="flex items-center gap-1 transition-all duration-300 ease-out 
                hover:-translate-y-1 hover:scale-105"
              >
                <Search size={18} className="text-black hover:text-myGreen" />
              </button>
            )}
          </li>

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <span className="hover:text-green-600 rounded-full p-2.5 bg-gray-200 mr-3 cursor-pointer">
              <span className="relative top-0 bottom-0 right-0 left-0">
                <span className="absolute -top-3 -right-8 bg-myGreen text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] md:text-xs">2</span>
              </span>
              <Handbag size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-[10px] md:text-xs text-gray-400">HOTLINE:</p>
              <p className="font-semibold text-xs md:text-sm text-gray-800">001 1900 8188</p>
            </div>
          </div>

          <Button style="" label={'Sign Up'} type={'button'} variant={'tertiary'} onClick={() => handleClick()} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;