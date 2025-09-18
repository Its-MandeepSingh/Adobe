import React from 'react'

const Profile = () => {
  return (
    <div className='px-6 py-8 max-w-md mx-auto '>
        <div>
            <h1 className='h-14 bg-white p-3 text-left  sm:h-12 sm:p-3 text-xl font-semibold'>Account Setting</h1>
        </div>
        <div  className='bg-gray-200 h-screen px-2'>
            <div className='pt-5 flex items-center gap-5'>
            <img className='rounded-full h-20 w-20' src="public/download.jpg" alt="" />
              <div className='flex flex-col'>
            <h1 className='font-semibold'>Marry Doe</h1>
            <p>Marry@Gmail.com</p>
            </div>
            </div>
            <p className='pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio. Consectetur repellendus libero et odio delectus, doloribus necessitatibus maxime ullam.</p>
        </div>
    </div>
  )
}

export default Profile