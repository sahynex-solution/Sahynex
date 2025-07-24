"use client";

import Image from "next/image";
import React from "react";
import ClientSlider from "@/Components/ClientSlider";
import LeadersGrid from "@/Components/LeadersGrid";
import WhatwedoAbout from "@/Components/WhatwedoAbout";

const AboutPage = () => {
  return (
    <div className="">
      <section className="relative py-20 px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8DB8F7] to-[rgba(255,62,84,0.84)] opacity-20"></div>

        <div className="relative lg:w-1/2 w-full flex justify-center z-10">
          <Image
            src="/images/slide1.jpg"
            alt="Students working together"
            width={480}
            height={320}
            className="rounded-[32px] object-cover w-[340px] h-[240px] lg:w-[480px] lg:h-[320px] shadow-xl"
          />
        </div>

        <div className="relative lg:w-1/2 w-full flex flex-col justify-center lg:pl-12 z-10">
          <p className="text-[#EB505A] text-base font-semibold mb-2 flex items-center gap-2">
            <span className="text-[#EB505A]">\</span>
            <span>About</span>
            <span className="text-[#EB505A]">\</span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            One of the Fastest Way{" "}
            <span className="block lg:block lg:mt-1">to Business Growth</span>
          </h2>

          <p className="text-base text-amber-50 mb-8 max-w-xl">
            We are a passionate team committed to accelerating your business
            growth through innovative digital solutions, combining strategy,
            design, and technology to deliver impactful results that help you
            stay ahead in a rapidly evolving market
          </p>
          <div className="bg-[#fbeaec] rounded-2xl p-6 flex items-center gap-6 mb-8 shadow">
            <Image
              src="/icons/contact.svg"
              alt="Contact icon"
              width={64}
              height={64}
            />
            <div>
              <p className="text-[#2B2B4F] font-semibold text-base mb-1">
                Get Instant Professional Advice
              </p>
              <p className="text-[#EB505A] text-sm">
                Ready to Help :{" "}
                <a href="tel:+918762205219" className="font-bold">
                  +91 8762205219
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white mt-0 mb-0 py-25 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 ">
           \ About Sahynex \
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed  max-w-5xl mx-auto px-4">
            Driven by a deep passion for building meaningful digital solutions,
            Sahynex is where innovation meets execution. Evolving from our days
            as ISDC, we’ve worked with startups and enterprises alike bringing
            thoughtful design, powerful development, and a relentless focus on
            the user. For us, every project is a commitment: to quality, to
            collaboration, and to creating tools that people genuinely love to
            use.
          </p>
        </div>
      </div>
      <WhatwedoAbout />
      <LeadersGrid />
      <section id="clients" className="relative pt-6 pb-16 px-6 md:px-16 ">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8DB8F7] to-[rgba(255,62,84,0.84)] opacity-20"></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] mt-2 mb-0">
            <span className="text-[#e80312]">Our Clients</span>
          </h2>
          <ClientSlider />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
