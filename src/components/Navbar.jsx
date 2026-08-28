import React, { useState } from "react";
import { Search, Handbag, Menu, X } from "lucide-react";
import Button from "./Button";
import logo from "../assets/images/logo-black.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    window.open("https://www.google.com");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    // Sticky is important for the overlay mobile menu
    <nav className="sticky top-0 w-full bg-white z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

        {/* ================= TOP NAVBAR ================= */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="TeeSpace Logo"
              className="h-6 sm:h-8 w-auto"
            />
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700">

            <li className="cursor-pointer hover:text-myGreen transition-colors">
              Home
            </li>

            <li className="cursor-pointer hover:text-myGreen transition-colors">
              TeeSpace
            </li>

            <li className="cursor-pointer hover:text-myGreen transition-colors">
              Shop
            </li>

            <li className="cursor-pointer hover:text-myGreen transition-colors">
              Blog
            </li>

            <li className="cursor-pointer hover:text-myGreen transition-colors">
              Pages
            </li>

            {/* Desktop Search */}
            <li className="hidden lg:block relative">
              {showSearch ? (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search here"
                  onBlur={() => setShowSearch(false)}
                  className="w-40 px-3 py-1 text-sm border-b border-gray-300 focus:outline-none focus:border-myGreen"
                />
              ) : (
                <button
                  onClick={() => setShowSearch(true)}
                  className="flex items-center gap-1 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
                >
                  <Search
                    size={18}
                    className="text-black hover:text-myGreen"
                  />
                </button>
              )}
            </li>
          </ul>

          {/* ================= RIGHT SECTION ================= */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Cart + Hotline */}
            <div className="hidden sm:flex items-center gap-2 text-sm">

              {/* Cart */}
              <div className="relative mr-2">
                <span className="flex items-center justify-center rounded-full p-2.5 bg-gray-200 cursor-pointer hover:bg-gray-300">
                  <Handbag size={20} />
                </span>

                {/* Cart Badge */}
                <span className="absolute -top-1 -right-1 bg-myGreen text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px]">
                  2
                </span>
              </div>

              {/* Hotline */}
              <div className="leading-tight hidden md:block">
                <p className="text-[10px] text-gray-400">
                  HOTLINE:
                </p>

                <p className="font-semibold text-xs md:text-sm text-gray-800">
                  001 1900 8188
                </p>
              </div>
            </div>

            {/* Sign Up - Desktop */}
            <div className="hidden sm:block">
              <Button
                style=""
                label="Sign Up"
                type="button"
                variant="tertiary"
                onClick={handleClick}
              />
            </div>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-myGreen transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div
            className="
              absolute
              top-full
              left-0
              right-0
              md:hidden
              bg-white
              shadow-lg
              border-t
              border-gray-200
              z-50
              overflow-y-auto
              max-h-[calc(100vh-4rem)]
            "
          >
            <div className="px-4 sm:px-6 py-5">

              <ul className="flex flex-col gap-5 text-sm font-medium text-gray-700">

                {/* Home */}
                <li
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:text-myGreen transition-colors"
                >
                  Home
                </li>

                {/* TeeSpace */}
                <li
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:text-myGreen transition-colors"
                >
                  TeeSpace
                </li>

                {/* Shop */}
                <li
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:text-myGreen transition-colors"
                >
                  Shop
                </li>

                {/* Blog */}
                <li
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:text-myGreen transition-colors"
                >
                  Blog
                </li>

                {/* Pages */}
                <li
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:text-myGreen transition-colors"
                >
                  Pages
                </li>

                {/* Mobile Search */}
                <li className="pt-2">
                  <div className="flex items-center gap-2 border-b border-gray-300 pb-2">

                    <Search
                      size={18}
                      className="text-gray-600"
                    />

                    <input
                      type="text"
                      placeholder="Search here"
                      className="w-full text-sm focus:outline-none"
                    />

                  </div>
                </li>

                {/* Mobile Cart + Hotline */}
                <li className="flex items-center gap-3 pt-2">

                  {/* Cart */}
                  <div className="relative">
                    <span className="flex items-center justify-center rounded-full p-2.5 bg-gray-200">
                      <Handbag size={20} />
                    </span>

                    <span className="absolute -top-1 -right-1 bg-myGreen text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px]">
                      2
                    </span>
                  </div>

                  {/* Hotline */}
                  <div className="leading-tight">
                    <p className="text-[10px] text-gray-400">
                      HOTLINE:
                    </p>

                    <p className="font-semibold text-xs text-gray-800">
                      001 1900 8188
                    </p>
                  </div>

                </li>

                {/* Mobile Sign Up */}
                <li className="pt-2">
                  <Button
                    style=""
                    label="Sign Up"
                    type="button"
                    variant="tertiary"
                    onClick={handleClick}
                  />
                </li>

              </ul>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
