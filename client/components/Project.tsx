import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Project() {
  return (
    <>
      <div
        id="my_projects"
        className="justify-even flex  h-full flex-wrap justify-center gap-12 p-12"
      >
        <div className="flex  flex-col rounded-md border border-gray-800 bg-[#141414] pl-3 pr-3  pt-16 transition-transform duration-300 hover:scale-105 hover:bg-purple-900  sm:w-full md:w-1/3 lg:h-[490px] lg:w-[30%]">
          <Link to="/stalgic">
            <div className=" flex justify-end">
              <a
                href=""
                className="mt-[-50px] text-3xl text-gray-300 hover:text-green-400"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </div>
            <img
              src="/portfolio/Stalgic.png"
              alt="WeekWise"
              className="h-38 w-full  rounded-md"
            />
            <h3 className="mt-4 text-center text-xl font-semibold text-white">
              Stalgic
            </h3>

            <div className="mx-auto mt-4 flex max-w-screen-lg flex-wrap justify-evenly gap-2 px-4 sm:px-6 lg:px-6">
              <Link to="weekwise">
                <div className="flex flex-col items-center text-yellow-300">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="text-3xl hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex w-8 flex-col items-center text-yellow-300">
                <img
                  src="/portfolio/typescript.svg"
                  alt="TypeScript"
                  className="hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-blue-400 ">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-3xl hover:scale-105"
                />
              </div>
              <div className="mt-[-2%] flex  w-10 flex-col items-center text-green-400">
                <img
                  src="/portfolio/express.png"
                  alt="express.js"
                  className="hover:scale-105"
                />
              </div>
              <div className="mt-[-3%] flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/sqlite.svg"
                  alt="SQLite"
                  className="w-12 hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/knex.svg"
                  alt="Knex"
                  className="w-8 hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="flex  flex-col rounded-md border border-gray-800 bg-[#141414] pl-3 pr-3  pt-16 transition-transform duration-300 hover:scale-105 hover:bg-purple-900  sm:w-full md:w-1/3 lg:h-[490px] lg:w-[30%]">
          <Link to="covid19">
            <div className=" flex justify-end">
              <a
                href=""
                className="mt-[-50px] text-3xl text-gray-300 hover:text-green-400"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </div>
            <img
              src="/portfolio/covid19.png"
              alt="WeekWise"
              className="h-38 w-full  rounded-md"
            />
            <h3 className="mt-4 text-center text-xl font-semibold text-white">
              Covid19 Tracker
            </h3>
            <div className="mx-auto mt-4 flex max-w-screen-lg flex-wrap justify-evenly gap-2 px-4 sm:px-6 lg:px-4">
              <div className="flex flex-col items-center text-yellow-300">
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-3xl hover:scale-105"
                />
              </div>
              <div className="flex w-8 flex-col items-center text-yellow-300">
                <img
                  src="/portfolio/typescript.svg"
                  alt="TypeScript"
                  className="hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-blue-400 ">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-3xl hover:scale-105"
                />
              </div>
              <div className="mt-[-2%] flex  w-10 flex-col items-center text-green-400">
                <img
                  src="/portfolio/express.png"
                  alt="express.js"
                  className="hover:scale-105"
                />
              </div>
              <div className="mt-[-3%] flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/sqlite.svg"
                  alt="SQLite"
                  className="w-12 hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/knex.svg"
                  alt="Knex"
                  className="w-8 hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-blue-400 ">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-3xl hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col rounded-md border border-gray-800 bg-[#141414] pl-3 pr-3 pt-16 transition-transform  duration-300 hover:scale-105 hover:bg-purple-900  sm:w-full md:w-1/3 lg:h-[490px] lg:w-[30%]">
          <Link to="/weekwise">
            <div className=" flex justify-end">
              <a
                href=""
                className="mt-[-50px] text-3xl text-gray-300 hover:text-green-400"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </div>

            <img
              src="/portfolio/weekwise.png"
              alt="WeekWise"
              className="h-38 w-full  rounded-md"
            />

            <h3 className="mt-4 text-center text-xl font-semibold text-white">
              WeekWise
            </h3>
            <div className="mx-auto mt-4 flex max-w-screen-lg flex-wrap justify-evenly gap-2 px-4 sm:px-6 lg:px-4">
              <div className="flex flex-col items-center text-yellow-300">
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-3xl hover:scale-105"
                />
              </div>
              <div className="flex w-8 flex-col items-center text-yellow-300">
                <img
                  src="/portfolio/typescript.svg"
                  alt="TypeScript"
                  className="hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-blue-400 ">
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-3xl hover:scale-105"
                />
              </div>
              <div className="mt-[-2%] flex  w-10 flex-col items-center text-green-400">
                <img
                  src="/portfolio/express.png"
                  alt="express.js"
                  className="hover:scale-105"
                />
              </div>
              <div className="mt-[-3%] flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/sqlite.svg"
                  alt="SQLite"
                  className="w-12 hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-green-400">
                <img
                  src="/portfolio/knex.svg"
                  alt="Knex"
                  className="w-8 hover:scale-105"
                />
              </div>
              <div className=" flex flex-col items-center text-blue-400 ">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-3xl hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
