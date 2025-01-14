import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../Nav'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function WeekWise() {
  return (
    <>
      <header className="flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>

      <div className="mt-32 flex min-h-screen flex-col px-4 pb-16 sm:px-8 md:px-16">
        <div className="flex flex-col items-center lg:mt-12">
          <h1 className="font-audiowide text-2xl font-semibold text-blue-300 sm:text-3xl lg:text-6xl">
            WeekWise
          </h1>
        </div>
        <div className="mt-32 flex flex-col items-center">
          <iframe
            className="mx-auto mb-8 mt-4 h-56 w-full max-w-xl sm:h-72 md:h-80 lg:h-80"
            src="https://www.youtube.com/embed/2tGBF6trkS4?si=gY-7uPmer_RO-Xim"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="  flex flex-col sm:ml-0 sm:mt-16 sm:pl-4 lg:ml-[230px]">
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            Project Description:
          </h1>
          <p className="mt-4 pb-4 text-sm text-gray-200 sm:mt-8 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl lg:text-[16px]">
            WeekWise is a productivity app designed to help users manage both
            their finances and health with ease. It combines powerful features
            to offer insights into spending habits and physical well-being. The
            Finance Management tool is inspired by a TED talk on financial
            habits, where the speaker explained how small, repeated purchases —
            such as a $4 item bought impulsively — can add up significantly over
            time. I integrated a similar feature into WeekWise, which tracks
            user spending over a six-month period, highlighting unnecessary,
            repeated purchases. For instance, if I bought Monster Energy 70
            times at £4 each, the app would display the total cost and
            frequency, encouraging users to reconsider these habits, while also
            flagging purchases that are financially and health-wise detrimental.
            Another key feature is Weekly Activity Tracking, which monitors
            steps taken and provides weekly reports to help users stay on track
            with their fitness goals. Additionally, Daily Calorie Tracking
            calculates daily intake and expenditure, offering an easy-to-read
            overview of health trends. While WeekWise already offers valuable
            insights into both financial and physical habits, it is still under
            development, with several features yet to be implemented. Upcoming
            updates will further enhance its functionality, providing users with
            even more tools to improve their productivity and well-being.
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
              <span className="font-bold text-white lg:text-[16px]">CSS: </span>{' '}
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
                {' '}
                TypeScript:
              </span>{' '}
              &nbsp; Used for type safety and better development experience.
            </li>

            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                Express.js:
              </span>{' '}
              &nbsp; Chosen for setting up the backend server and handling HTTP
              requests.
            </li>
            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                SQLite3:{' '}
              </span>
              &nbsp; A lightweight relational database used for storing project
              data.
            </li>
            <li className="lg:text-[16px]">
              <span className="font-bold text-white lg:text-[16px]">
                Circular Progressive Bar:{' '}
              </span>{' '}
              &nbsp; Implemented to visually represent progress in a circular
              format, offering an engaging and dynamic way to display completion
              percentages.
            </li>
          </ul>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">Current Status:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              At present, WeekWise is still under development, with the Finance
              Management feature being the primary functionality. Future updates
              will introduce health and fitness tracking features, alongside
              other enhancements.
            </p>
          </div>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">Challenges and Solutions:</h1>
            <p className="mt-8 pb-4 text-sm text-gray-300 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl lg:text-[16px]">
              <span className="font-bold text-white"> 1:&nbsp;</span>{' '}
              <span className="font-bold text-gray-100">
                {' '}
                Identifying Unnecessary and Unhealthy Purchases:
              </span>{' '}
              Initially, I wasn’t certain how to automate the detection of
              unnecessary and unhealthy purchases, such as sugary drinks,
              snacks, or fast food, over a six-month period. After some thought,
              I devised a temporary solution using multiple conditional classes
              to track these items. However, I recognise that this is not the
              most efficient or scalable approach. In the future, I plan to
              integrate machine learning algorithms to train the system,
              enabling it to better understand purchasing patterns and make more
              accurate classifications.
              <br></br>
              <br></br>
              <span className="font-bold text-white"> 2:&nbsp;</span>{' '}
              <span className="font-bold text-gray-100">
                Optimising Database Performance:{' '}
              </span>{' '}
              As the app stores large volumes of data, performance could
              potentially degrade, especially when filtering through transaction
              records. To address this, I implemented database indexing, which
              greatly improved data retrieval speeds and ensured the app
              maintained optimal performance as it scaled.
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
              to visually track progress, and am continuing to learn how to use{' '}
              <span className="font-bold text-green-300">
                {' '}
                <a
                  href=" https://www.npmjs.com/package/recharts"
                  className="underline decoration-yellow-500"
                >
                  {' '}
                  Recharts{' '}
                </a>{' '}
              </span>{' '}
              and{' '}
              <span className="font-bold text-green-300">
                {' '}
                <a
                  href="https://www.npmjs.com/package/nivo"
                  className="underline decoration-yellow-500"
                >
                  Nivo{' '}
                </a>{' '}
              </span>{' '}
              to display various charts for presenting data in a clear and
              engaging way. These tools are essential for implementing the app's
              future features, which will be heavily focused on data
              visualisation and user engagement.
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
              As the sole developer, I am responsible for all aspects of the
              project, including initial feature development, database
              optimisation, and the integration of visualisation tools such as
              the React Circular Progressive Bar. Currently, the app’s Finance
              Management feature is live, and I am continuing to work on future
              updates to incorporate health and fitness tracking, along with
              further data visualisation improvements.
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
