import React from 'react'
import { NavLink } from 'react-router-dom'

const Create = () => {
  return (
    <div className='px-6 py-8 max-w-md mx-auto border rounded-lg shadow-md'>
      <h1 className="text-3xl font-bold mb-6">Create Your PopX Account</h1>
      <form className="flex flex-col gap-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-blue-600 font-semibold relative top-2.5 left-4 bg-white w-fit">Full Name*</label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            className="w-full border border-gray-400 pl-4 rounded-lg h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-blue-600 font-semibold relative top-2.5 left-4 bg-white w-fit">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-400 pl-4 rounded-lg h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-blue-600 font-semibold relative top-2.5 left-4 bg-white w-fit">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full border border-gray-400 pl-4 rounded-lg h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-blue-600 font-semibold relative top-2.5 left-4 bg-white w-fit">Password*</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full border border-gray-400 pl-4 rounded-lg h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label htmlFor="company" className="text-blue-600 font-semibold relative top-2.5 left-4 bg-white w-fit">Company Name*</label>
          <input
            type="text"
            id="company"
            placeholder="Company Name"
            className="w-full border border-gray-400 pl-4 rounded-lg h-12 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Agency */}
        <h2 className="font-bold mt-4">Are You An Agency?</h2>
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" value="yes" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span>Yes</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="radio" name="agency" value="no" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
            <span>No</span>
          </label>
        </div>

        <NavLink to={"/profile"} className="w-full bg-blue-600 text-white font-semibold h-12 rounded-lg hover:bg-blue-700 transition text-center p-3">
          Create Account
        </NavLink>
      </form>
    </div>

  )
}

export default Create
