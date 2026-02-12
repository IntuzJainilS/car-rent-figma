import React from 'react'
import Image from 'next/image'

import car1 from "@/public/popularcar/Lexus CT 200h.svg"
import car2 from "@/public/popularcar/Jaguar F-Pace.svg"
import car3 from "@/public/popularcar/Marcedes Benz.svg"
import call from "@/public/popularcar/Vector.svg"
import blackCall from "@/public/popularcar/blackcall.svg"
import location from "@/public/popularcar/location.svg"
import Carlogo from './Carlogo'

const PopularCar = () => {
    const cars = [
        { id: 1, name: "Lexus CT200H", price: 120, location: "Djakarta", img: car1 },
        { id: 2, name: "Jaguar F-Pace", price: 132, location: "Bali", img: car2 },
        { id: 3, name: "Mercedes Benz", price: 132, location: "Bandung", img: car3 },
    ];

    return (   
        <div className='w-full max-w-7xl mx-auto px-4 py-10'>
            {/* <Carlogo/> */}
            
            <div className='mt-8 mb-12 px-4 max-w-2xl mx-auto text-center'>
                <p className='text-[#FBB7B7] text-lg md:text-xl font-bold font-lato uppercase tracking-wider'>
                    Popular Car
                </p>
                <h1 className='text-[#737373] text-3xl md:text-4xl lg:text-[43px] font-medium my-4 font-lato leading-tight'>
                    Choose Your Suitable Car
                </h1>
                <p className='text-[#404040] text-sm md:text-base font-lato'>
                    We present popular cars that are rented by customers to maximize your comfort on long trips.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className="bg-[#F2F2F2] shadow-md p-6 transition-all duration-300 border border-gray-100"
                    >
                        <div className="h-40 md:h-48 flex items-center justify-center relative">
                            <Image
                                src={car.img}
                                alt={car.name}
                                className="object-contain"
                                priority
                            />
                        </div>

                        <h3 className="mt-6 text-lg font-lato font-medium text-[26px] text-[#737373]">
                            {car.name}
                        </h3>

                        <div className="flex justify-between items-center mt-3 font-lato">
                            <p className="text-xl font-lato font-[900px] text-[33px] text-[#404040]">
                                ${car.price}
                                <span className="text-sm font-lato text-[15px] font-normal text-gray-400"> /Day</span>
                            </p>
                            <span className="text-sm flex gap-2 font-lato text-gray-500 px-3 py-1 rounded-full">
                                <Image src={location} alt='' height={22} width={16} className="" />
                                {car.location}
                            </span>
                        </div>

                        <button className="mt-6 w-full  border-2  border-gray-700 text-[#737373] hover:bg-[#FF5A5A] hover:text-white hover:border-[#FF5A5A] py-3 px-4 transition-all font-lato flex items-center justify-between group">
                            <Image src={call} alt='call' height={20} width={20} className="group-hover:brightness-0 group-hover:invert" />
                            <span className="flex-1 text-center font-bold">Rent Now</span>
                            <div className="w-5"></div> 
                        </button>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-12'>
                <button className='bg-[#F55757] hover:bg-[#d44646] active:bg-[#fd9494] cursor-pointer transition-all px-10 py-4 font-lato text-white shadow-lg'>
                    See All
                </button>
                
            </div>
        </div>
    )
}

export default PopularCar