import Nav from '../Nav'

export default function Stalgic() {
  return (
    <>
      <header className="flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>

      <div className="mt-44 flex min-h-screen flex-col  ">
        <div className=" flex flex-col items-center">
          <h1 className="font-audiowide font-semibold  text-blue-300 sm:text-3xl lg:text-6xl">
            Stalgic
          </h1>
        </div>
        <div className="mt-40 flex flex-col  sm:ml-[0px] sm:pl-[25px]  lg:ml-[270px]">
          <h1 className="text-3xl font-bold text-white ">
            Project Description:
          </h1>
          <p className="lg:text-md mt-12 pb-4  text-gray-200 sm:max-w-sm sm:text-lg lg:max-w-3xl ">
            Stalgic is a digital memory capsule, inspired by the age-old
            tradition of burying a box of personal mementos to preserve memories
            for future generations. The idea behind Stalgic is to offer a
            modern-day version of this practice, allowing users to capture and
            store special moments in a secure, virtual space. Whether it’s a
            cherished photograph, a meaningful note, or a favourite memory,
            Stalgic provides a way to safeguard those experiences for later
            reflection. Created in just five days by a dedicated team of three,
            this app solves the problem of losing memories in an increasingly
            digital world, offering a simple yet meaningful way to hold on to
            what matters most.
          </p>
        </div>
      </div>
    </>
  )
}
