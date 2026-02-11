import backgroundimage from "@/public/servicesection/servicebackground.png"
import img1 from "@/public/servicesection/serviceimg1.png"
import img2 from "@/public/servicesection/serviceimg2.png"
import img3 from "@/public/servicesection/serviceimg3.png"
import key from "@/public/servicesection/Keyicon.svg"
import privatedriver from "@/public/servicesection/Agenticon.svg"
import trip from "@/public/servicesection/Trip.svg"
import Image from "next/image";

const services = [
  {
    title: "Instant Rent",
    desc: "We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .",
    bg: img1,
    icon: key,
    btn: true,
  },
  {
    title: "Private Driver",
    desc: "We have professional agents to accompany your trip useful for your protection from disturbances that you do not like . . .",
    bg: img2,
    icon: privatedriver,
    btn: false,
  },
  {
    title: "Long Trip",
    desc: "Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips . . . ",
    bg: img3,
    icon: trip,
    btn: false,
  },
];

const Services = () => {
  return (
    <div className="relative z-20"
      // style={{
      //   backgroundImage: `url(${backgroundimage.src})`,
      //   backgroundColor: 'rgba(225, 225, 225, 0.9)', // Added quotes
      //   backgroundBlendMode: 'overlay'        // This mixes the color and image
      // }}
    >
      <div className="absolute bg-cover bg-center bg-no-repeat w-full! h-full! top-0 bottom-0 left-0 right-0 z-10 opacity-10" 
      style={{
        backgroundImage: `url(${backgroundimage.src})`,
        // backgroundColor: 'rgba(225, 225, 225, 0.9)', // Added quotes
        // backgroundBlendMode: 'overlay'        // This mixes the color and image
      }}
       />
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest font-bold text-[20px] text-[#FBB7B7] font-lato">SERVICES</p>
            <h2 className="text-4xl font-semibold mt-2 font-lato text-[#737373]">Our Services</h2>
            <p className="text-[#A6A6A6] mt-3 mx-auto font-lato">
              Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="relative h-105 overflow-hidden group"
              >
                <Image
                  src={item.bg}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition" /> */}

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8 text-white">
                  <Image src={item.icon} alt="" width={75} height={75} />
                  <h3 className="text-2xl font-medium font-lato mt-6 text-[#F2F2F2]">{item.title}</h3>
                  <p className="text-sm font-medium font-lato mt-4 text-[#FFFFFF]">{item.desc}</p>

                  <button
                    className="mt-8 px-6 py-2 text-sm border transition bg-[#FFFFFF] border-[#737373] text-[#737373] hover:bg-[#F55757] hover:text-[#FFFFFF] shadow-[0px_0px_25px_0px_#B40D0D1A]"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

  )
}

export default Services
