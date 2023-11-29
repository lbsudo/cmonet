import React from 'react'
import { Image } from '@nextui-org/react'
type Props = {}

export default function AboutMe({ }: Props) {
  return (
    <>
      <div className='flex flex-col justify-center items-center lg:flex-row w-full'>
        <div className='w-1/2 flex justify-center items-center'>
          <Image
            width={350}
            height={350}
            alt="NextUI hero Image"
            src="https://breakdownservices.s3.amazonaws.com/media/photos/20162/370647/print/13B17C75-F5DF-4CB7-9B27896CA04EE4B4.jpg"
            className='w-full h-full object-full lg:hidden flex justify-center items-center pb-3'
          />
          <Image
            width={350}
            height={350}
            alt="NextUI hero Image"
            src="https://breakdownservices.s3.amazonaws.com/media/photos/20162/370647/print/13B17C75-F5DF-4CB7-9B27896CA04EE4B4.jpg"
            className='w-full h-full object-full hidden lg:block'
          />

        </div>
        <div className='lg:w-1/2 w-full lg:flex flex-col justify-start items-start'>
          <div>
            <h4 className='text-2xl pb-2'>ABOUT</h4>
            {/* Line Here  */}
            <h4 className='text-4xl pb-4'>CHARYSE MONET</h4>
          </div>
          <p className='pb-4'>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
          <div className='pb-4'>
            <h4 className='text-2xl'>SKILLS</h4>
            {/* Line Here  */}
          </div>
          <div className='flex whitespace-normal text-xl space-x-8 px-4'>
            <ul className='list-disc'>
              <li>Theater Acting</li>
              <li>Film Acting</li>
              <li>Modeling</li>
            </ul>
            <ul className='list-disc'>
              <li>Event Hosting</li>
              <li>Sketch Comedy</li>
              <li>Music Production</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
