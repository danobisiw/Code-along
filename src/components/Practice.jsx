import React from 'react'
import queen from "../assets/image/queen.jpg";

function Practice() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={queen} alt="queen"/>
            </div>
        <div className='p-5'>
            <div className="flex justify-between">
                <h3 className='font-bold capitalize'>hp Pavilion 15</h3>
                <h6>GHC4500</h6>
            </div>
            <p>Lorem ipsum dolor sit amet.
            </p>
            </div>
        </div>
        </div>
  )
}

export default Practice