import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";import { FaPhoneAlt } from "react-icons/fa";






const Footer = () => {
  return (
    <div className='flex flex-col justify-between items-center mx-8 md:mx-32 py-4'>

      <div className='flex w-full justify-between items-center gap-8 mb-6 '>
        <div>
          <p className='mb-4'>HUBSANDY COLLECTION</p>
          <p className='w-[200px]'> We produce and deliver high quality products of various sizes that meet your need</p>
        </div>
        <div>
          <p className='mb-4'>PRODUCTS</p>
          <p>Western Outfits</p>
          <p>Gadgets</p>
          <p>Native Outfits</p>
          <p>Children's World</p>
        </div>
        <div>
          <p className='mb-4'>USEFUL LINKS</p>
          <p>Register</p>
          <p>Contact</p>
          <p>About</p>
          <p>Help</p>
        </div>
        <div>
          <p className='mb-4'>CONTACT</p>
          <div className='flex gap-2 items-center'>
            <IoIosHome />
            <p>Warri, Delta 332213, Nigeria</p>
          </div>
          <div className='flex gap-2 items-center'>
            <MdEmail />
            <p>info@hubsandy.com</p>
          </div>
          <div className='flex gap-2 items-center'>
            <FaPhoneAlt />
            <p>+234-907 095 3512</p>
          </div>
        </div>
      </div>

      <div>
        <p className='text-center'>Get connected with us on social networks</p>
      </div>

      <div className='flex justify-center gap-2 my-6 '>
        <div><FaGithub className='hover:bg-slate-700 rounded-full' /></div>
        <div><FaSquareXTwitter className='hover:bg-slate-700 rounded-full' /></div>
        <div><FaLinkedin className='hover:bg-slate-700 rounded-full' /></div>
        <div><FaWhatsapp className='hover:bg-slate-700 rounded-full' /></div>
      </div>

      <div className='w-full text-center border-slate-900 border-t-[1px] pt-4'>
        <p className='text-sm text-slate-600'>© 2024 Copyright: Powered by Chosen Technologies</p>
      </div>

    </div>
  )
}

export default Footer