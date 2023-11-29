"use client"
import React from 'react'
import { Image } from "@nextui-org/react";

type Props = {}

export default function Profile({ }: Props) {
  return (
    <>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <Image
          width={280}
          height={280}
          radius='md'
          alt="NextUI hero Image"
          src="https://breakdownservices.s3.amazonaws.com/media/photos/20218/370647/print/0F3F7EE4-C71B-4B35-80F2E034064AFB8F.jpg"
          className='w-full h-full'
        />
        <h2 className='text-3xl w-full whitespace-nowrap text-primary flex justify-center items-center pt-2'>CHARYSE MONET</h2>
        <h2 className='text-md'>Creative-Actor/Model</h2>
      </div>
    </>
  )
} 
