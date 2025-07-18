"use client";

import Image from "next/image";
import React from "react";
import { Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import ClientSlider from "@/Components/ClientSlider"; // ✅ We'll create this separately

const AboutPage = () => {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="relative py-20 px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8DB8F7] to-[rgba(255,62,84,0.84)] opacity-20"></div>

        {/* Left Image */}
        <div className="relative lg:w-1/2 w-full flex justify-center z-10">
          <Image
            src="/images/slide1.jpg"
            alt="Students working together"
            width={480}
            height={320}
            className="rounded-[32px] object-cover w-[340px] h-[240px] lg:w-[480px] lg:h-[320px] shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="relative lg:w-1/2 w-full flex flex-col justify-center lg:pl-12 z-10">
          <p className="text-[#EB505A] text-base font-semibold mb-2 flex items-center gap-2">
            <span className="text-[#EB505A]">\</span>
            <span>About</span>
            <span className="text-[#EB505A]">\</span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#2B2B4F] mb-4 leading-tight">
            One of the Fastest Way to <br /> Business Growth
          </h2>
          <p className="text-[#6B6B8F] text-base mb-8 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute.
          </p>
          <div className="bg-[#fbeaec] rounded-2xl p-6 flex items-center gap-6 mb-8 shadow">
            <Image src="/icons/contact.svg" alt="Contact icon" width={64} height={64} />
            <div>
              <p className="text-[#2B2B4F] font-semibold text-base mb-1">
                Get Instant Professional Advice
              </p>
              <p className="text-[#EB505A] text-sm">
                Ready to Help : <span className="font-bold">+1 356 678 7897</span>
              </p>
            </div>
          </div>
          <a
            href="#"
            className="text-[#EB505A] text-xs font-semibold tracking-wider mt-2 underline flex items-center gap-2"
          >
            READ MORE
            <Image src="/icons/more.svg" alt="More Icon" width={16} height={16} />
          </a>
        </div>
      </section>

      {/* ✅ About Sahynex Section */}
      <div className="bg-white mt-10 mb-10 py-25 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Sahynex</h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            “But I must explain to you how all this mistaken idea of denouncing pleasure
            and praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of the truth,
            the master-builder of human happiness. No one rejects, dislikes, or avoids
            pleasure itself, because it is pleasure, but because those who do not know
            how to pursue pleasure rationally encounter consequences that are extremely
            painful.”
          </p>
        </div>
      </div>


      {/* ✅ What We Do Section */}
      <section className="bg-gradient-to-r from-[#f8f9ff] to-[#fdeef3] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-2xl overflow-hidden shadow-lg h-full flex justify-center items-center">
            <Image
              src="/images/what-we-do.jpg"
              alt="Developer at work"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-red-500 font-semibold mb-3 text-[16px]">
                \ What We Do \
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] leading-tight mb-5">
                We Develop Product That <br /> People Love to Use.
              </h2>
              <p className="text-gray-700 mb-4 max-w-xl text-[15.5px] leading-relaxed">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="bg-red-100 p-2.5 rounded-full text-red-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold text-base">Our Vision</h4>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow flex items-start gap-4">
                <div className="bg-red-100 p-2.5 rounded-full text-red-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-red-600 font-semibold text-base">Our Goal</h4>
                  <p className="text-sm text-gray-600">
                    It is a long established fact that
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="/About"
              className="text-sm font-semibold text-[#0e1f51] hover:text-[#EB505A] flex items-center gap-1"
            >
              <span>READ MORE</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="team" className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#EB505A] text-base font-semibold mb-2">\ Team \</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] mb-10">
            Our Leaders
          </h2>

    {/* Leaders Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Dr. Manjunath Bhandary",
          title: "Founder & Managing Director",
          image: "/images/leaders/manjunath.png",
        },
        {
          name: "Dr. Sudheer Shetty",
          title: "Director",
          image: "/images/leaders/sudheer.jpg",
        },
        {
          name: "Dr. Shamantha Rai B",
          title: "Director",
          image: "/images/leaders/shamantha.jpg",
        },
        {
          name: "Dr. Rithesh Pakkala P.",
          title: "CEO",
          image: "/images/leaders/rithesh.png",
        },
        {
          name: "Dr. Duddela Sai Prashanth",
          title: "Placeholder",
          image: "/images/leaders/prashanth.png",
        },
        {
          name: "Mr. Harisha",
          title: "Placeholder",
          image: "/images/leaders/harisha.png",
        },
        {
          name: "Mr. Vasudeva Rao P V",
          title: "Placeholder",
          image: "/images/leaders/vasudeva.jpg",
        },
        {
          name: "Shreekara B",
          title: "Placeholder",
          image: "/images/leaders/shreekara.png",
        },
      ].map((leader, index) => (
        <div
          key={index}
          className="bg-[#f9f9f9] rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
        >
          {/* ✅ Perfectly Equal Size Container */}
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-[#0e1f51] font-semibold text-lg">
            {leader.name}
          </h3>
          <p className="text-[#EB505A] text-sm font-medium">
            {leader.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ✅ Our Clients Section (Gradient Overlay) */}
      <section id="clients" className="relative pt-6 pb-16 px-6 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8DB8F7] to-[rgba(255,62,84,0.84)] opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] mb-0">
            Our <span className="text-[#EB505A]">Clients</span>
          </h2>
          <ClientSlider />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;