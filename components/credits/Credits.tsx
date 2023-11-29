"use client"
import React from 'react'
import CreditsCategory from './CreditsCategory'
import { tvCredits, filmCredits, hostingCredits, theaterCredits } from '@/data/credits'


type Props = {
}



export default function Credits({ }: Props) {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center pb-4'>
        <div>
          <h4 className='text-4xl pb-6'>Credits</h4>
          {/* Line Here  */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <CreditsCategory creditsType='Film' credits={filmCredits} />
          <CreditsCategory creditsType='Televison' credits={tvCredits} />
          <CreditsCategory creditsType='Theater' credits={theaterCredits} />
          <CreditsCategory creditsType='Hosting' credits={hostingCredits} />
        </div>
      </div >
    </>
  )
}
