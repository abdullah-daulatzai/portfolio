import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
export default function AboutMe() {
  return (
    <>
      <div className="py-10" id="about-me">
        <div className="sm:text-md flex flex-col items-center justify-center space-y-2 font-audiowide md:flex-row">
          <div className="text-shadow font-sans font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-3xl">
            <h1 className="inline animate-fade-in font-audiowide text-4xl text-white">
              Kia ora,
            </h1>
            <h2 className="mt-4 animate-slide-up text-4xl font-bold text-white sm:mt-2">
              I'm <span className="text-blue-500">Abdullah!</span>
            </h2>
          </div>
          <div className="mt-2 animate-slide-up sm:mt-2 md:mt-4 lg:mt-4">
            <h2 className="font-montserrat text-2xl tracking-wider text-white sm:text-3xl md:text-4xl lg:ml-16 lg:text-2xl">
              FULL STACK DEVELOPER
            </h2>
          </div>
        </div>
        <div className="ml-16 mt-6 flex flex-row items-center space-x-2">
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="animate-bounce text-yellow-400"
            style={{ fontSize: '24px' }}
          />
          <p className="animate-fadeIn font-audiowide  text-lg text-white">
            Auckland, New Zealand
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-y-10 md:flex-row md:gap-x-10">
          <div className="mb-16 h-[350px] w-[270px] flex-none self-center md:ml-[3%] lg:ml-[15%]">
            <img
              src="/portfolio/pro.png"
              alt="Photo"
              className="h-full w-full border-4 border-double border-green-700 bg-[#CCCDCD] object-cover  transition duration-300 ease-in-out hover:bg-opacity-95 md:w-96 lg:w-[500px] lg:pt-20"
            />
          </div>

          <div className="max-w-md px-8 sm:px-2 md:px-0 lg:mt-32">
            <h3 className="font-audiowide text-3xl font-semibold text-blue-300">
              About Me
            </h3>
            <p className="sm:text-md lg:text-md mt-4 max-w-xl text-justify text-gray-200">
              I am Abdullah, a curious Full-Stack Developer based in Auckland
              with a degree in Computer Science and Technology. My journey into
              software development has been driven by a love for solving
              problems, creating smart solutions, and continuously learning new
              things. I am always up for challenges that help me grow and
              improve. I highly value teamwork and open communication because I
              believe the best ideas come from collaboration and shared
              knowledge. I am excited to work on projects that make a
              difference, learn from others, and use technology to create a
              positive impact. When I am not coding, you will probably find me
              on a long walk or at a social event, chatting with like-minded
              people. Thank you for checking out my portfolio!
            </p>
            <div className="mt-[10%]">
              <a
                className="hover:brightness-15 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-5 pr-5 pt-2 text-white transition-all duration-300 hover:scale-110 hover:text-yellow-500"
                href="https://drive.google.com/file/d/1o5tdrMtHRrWbiXGZdPXZq-9Twi6cC7gX/view?usp=sharing"
              >
                My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
