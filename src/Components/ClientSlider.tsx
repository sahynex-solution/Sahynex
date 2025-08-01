"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    name: "Mahesh Bhat Choontharu",
    title: "President,Shri Rama Seva Samithi Chokkadi",
    testimonial:
      "They took feedback seriously and translated our requirements into a powerful tool that our customers love using.",
    image: "/images/clients/user.png",
    bgColor: "bg-[#4A90E2] text-white", // White card
    quoteColor: "text-white", // Dark blue quote
  },
  {
    name: "Ashwath Hegde",
    title: "Founder,Heggade Vahini",
    testimonial:
      "They understood our vision from day one and delivered a seamless platform that really exceeded our expectations. ",
    image: "/images/clients/Ashwath_Hegde.jpg",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
  {
    name: "Kishor Kumar Kujugodu",
    title: "President,Harihareshwara Temple",
    testimonial:
      "From UI/UX to deployment, they owned the product like it was theirs. We’d gladly work with them again.",
    image: "/images/clients/user.png",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
  {
    name: "Coding Key LLP",
    title: "A Tech Company",
    testimonial:
      "Their team brought structure, speed, and serious skill to our project. Truly impressive work ethic and expertise.",
    image: "/images/clients/cod.png",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
];

export default function ClientSlider() {
  return (
    <div className="relative py-12 ">
      <div className="relative overflow-visible">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-2"
          // Remove navigation buttons by not adding Navigation module or custom buttons
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="overflow-visible ">
              <div
                className={`${client.bgColor} rounded-2xl shadow-md p-10 m-3 flex flex-col justify-between transition-transform hover:scale-105 origin-center h-[375px]`}
              >
                <div className="relative">
                  <p
                    className={`${client.quoteColor} font-bold text-6xl absolute top-0 -left-4 -translate-y-1/4 select-none pointer-events-none mb-6 mt-3`}
                    aria-hidden="true"
                    style={{ fontSize: "12rem", lineHeight: 1 }}
                  >
                    “
                  </p>
                  <p className="mt-20 md:mt-25 mb-2 relative z-10 tracking-tight">
                    {client.testimonial}
                  </p>
                  <hr className="border-gray-300 opacity-50 relative z-10" />
                </div>

                <div className="flex items-start mt-4 md:mt-6 gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-left ">
                    <h4 className="font-semibold text-base leading-snug">
                      {client.name}
                    </h4>
                    <p className="text-sm opacity-80 leading-tight !text-left">
                      {client.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
