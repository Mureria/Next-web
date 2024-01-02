"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    const isLoggedIn = true;
  return (
    <nav className='flex justify-between items-center mx-8 md:mx-32 py-6  border-b-[1px] border-slate-900'>
        <Link href='/' className="flex gap-2">
            <Image src='/assets/images/logo.svg' width={40} height={40} className="object-contain"/>
            <p className='hidden md:flex text-red-500'>Ticket-Sasa</p>
        </Link>

        {/* Desktop Nav */}
        <div className="sm:flex hidden">
            {isLoggedIn ? (
                <div >

                    <button onClick={signOut} className="outline outline-1 py-1 px-6 hover:bg-red-600 hover:outline-none ease-in-out duration-1000"  >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex gap-4">
                    <Link className="outline outline-1 py-1 px-6" href='/createPrompt'>
                        Register
                    </Link>

                    <button onClick={signIn} className="outline outline-1 py-1 px-6 ">
                        Login
                    </button>
                </div>

            )}
        </div>

        {/* Phone Nav */}
    </nav>
  )
}

export default Nav