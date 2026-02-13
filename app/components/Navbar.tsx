"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/Orenn-01 2.svg'

const Navbar = () => {

 const [active, setactive] = useState('')

  return (
    <nav className="bg-white px-4 py-3 top-9.5 lg:left-25 md:left-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-5">
        
        <Link href="/" className="flex items-center">
          <Image height={25} width={94} alt="logo" src={logo} />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm active:text-[#fa7474]">About</Link>
          <Link href="#" className="text-sm active:text-[#fa7474]">Car</Link>
          <Link href="#" className="text-sm active:text-[#fa7474]">Become Partner</Link>
          <Link href="#" className="text-sm active:text-[#fa7474]">Terms & Conditions</Link>
          <Link href="#" className="text-sm active:text-[#fa7474]">Contact Us</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
