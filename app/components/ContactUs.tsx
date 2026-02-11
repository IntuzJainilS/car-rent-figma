import React from 'react'
import mail from '@/public/contactus/fi_mail.svg'
import phone from '@/public/contactus/fi_phone.svg'
import timer from '@/public/contactus/fi_clock.svg'
import location from '@/public/contactus/u_location-point.svg'
import Image from 'next/image'
import SocialIcons from './SocialIcons'

const ContactUs = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-10 w-full py-24">
            <div className='w-123 h-142 mx-auto px-4'>
                <div className="text-left mb-12">
                    <p className="text-sm tracking-widest font-bold text-[#FBB7B7] font-lato">GET IN TOUCH</p>
                    <h2 className="text-[43px] font-medium mt-2 font-lato text-[#737373]">Contact Us</h2>
                    <p className="text-[#A6A6A6] text-[15px] mt-3 mx-auto font-lato">
                        if you need consultation with us, you can write a message or call us, we will respond as quickly as possible
                    </p>
                </div>
                <div>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 p-2.5 w-63.75 h-7.5">
                            <Image src={mail} alt="" width={25} height={20} />
                            <span className="text-[16px] font-medium text-[#8C8C8C]">lorenna@gmail.com</span>
                        </li>

                        <li className="flex items-start gap-4 p-2.5 w-63.75 h-7.5">
                            <Image src={phone} alt="" width={25} height={20} />
                            <span className="text-[14px] text-[#8C8C8C]">+62 8221 1222 0001</span>
                        </li>

                        <li className="flex items-start gap-4 p-2.5 w-63.75 h-7.5">
                            <Image src={timer} alt="" width={25} height={20} />
                            <span className="text-[14px] text-[#8C8C8C]">Everyday : 08.00–21.00</span>
                        </li>

                        <li className="flex items-start gap-4 p-2.5 w-93.75 h-7.5">
                            <Image src={location} alt="" width={25} height={20} />
                            <span className="text-[14px] text-[#8C8C8C] leading-5.5 max-w-85">
                                Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='mt-20'> <SocialIcons /></div>
            </div>

            <div className='w-152.5 h-143.75 mr-12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842929558!2d72.4149288673392!3d23.02047410137282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1770716459042!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-152.5 h-111.75'></iframe>
                <button className=' mt-12 w-48.75 h-14.5 bg-[#F55757] text-white flex items-center justify-center gap-2.5 px-6.25 py-2.5 font-["Lato"] font-bold text-[15px] leading-[120%] text-center transition-all hover:opacity-90'>
                    Office Center Map
                </button>
            </div>
        </section>
    )
}

export default ContactUs

