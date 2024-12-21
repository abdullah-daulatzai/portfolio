export default function AboutMe() {
  return (
    <>
      <div className="py-10">
        <div className="font-audiowide flex flex-col items-center justify-center space-y-2 md:flex-row">
          <div className="text-shadow font-sans text-4xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-3xl">
            <h1 className="font-audiowide inline text-white">Hello,</h1>
            <h2 className="mt-4 font-bold text-white sm:mt-2">
              I'm <span className="text-blue-500">Abdullah!</span>
            </h2>
          </div>
          <div className="mt-2 sm:mt-2 md:mt-4 lg:mt-4">
            <h2 className="text-xl tracking-wider text-white sm:text-3xl md:text-4xl lg:text-2xl">
              FULL STACK DEVELOPER
            </h2>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-y-10 md:flex-row md:gap-x-10">
          <div className="flex-none self-center md:ml-[3%] lg:ml-[15%]">
            <img
              src="public/Myimg.png"
              alt="Photo"
              className=" border-lightBlue-500 h-auto w-full max-w-xs border-4 border-double bg-gray-400 object-cover hover:bg-blue-900 md:w-60 lg:pt-20"
            />
          </div>
          <div className="max-w-3xl px-4 sm:px-8 md:px-0 lg:mt-32">
            <h3 className="font-audiowide text-2xl font-semibold text-blue-300">
              About Me
            </h3>
            <p className="lg:text-md sm:text-md mt-4 max-w-xl  text-justify text-base text-gray-300">
              I’m a Full-Stack Developer with a degree in Computer Science and
              Technology, and I’ve gained practical experience in building
              applications using a modern tech stack. I’m passionate about
              writing clean, efficient, and maintainable code, and I’m always
              looking for ways to improve. I enjoy learning new technologies,
              taking on challenges, and I’m always thirsty to learn more and
              grow my skills. Driven by curiosity and a passion for growth, I’m
              eager to contribute to innovative projects and build impactful
              digital solutions. I really value working with others, as I
              believe great ideas come from collaboration and open
              communication. I’m excited to get involved in meaningful projects,
              learn from others, and develop my career as a developer.
              Technologies I’ve worked with include: HTML, CSS, Bootstrap,
              Tailwind CSS, JavaScript, React.js, TypeScript, Express.js,
              Node.js, C#, ASP.Net Core MVC, SQLite, MySQL, Git, Superagent.
              Thanks for visiting my site!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
