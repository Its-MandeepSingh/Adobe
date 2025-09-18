import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='px-6 py-8 max-w-md mx-auto border h-[99vh]'>
            <div>
                <h1 className='font-medium pt-5 text-2xl'>
                    Sign in to your <br /> PopX account
                </h1>
                <p className='text-gray-400 font-semibold'>
                    Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
                </p>
            </div>

            {/* Form Section */}
            <form className='flex flex-col gap-4 mt-5'>
                <div className="flex flex-col">
                    <label className="text-blue-600 font-semibold mb-1 relative top-3.5 left-4 bg-white w-fit">
                        Email Address
                    </label>
                    <input
                        type="text"
                        placeholder="Enter email address"
                        className="w-full border border-gray-400 pl-4 rounded-lg h-12"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-blue-600 font-semibold mb-1 relative top-3.5 left-4 bg-white w-fit">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="w-full border border-gray-400 pl-4 rounded-lg h-12"
                    />
                </div>

                <NavLink to={"/profile"}
                    type="submit"
                    className="w-full bg-gray-400 text-white font-semibold h-10 rounded-lg p-1 text-center"
                >
                    Login
                </NavLink>
            </form>
        </div>
    )
}

export default Login
