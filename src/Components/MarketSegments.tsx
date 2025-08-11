"use client";

import Image from "next/image";
import React from "react";

const marketData = [
  {
    title: "Organizations Spiritual Centers",
    description:
      "We offer websites, digital invitations, and other creative services for organizations and spiritual centers making it easier to connect with their communities and share important moments.",
    icon: "/icons/temple-icon.svg",
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
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className=" rounded-3xl overflow-hidden p-10 md:p-12 max-w-7xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-3">
          <h4
            className="text-3xl font-bold text-center"
            style={{
              background:
                "linear-gradient(90deg, #111184 0%, rgba(255, 62, 84, 0.84) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Market Segments
          </h4>
        </div>
        <p
          className="
    max-w-3xl mx-auto text-gray-600 text-base text-justify leading-relaxed 
  "   >
          We tailor our solutions by understanding key customer groups based on
          behavior, needs and industry trends helping businesses connect better
          with their audience and drive growth.
        </p>
      </div>

      <div className="space-y-12 max-w-7xl mx-auto">
        {marketData.map((segment, index) => (
          <div
            key={index}
            className={`bg-[#FDF5F5] rounded-3xl overflow-hidden p-10 md:p-12 max-w-7xl mx-auto flex flex-col gap-8 items-center md:flex-row md:items-stretch ${index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            <div className="w-full md:hidden flex flex-col gap-6">
              <h4 className="text-3xl font-bold text-[#EB505A] text-center">
                {index === 0 ? (
                  <>
                    Organizations
                    <br />
                    Spiritual Centers
                  </>
                ) : index === 1 ? (
                  <>
                    E-Newspapers
                    <br />
                    Magazines
                  </>
                ) : index === 2 ? (
                  <>
                    Education Institution
                    <br />
                    Companies
                  </>
                ) : (
                  segment.title
                )}
              </h4>

              <div
                className={`relative mx-auto ${index === 0 || index === 2
                    ? "w-[160px] h-[160px]"
                    : "w-[100px] h-[100px]"
                  }`}
              >
                <Image
                  src={segment.icon}
                  alt="icon"
                  fill
                  sizes="(max-width: 768px) 100vw, 160px"
                  className="object-contain"
                  priority={index === 0} // preload only for above-the-fold images
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </div>

            <div className="hidden md:block w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden self-end">
              <Image
                src={segment.image}
                alt={segment.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>

            <div className="hidden md:flex w-full md:w-1/2 flex-col justify-end gap-4 px-8">
              <div className="flex items-center gap-4 w-full">
                <Image
                  src={segment.icon}
                  alt="icon"
                  width={index === 0 || index === 2 ? 200 : 130}
                  height={index === 0 || index === 2 ? 200 : 130}
                  className={`${index === 0 || index === 2
                      ? "min-w-[110px]"
                      : "min-w-[80px]"
                    }`}
                />

                <h4 className="text-2xl md:text-3xl font-bold text-[#EB505A] leading-snug">
                  {segment.title}
                </h4>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                {segment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSegments;
