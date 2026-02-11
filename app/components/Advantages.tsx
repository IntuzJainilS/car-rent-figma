import React from 'react'
import img1 from "@/public/advantages/Solid.svg"
import img2 from "@/public/advantages/Solid.png"
import img3 from "@/public/advantages/agent.svg"
import img4 from "@/public/advantages/safty.svg"
import img5 from "@/public/advantages/refund.svg"
import img6 from "@/public/advantages/live monetering.svg"
import Image from 'next/image'

const Advantages = () => {
    const advantages = [
        {
            title: "Easy Rent",
            description: "Rent a car at our rental with an easy and fast process without disturbing your productivity",
            icon: img1
        },
        {
            title: "Premium Quality",
            description: "Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience",
            icon: img2
        },
        {
            title: "Professional Agent",
            description: "You can ask your travel companion to escort and guide your journey.",
            icon: img3
        },
        {
            title: "Car Safety",
            description: "We guarantee the safety of the engine on the car always running well with regular checks on the car engine.",
            icon: img4
        },
        {
            title: "Refund",
            description: "Our service guarantee provides a money back opportunity if the car does not match the information provided.",
            icon: img5
        },
        {
            title: "Live Monitoring",
            description: "Our service provides direct customer monitoring to monitor trips in terms of safety and comfort.",
            icon: img6
        },
    ]
    return (
        <div>
            <section className="w-full py-24">
                <div className='max-w-7xl mx-auto px-4'>
                    <div className="text-center mb-14">
                        <p className="text-sm font-bold text-[#FBB7B7] font-lato">ADVANTAGES</p>
                        <h2 className="text-4xl font-semibold mt-2 font-lato text-[#737373]">Why Choose Us ?</h2>
                        <p className="text-[#A6A6A6] mt-3 mx-auto font-lato">
                            We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12 place-items-center'>
                        {advantages.map((item, i)=> (
                            <div key={i} className="flex items-start gap-5 max-w-95 font-lato">
                                <Image src={item.icon} alt='icon' height={75} width={75} className='object-contain mt-4'/>

                                <div>
                                    <h3 className='font-lato text-[#737373] font-medium text-[26px]'>{item.title}</h3>
                                    <p className='font-lato leading-[1.2] font-medium text-[#A6A6A6] text-[15px]'>{item.description}</p>
                                </div>
                            </div>    
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Advantages
