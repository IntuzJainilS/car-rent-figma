"use client";
import { useState } from "react";
import location from "@/public/Group 1.svg"
import clock from "@/public/fi_clock.svg"
import Image from "next/image";

export default function BookingBar() {
  const [activeTab, setActiveTab] = useState("instant");

  const tabs = [
    { id: "instant", label: "Instant Rent" },
    { id: "driver", label: "Private Driver" },
    { id: "trip", label: "Long Trip" },
  ];

  return (
    <div className="w-full bg-[#FEE7E7] py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex bg-white w-fit rounded-t-lg overflow-hidden shadow">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition font-lato ${
                activeTab === tab.id
                  ? "bg-white text-red-500"
                  : "bg-gray-100 text-gray-500 hover:text-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white shadow-md rounded-b-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div>
            <p className="text-xs text-gray-500 font-lato mb-1">Pickup</p>
            <div className="flex gap-2">
               <Image src={location}  width={16} height={22} alt=""/>
            <input
              placeholder="Point Location"
              className="w-full font-light font-lato outline-none text-sm py-2"
            />
            </div>
           
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Drop Off</p>
            <div className="flex gap-2">
              <Image src={location}  width={16} height={22} alt=""/>
            <input
              placeholder="Point Location"
              className="w-full font-light font-lato outline-none text-sm py-2"
            />
            </div>
            
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Estimate Time</p>
            <div className="flex gap-2">
               <Image src={clock}  width={16} height={22} alt=""/>
            <input
              placeholder="Point Location"
              className="w-full font-light font-lato outline-none text-sm py-2"
            />
            </div>
            
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-1">Pricing</p>
            <input
              placeholder="$ 0.00"
              className="w-full outline-none font-lato font-light text-sm py-2"
            />
          </div>

          <button className="bg-[#F55757] text-white active:bg-[#fd9494] py-3 font-lato transition">
            Rent Now !
          </button>
        </div>
      </div>
    </div>
  );
}
