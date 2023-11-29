import React from 'react'
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";


type Props = {}

export default function Contact({ }: Props) {
  return (
    <>
      <div className='w-full'>
        <div className='flex flex-row justify-center items-center w-full '>
          <h4 className='text-4xl pb-6'>Contact</h4>
          {/* Line Here  */}
        </div>
        <div className='flex flex-col lg:flex-row pt-3 items-center justify-center w-full lg:justify-start lg:items-start'>
          <div className='w-full lg:w-1/2 flex flex-col lg:items-start lg:justify-start justify-center items-center'>
            <h3 className='text-4xl text-primary pb-6'>Let&apos;s Work</h3>
            <p className='pb-2 text-center lg:text-left'>I&apos;m looking for new castings and projects. Reach out and let&apos;s see if we can work together to make fantastic film, art, and music </p>
            <p className='font-bold'>Represented By:</p>
            <p>Platinum Star Media Group(CA)</p>
            <p>(323) 853-9035</p>
            <p className='text-center lg:text-left'>Commercial, Hosting, Models, Print, Product Print, Public, Appearance, SAG-AFTRA, Theatrical</p>
          </div>
          <div className='flex flex-col w-1/2 items-center'>
            <form className='w-full flex flex-col space-y-3'>
              <Input type="text" label="Name" aria-label='Name' placeholder="Enter your name" className='pt-2' />
              <Input type="email" label="Email" aria-label='Email' placeholder="Enter your email" className='pt-2' />
              <Textarea
                label="Message"
                aria-label='Message'
                placeholder="Write your message here"
                className='pt-2'
              />
            </form>
            <button className='border rounded-full w-full lg:w-1/6 mt-10 bg-primary text-background'>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}
