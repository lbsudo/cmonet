import React from 'react'
import Socials from './Socials'
import Profile from './Profile'


export default function Hero() {
  return (
    <>
      <div className='w-full flex justify-between items-center'>
        <Socials />
        <Profile />
        <div>
          <h2 className='text-xs'>S<br />O<br />U<br />T<br />H<br />E<br />R<br />N<br /> <br />C<br />A<br />L<br />I<br />F<br />O<br />R<br />N<br />I<br />A</h2>
        </div>
      </div>
    </>
  )
}
