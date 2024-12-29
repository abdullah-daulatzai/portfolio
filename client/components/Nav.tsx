import React, { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-center p-4 transition-all duration-300 md:p-10 
          ${isScrolled ? 'bg-white-200  shadow-xs backdrop-blur-sm' : 'bg-transparent shadow-none backdrop-blur-none'}
        `}
      >
        <ul className="flex space-x-6 text-white md:space-x-20">
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="">Home</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#about-me">About Me</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#my-projects">Portfolio</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="https://drive.google.com/file/d/16LQcXlhu0A5csPnSUvJ5OPx4cKiOLgPR/view?usp=sharing">
              My CV
            </a>
          </li>
        </ul>

        <a
          className="ml-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-3 pr-3 pt-2 text-white transition-all duration-300 hover:scale-105 hover:brightness-95"
          href="/#contact"
        >
          Contact
        </a>
      </div>
    </>
  )
}
