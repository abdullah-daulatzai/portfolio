import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export default function Icon() {
  return (
    <div className="flex w-full justify-between gap-16 px-[17%]">
      <div className="flex flex-col items-center text-blue-400">
        <FontAwesomeIcon icon={faReact} className="text-5xl" />
        <p className="mt-2 text-white">React</p>
      </div>
      <div className="flex flex-col items-center text-blue-400">
        <FontAwesomeIcon icon={faReact} className="text-5xl" />
        <p className="mt-2 text-white">React</p>
      </div>
    </div>
  )
}
