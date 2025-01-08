import Nav from '../Nav'

export default function WeekWise() {
  return (
    <>
      <header className="flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>

      <div className="mt-44 flex min-h-screen flex-col ">
        <div className=" flex flex-col items-center">
          <h1 className="font-audiowide text-6xl font-semibold text-blue-300">
            Week Wise
          </h1>
        </div>
      </div>
    </>
  )
}
