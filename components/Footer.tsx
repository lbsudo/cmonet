"use client"
import React from 'react'
import { Link } from "@nextui-org/react";
type Props = {}

export default function Footer({ }: Props) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <footer className="w-full flex flex-col items-center justify-center py-3 bg-primary text-background">
        <ul className='flex items-center justify-center space-x-4 '>
          <li>
            <button onClick={scrollToTop}>Home</button>
          </li>
          <li>
            <Link href="#aboutMe" className='text-black'>
              <button>About Me</button>
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className='text-black'>
              <button>Portfolio</button>
            </Link>
          </li>
          <li>
            <Link href="#credits" className='text-black'>
              <button>Credits</button>
            </Link>
          </li>
          <li>
            <Link href="#contact" className='text-black'>
              <button>Contact</button>
            </Link>
          </li>
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
