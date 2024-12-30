export default function Project() {
  return (
    <>
      <div className="justify-even flex flex-wrap justify-center gap-12 p-12">
        <div className="flex w-full flex-col rounded-md border border-gray-800 bg-[#141414] p-6 sm:w-full md:w-1/3 lg:w-1/4">
          <img
            src="https://via.placeholder.com/300"
            alt="Project Image"
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-white">
            Project Title 1
          </h3>
          <p className="mt-2 text-gray-400">
            This is a description of the project. You can include details about
            what the project is about, technologies used, and any other relevant
            information.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex w-full flex-col rounded-md border border-gray-800 bg-[#141414] p-6 sm:w-full md:w-1/3 lg:w-1/4">
          <img
            src="https://via.placeholder.com/300"
            alt="Project Image"
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-white">
            Project Title 2
          </h3>
          <p className="mt-2 text-gray-400">
            This is a description of the project. You can include details about
            what the project is about, technologies used, and any other relevant
            information.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex w-full flex-col rounded-md border border-gray-800 bg-[#141414] p-6 sm:w-full md:w-1/3 lg:w-1/4">
          <img
            src="https://via.placeholder.com/300"
            alt="Project Image"
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-white">
            Project Title 3
          </h3>
          <p className="mt-2 text-gray-400">
            This is a description of the project. You can include details about
            what the project is about, technologies used, and any other relevant
            information.
          </p>
        </div>
      </div>
    </>
  )
}
