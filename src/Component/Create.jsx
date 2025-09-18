import React from 'react'

const Create = () => {
  return (
    <div>
      <div className="px-6 py-8 max-w-md mx-auto border-1" >
        <h1 className="text-3xl font-bold pr-8 text-left mb-6">
          Create Your PopX Account
        </h1>

        <form className="flex flex-col gap-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="text-blue-600 font-semibold mb-1 relative top-3 left-4 bg-white w-fit"
            >
              Full Name*
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              className="peer w-full border border-gray-400 pl-4 rounded-lg h-12 placeholder-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="text-blue-600 font-semibold mb-1 relative top-3 left-4 bg-white w-fit"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className="peer w-full border border-gray-400 pl-4 rounded-lg h-12 placeholder-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-blue-600 font-semibold mb-1 relative top-3 left-4 bg-white w-fit"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="peer w-full border border-gray-400 pl-4 rounded-lg h-12 placeholder-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-blue-600 font-semibold mb-1 relative top-3 left-4 bg-white w-fit"
            >
              Password*
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="peer w-full border border-gray-400 pl-4 rounded-lg h-12 placeholder-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="company"
              className="text-blue-600 font-semibold mb-1 relative top-3 left-4 bg-white w-fit"
            >
              Company Name*
            </label>
            <input
              type="text"
              id="company"
              placeholder="Company Name"
              className="peer w-full border border-gray-400 pl-4 rounded-lg h-12 placeholder-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Agency Question */}
          <h2 className="font-bold mt-2">Are You An Agency?</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span>No</span>
            </label>
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold h-12 rounded-lg mt-6 hover:bg-blue-700 transition relative top-28"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Create
