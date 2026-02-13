"use client";
import { useState } from "react";
import logo from '@/public/Orenn-01 2.svg'
import Link from 'next/link'
import Image from 'next/image'
import SocialIcons from './SocialIcons'
import NavLink from './NavLink'

const Footer = () => {
    const [active, setActive] = useState("");

    return (
        <footer className='px-6 py-12 md:px-20 lg:px-25'>
            <div className='container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-10 xl:gap-20'>
                <div className='flex-1 max-w-sm'>
                    <Link href="/" className="flex items-center">
                        <Image height={25} width={94} alt="logo" src={logo} />
                    </Link>
                    <div className='mt-6'>
                        <p className='font-lato text-[#A6A6A6] leading-relaxed text-[15px]'>
                            We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.
                        </p>
                    </div>
                    <div className='mt-8'>
                        <SocialIcons/>
                    </div>
                </div>
                <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='font-Montserrat font-bold text-[#737373] text-xl md:text-[26px] mb-4'>Company</h3>
                        {/* <ul className='space-y-2'>
                            <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>About Us</Link></li>
                            <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Services</Link></li>
                            <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Cars</Link></li>
                            <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Our Partner</Link></li>
                        </ul> */}
                         <ul className='space-y-2'>
                            <li><NavLink href='#' isActive={active === "about"} onClick={() => setActive("about")}> About Us</NavLink></li>
                            <li><NavLink href='#' isActive={active === "services"} onClick={() => setActive("services")}>Services</NavLink></li>
                            <li><NavLink href='#' isActive={active === "cars"} onClick={() => setActive("cars")}>Cars</NavLink></li>
                            <li><NavLink href='#' isActive={active === "partners"} onClick={() => setActive("partners")}>Our partners</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-Montserrat font-bold text-[#737373] text-xl md:text-[26px] mb-4'>Services</h3>
                        <ul className='space-y-2'>
                            <li><Link href='#' className='text-[#A6A6A6] active:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Instant Rent</Link></li>
                            <li><Link href='#' className='text-[#A6A6A6] active:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Private Driver</Link></li>
                            <li><Link href='#' className='text-[#A6A6A6] active:text-[#fa7474] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Long Trip</Link></li>
                        </ul>
                    </div>

                    <div className='col-span-2 md:col-span-1'>
                        <h3 className='font-Montserrat font-bold text-[#737373] text-xl md:text-[26px] mb-4'>Support</h3>
                        <ul className='space-y-2'>
                           <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Blog</Link></li> 
                           <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>FAQ</Link></li> 
                           <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Call Center</Link></li> 
                           <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Partner With Us</Link></li> 
                           <li><Link href='#' className='text-[#A6A6A6] hover:text-[#F55757] transition-colors cursor-pointer font-Montserrat text-base leading-[215%]'>Terms & Condition</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

{/**
import React from 'react'
import logo from '@/public/Orenn-01 2.svg'
import Link from 'next/link'
import Image from 'next/image'
import SocialIcons from './SocialIcons'

const Footer = () => {
    return (
        <div className='m-25 flex gap-40.5'>
            <div className='h-59.75 w-100'>
                <Link href =nk href="/" className="flex items-center">
                    <Image height={25} width={94} alt="logo" src={logo} />
                </Link>
                <div className='mt-7.5 ml-2.5 w-100 h-18.5'>
                    <p className='font-lato text-[#A6A6A6] leading-1.2 text-[15px] p-2.5'>We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.</p>
                </div>
                <div className='mt-12.5 w-46.25 h-12.5'>
                    <SocialIcons/>
                </div>
            </div>

            <div className='w-37.5 h-55.5'>
                <h3 className='font-Montserrat font-bold text-[#737373] text-[26px]'>Company</h3>
                <div className='w-29.75 h-38'>
                    <ul>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>About Us</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Services</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Cars</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Our Partner</Link>
                    </ul>
                </div>
            </div>

            <div className='w-33.5 h-46'>
                <h3 className='font-Montserrat font-bold text-[#737373] text-[26px]'>Services</h3>
                <div className='w-32 h-28.5'>
                    <ul>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Instant Rent</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Private Driver</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Long Trip</Link>
                    </ul>
                </div>
            </div>

            <div className='w-41.75 h-65'>
                <h3 className='font-Montserrat font-bold text-[#737373] text-[26px]'>Support</h3>
                <div className='h-47.5 w-41.75'>
                    <ul>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Blog</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>FAQ</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Call Center</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Partner With Us</Link>
                        <Link href = className='text-[#A6A6A6] hover:text-[#F55757] font-Montserrat text-[16px] leading-[215%]'>Terms & Condition</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer
    */}