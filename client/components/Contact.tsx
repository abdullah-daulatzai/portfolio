export default function Contact() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4">
        <form className="w-full max-w-2xl rounded-lg p-6 ">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              required
              className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              required
              className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-[170px] rounded-lg bg-blue-600 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
