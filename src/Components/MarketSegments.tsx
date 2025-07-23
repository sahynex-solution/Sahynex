"use client";

import Image from "next/image";
import React from "react";

const marketData = [
  {
    title: "Organizations Spiritual Centers",
    description:
      "We offer websites, digital invitations, and other creative services for organizations and spiritual centers—making it easier to connect with their communities and share important moments.",
    icon: "/icons/temple-icon.png",
    image: "/images/spiritual.jpg",
  },
  {
    title: "E-Newspapers Magazines",
    description:
      "We design and develop engaging platforms for e-magazines and e-newspapers, enabling easy content publishing, reader interaction and seamless digital distribution.",
    icon: "/icons/newspaper-icon.svg",
    image: "/images/news.jpg",
  },
  {
    title: "Education Institution Companies",
    description:
      "We build tailored websites and digital solutions for educational institutions and companies, including tools like attendance management, event registration and internal communication helping streamline operations and boost efficiency.",
    icon: "/icons/school-icon.svg",
    image: "/images/education.jpg",
  },
];

const MarketSegments = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#FDF5F5]">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-3">
          <Image
            src="/icons/market-icon.svg"
            alt="Market Segments Logo"
            width={300}
            height={200}
          />
        </div>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          We tailor our solutions by understanding key customer groups based on
          behavior, needs and industry trends helping businesses connect better
          with their audience and drive growth.
        </p>
      </div>

      <div className="space-y-12">
        {marketData.map((segment, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-8 items-center`}
          >
            <div className="w-full md:hidden flex flex-col gap-6">
              <h4 className="text-xl font-semibold text-[#EB505A] text-center">
                {segment.title}
              </h4>

              <div className="flex justify-center">
                <Image
                  src={segment.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="min-w-[80px]"
                />
              </div>

              <p className="text-gray-700 text-base text-center">
                {segment.description}
              </p>

              <div className="w-full relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="hidden md:flex w-full md:w-1/2 flex-col items-center text-center gap-4">
              <h4 className="text-xl md:text-2xl font-semibold text-[#EB505A] leading-snug">
                {segment.title}
              </h4>

              <div className="flex justify-center">
                <Image
                  src={segment.icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="min-w-[80px]"
                />
              </div>

              <p className="text-gray-700 text-base leading-relaxed max-w-lg">
                {segment.description}
              </p>
            </div>

            <div className="hidden md:block w-full md:w-2/5 relative h-64 md:h-72 rounded-lg overflow-hidden">
              <Image
                src={segment.image}
                alt={segment.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSegments;
