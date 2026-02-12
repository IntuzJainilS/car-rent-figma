import React from 'react'
import mail from '@/public/fi_mail.svg'
import Image from 'next/image'

const Subscribe = () => {
    return (
        <div className='min-h-70 bg-[#FEE7E7] flex flex-col items-center justify-center p-6 text-center'>

            <div className='max-w-137.5 w-full mb-6'>
                <h3 className='text-[#737373] font-lato font-bold text-[28px] md:text-[33px] leading-tight'>
                    SUBSCRIBE OUR NEWS
                </h3>
                <p className='text-[#A6A6A6] font-lato font-normal text-[15px] mt-2'>
                    We can help you provide the latest news whenever and wherever you are via email
                </p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center w-full max-w-150 gap-2.5'>
                <div className='relative w-full md:w-100'>
                    <Image src={mail} alt='icon'  className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 opacity-100"/>
                     <input
                    placeholder='example@gmail.com'
                    className='w-full md:w-100 bg-white h-13.75 pl-15 pr-4 outline-none placeholder:font-lato placeholder:text-[#D9D9D9] placeholder:text-[15px] placeholder:font-[400px]'
                />
                </div>
               
                <button className='bg-[#F55757] text-white font-lato w-full md:w-30 h-13.75 transition-hover hover:bg-[#e44646] active:bg-[#fd9494]'>
                    Subscribe
                </button>
            </div>

        </div>
    )
}

export default Subscribe