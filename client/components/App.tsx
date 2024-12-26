import Nav from './Nav'
import AboutMe from './AboutMe'
import Icon from './Icon'
import Project from './Project'
import Contact from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function App() {
  return (
    <div className="app">
      <header className=" flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>
      <section className=" mt-32 flex w-screen items-center justify-center">
        <AboutMe />
      </section>

      <section className="mt-32 ">
        <div className=" mb-20 text-center">
          <p className="font-audiowide text-3xl text-blue-300 lg:text-4xl">
            ToolKit
          </p>
        </div>
        <Icon />
      </section>

      <section className="mt-32 ">
        <div className=" mb-20 text-center">
          <p className="font-audiowide text-3xl text-blue-300 lg:text-4xl">
            Projects
          </p>
        </div>
        <Project />
      </section>
      <section className="mt-32 ">
        <div className=" mb-20 text-center">
          <p className="font-audiowide text-3xl text-blue-300 lg:text-4xl">
            Contact Me
          </p>
          <div className=" lg:mt-10">
            <p className="text-md sm:text:sm text-white sm:mt-10">
              Want to get in touch? Here are the ways you can reach out!
            </p>
          </div>
          <div className="flex flex-row justify-center">
            <div className="  items-center text-blue-400 ">
              <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
            </div>
            <div className="  items-center text-green-400">
              <a href="https://github.com/abdullah-daulatzai">
                <img
                  src="public/github.svg"
                  alt="GitHub"
                  className="w-11 text-gray-100  hover:scale-125"
                />
              </a>
            </div>
            <a href="https://www.linkedin.com/in/abdullah-d-93032b124/">
              <div className="  items-center text-blue-400 ">
                <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
              </div>
            </a>
          </div>
        </div>
        <Contact />
      </section>
      <main className="p-4"></main>
    </div>
  )
}

export default App
