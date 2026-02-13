import React from "react";
import Image from "next/image";
import Link from "next/link";
import carImage from "@/public/hero-image/Toyota Camry Home 1.svg";
import mapImage from "@/public/hero-image/Map 1.svg";
import Ellipsered from "@/public/hero-image/redlocation.svg"
import Ellipsegreen from "@/public/hero-image/greenlocation.svg"
import vector10 from "@/public/hero-image/Vector 10.svg"
import vector11 from "@/public/hero-image/Vector 11.svg"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        <div className="relative z-0 lg:left-25 md:left-12">
          <h1 className="text-4xl md:text-5xl font-lato font-bold leading-tight text-[#595959]">
            We Have Prepared a Car For Your Trip
          </h1>

          <p className="mt-4 text-gray-500 font-lato max-w-md">
            We have many types of cars that are ready for you to travel anywhere and anytime.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#"
              className="px-6 py-3 bg-[#F55757] text-white active:bg-[#fd9494] transition"
            >
              Get in Touch
            </Link>

            <Link
              href="#"
              className="px-6 py-3 border border-[#F55757] text-[#F55757] active:bg-[#000000] bg-white transition"
            >
              Our Car
            </Link>
          </div>
        </div>

        <div className="relative md:-ml-32 z-10">
          <Image
            src={mapImage}
            alt="Map"
            className="absolute -top-15 left-0 w-full opacity-150"
          />

          <Image
            src={Ellipsegreen}
            alt=""
            className="absolute top-[21%] left-[57%] w-[14.63px] h-5"
          />

          <Image
            src={Ellipsered}
            alt=""
            className="absolute top-[24%] right-[17.5%] w-[18.3px] h-6.25"
          />

          <Image
            src={Ellipsered}
            alt=""
            className="absolute top-[6%] right-[4%] w-[18.3px] h-6.25"
          />

          <Image
            src={vector10}
            alt=""
            className="absolute top-[15%] left-[58%] w-[23%]"
          />

          <Image
            src={vector11}
            alt=""
            className="absolute top-[9.5%] left-[82%] w-[15%]"
          />

          <Image
            src={carImage}
            alt="Car"
            className="relative z-10 top-25"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
