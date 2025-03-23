import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
      <div className="flex items-center justify-between md:justify-center">
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

        {/* Navbar Links for Large Screens */}
        <ul className={`hidden space-x-6 text-white md:flex md:space-x-20`}>
          <Link to="/">
            <li className="hover:scale-105 hover:text-blue-500">Home</li>
          </Link>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#about-me">About Me</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#my_projects">Portfolio</a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="https://drive.google.com/file/d/1V7yn40erSvZsi7l1BRUorUZdQ04NbLrZ/view?usp=sharing">
              My CV
            </a>
          </li>

          <li>
            <a
              className="ml-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-3 pr-3 pt-2 text-white transition-all duration-300 hover:scale-105 hover:brightness-95"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Transparent Blue Background and Backdrop Effects */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{
          position: 'absolute',
          top: '4rem',
          left: '0',
          width: 'auto',
        }}
      >
        <ul
          className="backdrop-brightness-70 flex flex-col items-start space-y-4 rounded-md 
    bg-blue-800 bg-opacity-30 py-6 pl-4 pr-8 text-sm font-medium text-white backdrop-blur-sm"
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
            <a href="https://drive.google.com/file/d/1V7yn40erSvZsi7l1BRUorUZdQ04NbLrZ/view?usp=sharing">
              My CV
            </a>
          </li>
          <li className="hover:scale-105 hover:text-blue-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
