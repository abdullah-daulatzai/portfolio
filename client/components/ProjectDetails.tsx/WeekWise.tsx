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
            <h1 className="font-bold text-white">Challenges and Solutions:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-300 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              During the project, I faced a few challenges. The first came when
              I was implementing the media upload feature. I realised that over
              time, a capsule could store a significant amount of media, and if
              I stored these directly in the database, it could severely affect
              performance. I also needed to ensure that users couldn’t upload
              malicious files. To tackle this, I decided to implement{' '}
              <a
                href="https://www.npmjs.com/package/multer"
                className="text-green-300 underline"
              >
                Multer
              </a>{' '}
              , a middleware for handling file uploads, which allowed me to
              securely manage the process. The second challenge was finding a
              way to keep users engaged with the app and ensuring they would
              receive their capsule data once it was unlocked. To address this,
              I implemented an email notification feature using{' '}
              <a
                href="https://nodemailer.com/"
                className="text-green-300 underline"
              >
                Nodemailer
              </a>{' '}
              and set up a{' '}
              <a
                href="https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
                className="text-green-300 underline"
              >
                Cron job
              </a>{' '}
              to send regular notifications, helping users stay connected with
              their capsules and receive updates at the right time.
            </p>
          </div>
          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">My Learning:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              What I really enjoyed about this project was the opportunity to
              learn and apply new technologies. I worked with{' '}
              <span className="font-bold text-green-300"> Multer </span> to
              securely handle file uploads and store them locally, which
              improved performance. I also used{' '}
              <span className="font-bold text-green-300"> Nodemailer </span> to
              set up email notifications, ensuring that users stayed engaged
              with their capsules. Additionally, I gained experience with{' '}
              <span className="font-bold text-green-300"> Cron Jobs </span>,
              automating tasks such as sending periodic email reminders. This
              project not only enhanced my technical skills but also taught me
              how to solve real-world problems efficiently, and I’m excited to
              apply these lessons in future work.
            </p>
          </div>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">Project Management:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              We used the Agile project management methodology, holding daily
              stand-ups to ensure consistent communication and alignment. For
              task management, we utilised GitHub Projects to organise our
              workflow into manageable tickets, allowing us to track progress
              efficiently. Additionally, we communicated both in person and via
              Discord to stay connected throughout the project.
            </p>
          </div>

          <div className="mt-8 text-xl sm:mt-16 sm:text-3xl">
            <h1 className="font-bold text-white">My Contributions:</h1>
            <p className="lg:text-md mt-8 pb-4 text-sm text-gray-200 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
              <ul className="list-inside list-disc">
                <li>
                  <span className="font-bold text-white"> Backend Lead:</span>{' '}
                  Ensured proper data structure and functionality for frontend
                  integration.
                </li>
                <li>
                  <span className="font-bold text-white">
                    {' '}
                    Database Design:{' '}
                  </span>{' '}
                  Designed an efficient database structure for data management.
                </li>
                <li>
                  <span className="font-bold text-white">
                    {' '}
                    Capsule CRUD Operations:{' '}
                  </span>{' '}
                  Developed Capsule CRUD operations to manage user data and
                  media.
                </li>
                <li>
                  <span className="font-bold text-white">
                    {' '}
                    Media Upload with Multer:{' '}
                  </span>{' '}
                  Implemented Multer for secure local file storage, avoiding
                  database performance issues.
                </li>
                <li>
                  <span className="font-bold text-white">
                    {' '}
                    Email Notifications:{' '}
                  </span>{' '}
                  Created a system for sending periodic reminders and capsule
                  data when unlocked.
                </li>
                <li>
                  <span className="font-bold text-white"> Cron Jobs: </span> Set
                  up Cron jobs to send annual reminders and deliver capsule data
                  upon unlocking.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center transition-transform duration-300 hover:scale-105">
          <a href="https://github.com/abdullah-daulatzai/stalgic">
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
