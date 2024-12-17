export default function Nav() {
  return (
    <>
      <div className="flex items-center justify-between p-10 ">
        <ul className="flex space-x-20 text-white">
          <li className="hover:text-blue-500">
            <a href="">Home</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="">About Me</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="">Portfolio</a>
          </li>
          <li className="hover:text-blue-500">
            <a href="">My CV</a>
          </li>
          <a
            className="text-white-900 rounded-md bg-gradient-to-r from-blue-500 to-blue-800 pb-2 pl-3 pr-3 pt-2 transition-all duration-300 hover:scale-105 hover:brightness-95"
            href="/#contact"
          >
            Contact
          </a>
        </ul>
      </div>
    </>
  )
}
