"use client";

import Image from "next/image";

import { Chicle } from "next/font/google";
import Link from "next/link";

const chicle = Chicle({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSectionCustom() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image (Top Section) */}
      <div className="relative w-full h-[50vh] md:h-[100vh] flex items-center justify-center">
        <Image
          src="/images/hero-1.jpg" // Replace with your image path
          alt="Restaurant background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 md:bg-black/0 " />

        {/* Logo only over image on mobile */}
        <div className="absolute  bottom-[13rem] md:bottom-auto md:left-20 md:top-40 flex justify-center md:justify-start z-20">
          <div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-lg"
            data-aos="fade-right"
          >
            <img
              src="/logo-1.png"
              alt="Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
        </div>

        {/* Curved white bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-white rounded-t-[50%]" /> */}
      </div>

      {/* Text + Buttons Section (below image on mobile, overlay on desktop) */}
      <div className="relative bg-white md:bg-transparent md:absolute md:inset-0 md:flex md:items-center md:px-20 md:justify-start mt-0 md:mt-0">
        <div className="w-full flex justify-center md:justify-start">
          <div className="text-[#2b2b2b] md:text-white max-w-lg px-6 pb-6  mt-[-60px] md:mt-0 md:p-0  text-left md:text-left">
            {/* Title */}
            <h2
              className={`${chicle.className} text-5xl md:text-6xl my-3 text-amber-600 md:text-white`}
            >
              Indozest Fusion Cafe
            </h2>

            {/* Features */}
       

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-start gap-4 pt-4">
              <Link
                href="https://eat.allo.restaurant/restaurant/masala-taste-of-india"
                rel="noopener noreferrer"
                data-aos="fade-left"
                className={`${chicle.className}  bg-amber-600 hover:bg-[#ecb32e] text-2xl text-white font-semibold px-6 py-1 rounded-xl transition text-center tracking-wide`}
               
            
              >
                🍴 ORDER NOW
              </Link>

              <Link
                href="/#bf"
                rel="noopener noreferrer"
                className={`${chicle.className}  bg-white text-amber-600 text-2xl font-bold px-6 py-1 rounded-xl  border-amber-500 border hover:bg-[#bd8a15] hover:text-white transition text-center`}
               
              >
                MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
