"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    name: "Shreekara B",
    title: "Founder of Shreek’s blogs",
    testimonial:
      "Sahynex is designed amazing platform for full project management solution.",
    image: "/images/clients/shreekara.png",
    bgColor: "bg-white text-gray-700", // White card
    quoteColor: "text-[#1f4b9b]", // Dark blue quote
  },
  {
    name: "Heggade Vahini",
    title: "Founder of Heggade Vahini",
    testimonial:
      "Sahynex is designed amazing platform for full project management solution.",
    image: "/images/clients/heggade.jpg",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
  {
    name: "Ram Prasad",
    title: "President of Sri Rama Temple Chokkadi",
    testimonial:
      "Sahynex is designed amazing platform for full project management solution.",
    image: "/images/clients/ramprasad.png",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
  {
    name: "Ram Prasad",
    title: "President of Sri Rama Temple Chokkadi",
    testimonial:
      "Sahynex is designed amazing platform for full project management solution.",
    image: "/images/clients/ramprasad.png",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
  {
    name: "Ram Prasad",
    title: "President of Sri Rama Temple Chokkadi",
    testimonial:
      "Sahynex is designed amazing platform for full project management solution.",
    image: "/images/clients/ramprasad.png",
    bgColor: "bg-[#4A90E2] text-white", // Blue card
    quoteColor: "text-white", // White quote
  },
];

export default function ClientSlider() {
  return (
    <div className="relative py-12">
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
            <SwiperSlide
              key={index}
              className="overflow-visible"
            >
              <div
                className={`${client.bgColor} rounded-2xl shadow-md p-10 m-3 flex flex-col justify-between transition-transform hover:scale-105 origin-center h-[375px]`}
              >
                <div className="relative">
                <p
                  className={`${client.quoteColor} font-bold text-6xl absolute top-0 -left-4 -translate-y-1/4 select-none pointer-events-none mb-6 mt-3`}
                  aria-hidden="true"
                  style={{ fontSize: '12rem', lineHeight: 1 }}
                >
                  “
                </p>
                <p className="mt-25 mb-2 relative z-10">{client.testimonial}</p>
                <hr className="border-gray-300 opacity-50 relative z-10" />
              </div>

                <div className="flex items-center mt-4">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={100}
                    height={100}
                    className="rounded-full mr-3"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-base">{client.name}</h4>
                    <p className="text-sm opacity-80">{client.title}</p>
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