import React, { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full p-4 transition-all duration-300 md:p-10 ${
        isScrolled
          ? 'bg-white-200 shadow-xs backdrop-blur-sm'
          : 'bg-transparent shadow-none backdrop-blur-none'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo or Brand */}
        <div className="font-bold text-white">Logo</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`flex space-x-6 text-white md:space-x-20 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
        >
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="">Home</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#about-me">About Me</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#my_projects">Portfolio</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="https://drive.google.com/file/d/16LQcXlhu0A5csPnSUvJ5OPx4cKiOLgPR/view?usp=sharing">
              My CV
            </a>
          </li>
        </ul>

        <a
          className="ml-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-3 pr-3 pt-2 text-white transition-all duration-300 hover:scale-105 hover:brightness-95"
          href="#contact"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu (hidden on larger screens) */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 bg-white py-4 text-black">
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="">Home</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#about-me">About Me</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#my_projects">Portfolio</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="https://drive.google.com/file/d/16LQcXlhu0A5csPnSUvJ5OPx4cKiOLgPR/view?usp=sharing">
              My CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
