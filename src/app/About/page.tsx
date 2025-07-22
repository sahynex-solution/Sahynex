"use client";

import Image from "next/image";
import React from "react";
import { Lightbulb, Target } from "lucide-react";
import Link from "next/link";
import ClientSlider from "@/Components/ClientSlider"; // ✅ We'll create this separately
import LeadersGrid from "@/Components/LeadersGrid";

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
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-60 mb-4 leading-tight">
            One of the Fastest Way to <br /> Business Growth
          </h2>
          <p className="text-amber-50 text-base mb-8 max-w-xl">
          We are a passionate team committed to accelerating your business growth through innovative digital solutions, combining strategy, design, and technology to deliver impactful results that help you stay ahead in a rapidly evolving market
          </p>
          <div className="bg-[#fbeaec] rounded-2xl p-6 flex items-center gap-6 mb-8 shadow">
            <Image src="/icons/contact.svg" alt="Contact icon" width={64} height={64} />
            <div>
              <p className="text-[#2B2B4F] font-semibold text-base mb-1">
                Get Instant Professional Advice
              </p>
                <p className="text-[#EB505A] text-sm">
                Ready to Help : <a href="tel:+918762205219" className="font-bold">+91 8762205219</a>
                </p>
            </div>
          </div>
          {/* <a
            href="#"
            className="text-[#EB505A] text-xs font-semibold tracking-wider mt-2 underline flex items-center gap-2"
          >
            READ MORE
            <Image src="/icons/more.svg" alt="More Icon" width={16} height={16} />
          </a> */}
        </div>
      </section>

      {/* ✅ About Sahynex Section */}
      <div className="bg-white mt-10 mb-10 py-25 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 ">About Sahynex</h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Driven by a deep passion for building meaningful digital solutions, Sahynex is where innovation meets execution. Evolving from our days as ISDC, we’ve worked with startups and enterprises alike—bringing thoughtful design, powerful development, and a relentless focus on the user. For us, every project is a commitment: to quality, to collaboration, and to creating tools that people genuinely love to use.
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
              At Sahynex, we craft digital products that not only solve real-world problems but are truly loved by users. With every client collaboration, we bring together design, technology, and strategy to deliver impactful solutions that stand out.
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
                  Be A Trusted innovation partner for businesses
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
                  To develop and deliver world-class products 
                  </p>
                </div>
              </div>
            </div>
            {/* <Link
              href="/About"
              className="text-sm font-semibold text-[#0e1f51] hover:text-[#EB505A] flex items-center gap-1"
            >
              <span>READ MORE</span>
            </Link> */}
          </div>
        </div>
      </section>

      <LeadersGrid/>

      {/* ✅ Our Clients Section (Gradient Overlay) */}
      <section id="clients" className="relative pt-6 pb-16 px-6 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8DB8F7] to-[rgba(255,62,84,0.84)] opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] mb-0">
             <span className="text-[#e80312]">Our Clients</span>
          </h2>
          <ClientSlider />
        </div>
      </section>

    </div>
  );
};

export default AboutPage;