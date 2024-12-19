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
          <div>Photo</div>
          <div className="ml-6">About Me</div>
        </div>
      </div>
    </>
  )
}
