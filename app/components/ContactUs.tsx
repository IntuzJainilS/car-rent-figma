import React from "react";
import mail from "@/public/contactus/fi_mail.svg";
import phone from "@/public/contactus/fi_phone.svg";
import timer from "@/public/contactus/fi_clock.svg";
import location from "@/public/contactus/u_location-point.svg";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

const ContactUs = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div>
          <div className="mb-10">
            <p className="text-sm tracking-widest font-bold text-[#FBB7B7]">
              GET IN TOUCH
            </p>

            <h2 className="text-3xl sm:text-4xl font-medium mt-2 text-[#737373]">
              Contact Us
            </h2>

            <p className="text-[#A6A6A6] text-sm sm:text-base mt-3 max-w-md">
              If you need consultation with us, you can write a message or call
              us, we will respond as quickly as possible.
            </p>
          </div>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Image src={mail} alt="mail" width={22} height={22} />
              <span className="text-sm text-[#8C8C8C]">
                lorenna@gmail.com
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Image src={phone} alt="phone" width={22} height={22} />
              <span className="text-sm text-[#8C8C8C]">
                +62 8221 1222 0001
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Image src={timer} alt="time" width={22} height={22} />
              <span className="text-sm text-[#8C8C8C]">
                Everyday : 08.00–21.00
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Image src={location} alt="location" width={22} height={22} />
              <span className="text-sm text-[#8C8C8C] max-w-sm leading-relaxed">
                Jl. Raya Cihaluan No.112 Tangerang Selatan,
                Indonesia 41222
              </span>
            </li>
          </ul>

          <div className="mt-10">
            <SocialIcons />
          </div>
        </div>

        <div>
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-lg">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842929558!2d72.4149288673392!3d23.02047410137282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1770716459042!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 w-full h-full border-0"></iframe>

          </div>

          <button className="mt-8 w-full sm:w-50 h-13.75 bg-[#F55757] active:bg-[#fd9494] text-white flex items-center justify-center font-bold text-sm transition-all hover:opacity-90">
            Office Center Map
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;
