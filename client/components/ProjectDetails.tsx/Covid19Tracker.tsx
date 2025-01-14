import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../Nav'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Covid19Tracker() {
  return (
    <>
      <header className="flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>

      <div className="mt-32 flex min-h-screen flex-col px-4 pb-16 sm:px-8 md:px-16">
        <div className="flex flex-col items-center lg:mt-12">
          <h1 className="font-audiowide text-2xl font-semibold text-blue-300 sm:text-3xl lg:text-6xl">
            Covid19 Tracker
          </h1>
        </div>
        <div className="  flex flex-col sm:ml-0 sm:mt-16 sm:pl-4 lg:ml-[230px]">
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            Project Description:
          </h1>
          <p className="mt-4 pb-4 text-sm text-gray-200 sm:mt-8 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl lg:text-[16px]">
            The Covid19 Tracker app was built during the Covid-19 pandemic to
            provide real-time updates on the global situation. It shows the
            number of confirmed cases, recoveries, and deaths worldwide, all
            based on live data from publicly available APIs. This was my first
            time working with public APIs in React, and it gave me hands-on
            experience with consuming real-time data. The app also features
            charts that visually display the number of affected and deceased
            people. I used Chart.js to create these charts, making it easier for
            users to understand the data at a glance.
          </p>
          <p className="lg:text:md text-white"> Technology Stack:</p>
          <ul className="mt-4 list-inside list-disc text-white ">
            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                {' '}
                React:
              </span>{' '}
              &nbsp; Chosen for building dynamic and interactive user
              interfaces.
            </li>
            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                Material UI:{' '}
              </span>{' '}
              &nbsp; elegant styling.
            </li>
            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                {' '}
                Javascript:
              </span>{' '}
              &nbsp; For managing application logic and interactivity.
            </li>

            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                Chart.js:{' '}
              </span>{' '}
              &nbsp; Implemented to visually represent data through interactive
              charts, offering an engaging and dynamic way to display
              statistical information.
            </li>
          </ul>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">Challenges and Solutions:</h1>
            <p className="mt-8 pb-4 text-sm text-gray-300 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl lg:text-[16px]">
              As this was my first React project using public APIs, I initially
              struggled with fetching and updating real-time data. After
              researching and learning the basics of{' '}
              <span className="font-bold text-green-300">Axios </span>, I used
              it alongside{' '}
              <span className="font-bold text-green-300">useEffect </span> and{' '}
              <span className="font-bold text-green-300"> useState </span> hooks
              to ensure smooth data fetching and updates, with setInterval
              managing automatic refreshes. I also had difficulty displaying the
              data statistically, but after researching and comparing various
              chart libraries, I chose{' '}
              <span className="font-bold text-green-300">Chart.js </span> for
              its simplicity and flexibility, which allowed me to present the
              data clearly and effectively.
            </p>
          </div>
          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">My Learning:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              During this project, I learnt how to optimise database performance
              through{' '}
              <span className="font-bold text-green-300">indexing </span>,
              explored the use of the{' '}
              <span className="font-bold text-green-300">
                {' '}
                React Circular Progressive Bar library{' '}
              </span>{' '}
              to visually track progress, and began learning how to use{' '}
              <span className="font-bold text-green-300"> Chart.js </span> to
              display various charts for presenting data in a clear and engaging
              way.
            </p>
          </div>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">Project Management:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              I utilised GitHub Projects to organise my workflow into manageable
              tickets, allowing me to track progress efficiently.
            </p>
          </div>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">My Contributions:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              As the sole developer, I took on all aspects of the project, from
              feature development and database optimisation to integrating
              visualisation tools such as the React Circular Progressive Bar and
              Chart.js.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center transition-transform duration-300 hover:scale-105">
          <a href="https://github.com/abdullah-daulatzai/weekwise">
            <div className="flex flex-col items-center justify-center rounded-md border border-gray-800 bg-gray-400 p-4 hover:bg-gray-500">
              <div className="flex w-16 flex-col items-center text-gray-900">
                <FontAwesomeIcon icon={faGithub} className="text-7xl" />
                <br />
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-2xl text-gray-800"
                />
                <br />
              </div>

              <p className="max-w-full text-center text-sm sm:text-base lg:text-xl">
                Click here to see the source code
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
