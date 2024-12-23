import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Icon() {
  return (
    <div className="flex w-full justify-between gap-4 px-[17%]">
      <div className="flex flex-col items-center text-blue-400">
        <FontAwesomeIcon icon={faReact} className="text-5xl" />
        <p className="mt-2 text-white">React</p>
      </div>
      <div className="flex flex-col items-center text-yellow-300">
        <FontAwesomeIcon icon={faJs} className="text-5xl" />
        <p className="mt-2 text-white">JavaScript</p>
      </div>
      <div className="flex flex-col items-center text-green-400">
        <FontAwesomeIcon icon={faNode} className="text-5xl" />
        <p className="mt-2 text-white">Node.Js</p>
      </div>
      <div className="mt-[-2%] flex flex-col items-center text-green-400">
        <img src="public/express.png" alt="express.js" />
        <p className="mt-2 text-white">Express.Js</p>
      </div>
      <div className=" flex flex-col  items-center text-orange-500 lg:mt-[-1%] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="h-16 w-16 text-gray-700"
        >
          <g fill="#8f069b">
            <circle cx="40" cy="40" r="60" />
            <text
              x="50%"
              y="50%"
              fontSize="35"
              textAnchor="middle"
              dy=".3em"
              fill="white"
            >
              C#
            </text>
          </g>
        </svg>
        <p className="mt-2 text-white">C#</p>
      </div>
      <div className="flex flex-col items-center text-orange-500">
        <FontAwesomeIcon icon={faHtml5} className="text-5xl" />
        <p className="mt-2 text-white">HTML</p>
      </div>
      <div className="flex flex-col items-center text-sky-400">
        <FontAwesomeIcon icon={faCss} className="text-5xl" />
        <p className="mt-2 text-white">CSS</p>
      </div>
    </div>
  )
}
