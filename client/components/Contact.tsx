import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  // Properly type the form ref
  const form = useRef<HTMLFormElement>(null)

  // State to manage success and error messages
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(
    null,
  )

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('service_rlif2wg', 'template_abtqjro', form.current, {
        publicKey: 'lffWPRCtD4AGoZVCU',
      })
      .then(
        () => {
          setMessage(
            'Thank you for contacting me! I will get back to you as soon as possible.',
          )
          setMessageType('success')

          form.current.reset()

          setTimeout(() => {
            setMessage(null)
            setMessageType(null)
          }, 3000)
        },
        (error) => {
          setMessage('Failed to send email. Please try again later.')
          setMessageType('error')

          setTimeout(() => {
            setMessage(null)
            setMessageType(null)
          }, 3000)
        },
      )
  }

  return (
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center px-4"
    >
      <form
        className="w-full max-w-2xl rounded-lg p-6"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-200"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-200"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 block w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full max-w-[170px] rounded-lg bg-blue-600 py-3 text-xl font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Submit
          </button>
        </div>

        {message && (
          <div
            className={`mt-6 rounded-md p-4 text-center ${
              messageType === 'success'
                ? 'bg-green-700 bg-opacity-30 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
