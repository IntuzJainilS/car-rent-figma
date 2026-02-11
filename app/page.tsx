import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TripType from "./components/TripType";
import PopularCar from "./components/PopularCar";
import Services from "./components/Services";
import Carlogo from "./components/Carlogo";
import Advantages from "./components/Advantages";
import ContactUs from "./components/ContactUs";
import Reviews from "./components/Reviews";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <header><Navbar/></header>
    <HeroSection/>
    <TripType/>
    <Carlogo/>
    <PopularCar/>
    <Services/>
    <Advantages/>
    <ContactUs/>
    <Reviews/>
    <Subscribe/>
    <footer><Footer/></footer>
   </div>
  );
}
