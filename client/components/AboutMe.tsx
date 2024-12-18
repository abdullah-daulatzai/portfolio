export default function AboutMe() {
  return (
    <>
      <div className="py-10 text-center">
        <div className="font-audiowide flex flex-col items-center justify-center space-y-2">
          <div className="text-shadow place-content-around font-sans text-4xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-3xl">
            <h1 className="font-audiowide inline text-white">Hello,</h1>
            <h2 className="mt-4 font-bold text-white sm:mt-2">
              I'm <span className="text-blue-500">Abdullah!</span>
            </h2>
          </div>
          <div className="mt-2 sm:mt-2 md:mt-4 lg:mt-4">
            <h2 className="text-2xl font-bold tracking-widest text-white sm:text-3xl md:text-4xl lg:text-4xl">
              FULL STACK DEVELOPER
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
