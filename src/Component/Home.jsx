import React from 'react'
import Login from './Login'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='max-w-md mx-auto border-1'>
        <div className='flex flex-col justify-end h-[100vh] px-5 border sm:flex-col sm:justify-end  pb-3 gap-4'>
            <div className=''>
                <h1 className='text-2xl font-bold'>Welcomme to PopX</h1>
                <p className='font-sans
                 text-gray-500'>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <NavLink to={"/create"}
                    
                    className=" w-full bg-blue-700 text-white font-semibold h-10 rounded-lg flex items-center justify-center"
                >
                    Create Account
                </NavLink>

                <NavLink to={"/login"} className='bg-sky-400 h-10 font-semibold rounded-lg flex items-center justify-center'>Already Registered ? Login</NavLink>
            </div>
        </div>
        </div>
    )
}

export default Home