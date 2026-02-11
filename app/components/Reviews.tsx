import React from 'react'
import img1 from "@/public/Reviews/Ellipse 3.png"
import img2 from '@/public/Reviews/Ellipse 4.png'
import img3 from '@/public/Reviews/Ellipse 5.png'
import commasimg from '@/public/Frame 252.svg'
import fullstar from '@/public/5star.svg'
import star from '@/public/4star.svg'
import Image from 'next/image'


const Reviews = () => {
    const reviews = [
        {
            name: "Melinda Lenny",
            location: "Medan",
            image: img1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
            star:fullstar,
        },
        {
            name: "Jacob Stevan",
            location: "Bandung",
            image: img2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
            star:fullstar
        },
        {
            name: "Roben Musstar",
            location: "Bali",
            image: img3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor elementum a felis, tempus erat orci. ",
            star: star,
        },
    ]
    return (
        <section className="w-full py-24">
            <div className='max-w-7xl mx-auto px-4'>
                <div className="text-center mb-14">
                    <p className="text-[20px] font-bold text-[#FBB7B7] font-lato">OUR REVIEW</p>
                    <h2 className="text-4xl font-semibold mt-2 font-lato text-[#737373]">What They Say ?</h2>
                    <p className="text-[#A6A6A6] mt-3 mx-auto font-lato">
                        Here are some comments from our customers, be one of them
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 place-items-center'>
                    {reviews.map((item, i) => (

                        <div key={i} className="items-start gap-5 max-w-95 font-lato">
                            <div className='flex justify-between'>
                                <Image src={commasimg} alt='' width={25} height={20} className='top-0' />
                                <Image src={item.star} alt='' width={25} height={20} className='top-5 w-35.75 h-7.5' />
                            </div>
                            
                            <p className='text-[#A6A6A6] font-lato mt-1.5 text-[20px] font-[400px] leading-[1.2]'>{item.desc}</p>
                            <div className='flex items-center gap-4'>
                                <Image
                                    src={item.image}
                                    alt='icon'
                                    height={75}
                                    width={75}
                                    className='mt-5.5 p-1'
                                />

                                <div className='flex flex-col'>
                                    <h3 className='font-lato text-[26px] text-[#737373] mt-5.5'>
                                        {item.name}
                                    </h3>
                                    <p className='font-lato text-[20px] text-[#BFBFBF]'>
                                        {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex justify-center mt-12'>
                    <button className='bg-[#F55757] hover:bg-[#d44646] transition-colors px-10 py-4 font-lato text-white rounded-lg shadow-lg'>
                        See All
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Reviews
