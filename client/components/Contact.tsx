export default function Contact() {
  return (
    <>
      <div className="ml-[25%] flex  min-h-screen  ">
        <form className=" rounded-lg  p-6 shadow-lg">
          <div className="mb-4 ">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-2  block w-[380%] rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-2 block w-[380%] rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-200"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-2 block w-[380%] rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full items-center justify-center rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
