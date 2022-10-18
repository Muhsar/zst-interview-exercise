import React from 'react'
import {SiAirbnb} from 'react-icons/si'
import {AiOutlineMenu, AiOutlineUser} from 'react-icons/ai'
import {BiSearchAlt, BiGlobe} from 'react-icons/bi'
import {FaUserAlt} from "react-icons/fa"
export default function Nav() {
  return (
    <div className='flex justify-between px-8 py-6 border-b'>
        <div className='items-center hidden lg:flex text-rose-500'>
            <SiAirbnb className='w-8 h-8 mr-2' />
            <p className='text-2xl font-bold'>airbnb</p>
        </div>
        <div>
            <div className="flex p-4 border rounded-full shadow-lg">
                <div className='pr-4 border-r'>Anywhere</div>
                <div className='px-4 border-r'>Any week</div>
                <div className='flex items-center pl-2'>
                    <p className='mr-2 text-gray-400 font-extralight'>
                    Add Guest
                    </p>
                    <div className="p-1 text-white bg-red-500 rounded-full">
                    <BiSearchAlt />
                    </div>
                    </div>
            </div>
        </div>
        <div className='items-center hidden lg:flex'>
            <div className="mr-4">
                Become a Host
            </div>
            <div className="mr-4">
                <BiGlobe className='w-5 h-5' />
            </div>
            <div className="flex items-center p-2 border rounded-full">
                <AiOutlineMenu className='w-5 h-5' />
                <div className="p-2 ml-2 text-white bg-gray-400 rounded-full">
                <FaUserAlt className='w-5 h-5' />
                </div>
            </div>
        </div>
    </div>
  )
}
