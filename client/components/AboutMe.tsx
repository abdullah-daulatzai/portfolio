export default function AboutMe() {
  return (
    <>
      <div className="py-10">
        <div className="font-audiowide sm:text-md flex flex-col items-center justify-center space-y-2 md:flex-row">
          <div className="text-shadow font-sans text-4xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-3xl">
            <h1 className="font-audiowide inline text-white">Hello,</h1>
            <h2 className="mt-4 font-bold text-white sm:mt-2">
              I'm <span className="text-blue-500">Abdullah!</span>
            </h2>
          </div>
          <div className="mt-2 sm:mt-2 md:mt-4  lg:mt-4">
            <h2 className="font-montserrat text-xl tracking-wider text-white sm:text-3xl md:text-4xl lg:ml-16 lg:text-2xl">
              FULL STACK DEVELOPER
            </h2>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-10 md:flex-row md:gap-x-10">
          <div className="flex-none self-center md:ml-[3%] lg:ml-[15%]">
            <img
              src="public/Myimg.png"
              alt="Photo"
              className=" h-auto w-full max-w-xs border-4 border-double border-green-700 bg-gray-400 object-cover hover:bg-blue-900 md:w-60 lg:pt-20"
            />
          </div>
          <div className="max-w-3xl px-4 sm:px-8 md:px-0 lg:mt-32">
            <h3 className="font-audiowide text-2xl font-semibold text-blue-300">
              About Me
            </h3>
            <p className="lg:text-md sm:text-md mt-4 max-w-xl  text-justify text-base text-gray-300">
              Kia ora I’m a Full-Stack Developer based in Auckland with a degree
              in Computer Science and Technology. My journey into software
              development has been driven by a love for solving problems,
              creating smart solutions, and constantly learning something new.
              I’m always up for challenges that help me grow and improve. I
              really value teamwork and open communication because I think the
              best ideas come from sharing and working together. I’m excited to
              work on projects that make a difference, learn from others, and
              use technology to have a positive impact. When I’m not coding,
              you’ll probably find me out on a long walk or at a social event,
              chatting with like-minded people. Thanks for stopping by my site!
            </p>
            <div className="mt-[10%] ">
              <a
                className="  hover:brightness-15  rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-5 pr-5 pt-2 text-white transition-all duration-300 hover:scale-110 hover:text-yellow-500"
                href="https://drive.google.com/file/d/16LQcXlhu0A5csPnSUvJ5OPx4cKiOLgPR/view?usp=sharing"
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
