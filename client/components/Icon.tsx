import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'

export default function Icon() {
  return (
    <>
      <div className="mx-auto flex max-w-screen-lg flex-wrap justify-evenly gap-8 px-4 sm:px-6 lg:px-16">
        <div className=" flex flex-col items-center text-blue-400 ">
          <FontAwesomeIcon
            icon={faReact}
            className="text-5xl hover:scale-125"
          />
          <p className="mt-2 text-white">React</p>
        </div>
        <div className="flex flex-col items-center text-yellow-300">
          <FontAwesomeIcon icon={faJs} className="text-5xl hover:scale-125" />
          <p className="mt-2 text-white">JavaScript</p>
        </div>
        <div className="flex w-12 flex-col items-center text-yellow-300">
          <img
            src="/portfolio/typescript.svg"
            alt="TypeScript"
            className="hover:scale-125"
          />
          <p className="mt-2 text-white">TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-green-400">
          <FontAwesomeIcon icon={faNode} className="text-5xl hover:scale-125" />
          <p className="mt-2 text-white">Node.Js</p>
        </div>
        <div className="mt-[-2%] flex flex-col items-center text-green-400">
          <img
            src="/portfolio/express.png"
            alt="express.js"
            className="hover:scale-125"
          />
          <p className="mt-2 text-white ">Express.Js</p>
        </div>
        <div className=" flex flex-col  items-center text-orange-500  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-16 w-16 text-gray-700 hover:scale-125"
          >
            <g fill="#8f069b">
              <circle cx="30" cy="30" r="40" />
              <text
                x="40%"
                y="40%"
                fontSize="35"
                textAnchor="middle"
                dy=".3em"
                fill="white"
              >
                C#
              </text>
            </g>
          </svg>
          <p className=" text-white sm:mt-[-11%]">C#</p>
        </div>
        <div className="flex flex-col items-center text-orange-500">
          <FontAwesomeIcon
            icon={faHtml5}
            className="text-5xl hover:scale-125"
          />
          <p className="mt-2 text-white">HTML</p>
        </div>

        <div className="flex flex-col items-center text-sky-400">
          <FontAwesomeIcon icon={faCss} className="text-5xl hover:scale-125" />
          <p className="mt-2 text-white">CSS</p>
        </div>
        <div className=" mt-2 flex flex-col items-center text-orange-500">
          <img
            src="/portfolio/tailwind.png"
            alt=" Tailwind CSS"
            className="w-14 hover:scale-125"
          />
          <p className="mt-3 text-white ">Tailwind CSS</p>
        </div>
        <div className="mt-[-2%] flex flex-col items-center text-green-400">
          <img
            src="/portfolio/sqlite.svg"
            alt="SQLite"
            className="w-16 hover:scale-125"
          />
          <p className="mt-2 text-white ">SQLite</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/knex.svg"
            alt="Knex"
            className="w-12 hover:scale-125"
          />
          <p className="mt-2 text-white ">Knex</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/git.svg"
            alt="Git"
            className="w-12 hover:scale-125"
          />
          <p className="mt-2 text-white ">Git</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/mongodb.svg"
            alt="MongoDB"
            className="w-12 hover:scale-125 hover:scale-125"
          />
          <p className="mt-2 text-white ">MongoDB</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/github.svg"
            alt="GitHub"
            className="w-12 text-gray-100  hover:scale-125"
          />
          <p className="mt-2 text-white ">GitHub</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/vitest.png"
            alt="Vitest"
            className="w-12 text-gray-100  hover:scale-125"
          />
          <p className="mt-3 text-white ">Vitest</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/mysql.svg"
            alt="MySQL"
            className="w-14 text-gray-100 hover:scale-125"
          />
          <p className=" text-white ">MySQL</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/postman.svg"
            alt="Postman"
            className="w-14 text-gray-100 hover:scale-125 "
          />
          <p className=" text-white ">Postman</p>
        </div>
        <div className=" flex flex-col items-center text-green-400">
          <img
            src="/portfolio/auth0.png"
            alt="Auth0"
            className="w-14 text-gray-100 hover:scale-125 "
          />
          <p className=" text-white  ">Auth0</p>
        </div>
      </div>
    </>
  )
}
