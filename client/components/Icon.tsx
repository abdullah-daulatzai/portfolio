import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faExpress } from '@fortawesome/free-brands-svg-icons'

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
      <div className="flex flex-col items-center text-green-400">
        <FontAwesomeIcon icon={faExpress} className="text-5xl" />
        <p className="mt-2 text-white">Express.Js</p>
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
