export default function AboutMe() {
  return (
    <>
      <div className="text-cente  py-10">
        <div className="font-audiowide flex flex-row items-center justify-center space-y-2">
          <div className="text-shadow place-content-around font-sans text-4xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-3xl">
            <h1 className="font-audiowide inline text-white">Hello,</h1>
            <h2 className="mt-4 font-bold text-white sm:mt-2">
              I'm <span className="text-blue-500">Abdullah!</span>
            </h2>
          </div>
          <div className="mt-2 sm:mt-2 md:mt-4 lg:mt-4">
            <h2 className="ml-2 text-xl tracking-wider text-white sm:ml-8 sm:text-3xl md:ml-16 md:text-4xl lg:text-2xl">
              FULL STACK DEVELOPER
            </h2>
          </div>
        </div>
        <div className="  mt-32 flex flex-row">
          <div>
            Photo
            <img src="public/Myimg.png" alt="abdullah" />
          </div>
          <div className="ml-6">
            About Me
            <div className="">
              <p className="">
                I’m a Full-Stack Developer with a degree in Computer Science and
                Technology, and I’ve gained practical experience in building
                applications using a modern tech stack. I’m passionate about
                writing clean, efficient, and maintainable code, and I’m always
                looking for ways to improve. I enjoy learning new technologies,
                taking on challenges, and I’m always thirsty to learn more and
                grow my skills. Driven by curiosity and a passion for growth,
                I’m eager to contribute to innovative projects and build
                impactful digital solutions. I really value working with others,
                as I believe great ideas come from collaboration and open
                communication. I’m excited to get involved in meaningful
                projects, learn from others, and develop my career as a
                developer. Technologies I’ve worked with include: HTML, CSS,
                Bootstrap, Tailwind CSS JavaScript, React.js, TypeScript
                Express.js, Node.js, C#, ASP.Net Core MVC SQLite, MySQL, Git,
                Superagent Thanks for visiting my site!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
