import React from 'react'
import Icons from '../utils/Icons'
import useWindowDimensions from '../utils/WindowsDimension'
export default function Filters() {

    const { height, width } = useWindowDimensions()
    // alert(`height: ${height}, width: ${width}`)
  return (
    <div className='w-full px-8 mt-5 border-b shadow'>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
            {
                Icons().map((icon, i)=>(
                    <div className='flex flex-col items-center pb-4' key={i}>
                    <icon.icon className='w-6 h-6 text-gray-500 font-extralight' />
                    <p className='w-full text-xs text-center'>{icon.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
