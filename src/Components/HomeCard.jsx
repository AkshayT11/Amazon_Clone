import React from 'react'

const HomeCard = ({title, img, link}) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3 '>
        <div className='text-lg xl:text-xl font-semibold ml-4 mt-3'>
            {title}
         </div>
        <div className='h-[300px] m-4' >
            <img className='h-[100%] w-[100%] object-cover ' src= {img} alt="" />
        </div>
        <div className='text-xs xl:text-sm text-blue-500 ml-4 font-semibold '> {link} </div>
    </div>
  )
}

export default HomeCard