import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../Nav'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Stalgic() {
  return (
    <>
      <header className="flex w-full justify-center bg-[#000040] shadow-lg shadow-[#000040]/50">
        <Nav />
      </header>

      <div className="mt-32 flex min-h-screen flex-col px-4 pb-16 sm:px-8 md:px-16">
        <div className="flex flex-col items-center lg:mt-12">
          <h1 className="font-audiowide text-2xl font-semibold text-blue-300 sm:text-3xl lg:text-6xl">
            Stalgic
          </h1>
        </div>
        <div className="  flex flex-col sm:ml-0 sm:mt-16 sm:pl-4 lg:ml-[230px]">
          <h1 className="text-xl font-bold text-white sm:text-3xl">
            Project Description:
          </h1>
          <p className="lg:text-md mt-4 pb-4 text-sm text-gray-200 sm:mt-8 sm:max-w-sm sm:max-w-xl sm:text-lg lg:max-w-3xl">
            Stalgic is a digital memory capsule, inspired by the age-old
            tradition of burying a box of personal mementos to preserve memories
            for future generations. The idea behind Stalgic is to offer a
            modern-day version of this practice, allowing users to capture and
            store special moments in a secure, virtual space. Whether it’s a
            cherished photograph, a meaningful note, or a favourite memory,
            Stalgic provides a way to safeguard those experiences for later
            reflection. Created in just five days by a dedicated team of three,
            this app solves the problem of losing memories in an increasingly
            digital world, offering a simple yet meaningful way to hold on to
            what matters most.
          </p>

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
                  Backend Lead: Ensured proper data structure and functionality
                  for frontend integration.
                </li>
                <li>
                  Database Design: Designed an efficient database structure for
                  data management.
                </li>
                <li>
                  Capsule CRUD Operations: Developed Capsule CRUD operations to
                  manage user data and media.
                </li>
                <li>
                  Media Upload with Multer: Implemented Multer for secure local
                  file storage, avoiding database performance issues.
                </li>
                <li>
                  Email Notifications: Created a system for sending periodic
                  reminders and capsule data when unlocked.
                </li>
                <li>
                  Cron Jobs: Set up Cron jobs to send annual reminders and
                  deliver capsule data upon unlocking.
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
