import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/Orenn-01 2.svg'

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center">
          <Image height={25} width={94} alt="logo" src={logo} />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm">About</Link>
          <Link href="#" className="text-sm">Car</Link>
          <Link href="#" className="text-sm">Become Partner</Link>
          <Link href="#" className="text-sm">Terms & Conditions</Link>
          <Link href="#" className="text-sm">Contact Us</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
