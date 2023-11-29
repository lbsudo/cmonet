import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

type Props = {}

export default function Socials({ }: Props) {
  return (
    <div>
      <ul className='w-1/3 h-full space-y-4'>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaXTwitter />
        </li>
      </ul>
    </div>
  )
}
