import React from 'react'
import { Link } from "@nextui-org/react";
type Props = {}

export default function Footer({ }: Props) {
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center py-3 bg-primary text-background">
        <ul className='flex items-center justify-center space-x-4'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Credits</li>
          <li>Contact</li>
        </ul>
        <h2 className='uppercase text-3xl'>
          Charyse Monet
        </h2>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
          title="nextui.org homepage"
        >
          <span className="text-background font-light">Developed By Lawrence Brown - </span>
          <p className="text-background font-light">Currency Covenant ◦ Design & Development</p>
        </Link>
      </footer>
    </>
  )
}
