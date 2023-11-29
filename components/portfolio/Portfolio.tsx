"use client"
import React, { useState } from 'react'
import PortfolioGrid from './PortfolioGrid';


export default function Portfolio() {
  const [activeButton, setActiveButton] = useState('ALL');

  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center pb-6'>
        <div>
          <h4 className='text-4xl pb-4'>Portfolio</h4>
          {/* Line Here  */}
        </div>
        <div>
          <ul className='flex justify-center items-center space-x-4 text-xl pb-8'>
            <li>
              <button style={activeButton === 'ALL' ? { borderBottom: '2px solid #FFB800' } : {}} onClick={() => setActiveButton('ALL')}>ALL</button>
            </li>
            <li>
              <button style={activeButton === 'PHOTOS' ? { borderBottom: '2px solid #FFB800' } : {}} onClick={() => setActiveButton('PHOTOS')}>PHOTOS</button>
            </li>
            <li>
              <button style={activeButton === 'MEDIA' ? { borderBottom: '2px solid #FFB800' } : {}} onClick={() => setActiveButton('MEDIA')}>MEDIA</button>
            </li>
          </ul>
        </div>
        <div className='w-full flex flex-col items-center justify-center space-y-2'>
          <PortfolioGrid />
        </div>
      </div>
    </>
  )
}
