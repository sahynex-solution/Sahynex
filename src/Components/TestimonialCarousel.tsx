"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shri Mahesh Bhat Choontharu",
    title: "President of Shri Rama Seva Samiti Chokkadi",
    image: "/user.png",
    message:
      "Sahynex stood out for their responsiveness and attention to detail. They took feedback seriously and translated our requirements into a powerful tool that our customers love using",
  },
  {
    name: "Heggade Vahini",
    title: "CEO",
    image: "/testimonials/user2.svg",
    message:
      "They understood our vision from day one and delivered a seamless platform that exceeded expectations. Their dedication and professionalism made the entire process smooth and collaborative",
  },
  {
    name: "Shri Kishor Kumar Kujugodu",
    title: "President,Harihareshwara Temple",
    image: "/user.png",
    message:
      "The team at Sahynex brought strong technical expertise and creative thinking to our project. From UI/UX to deployment, they owned the product like it was theirs. We’d gladly work with them again.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-white testimonial-carousel">
      <div className="text-center mb-10">
        <h2 className="text-red-500 font-semibold">\\ From our Customers \\</h2>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Testimonials
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{ clickable: true }}
        className="max-w-5xl mx-auto px-4 "
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 mx-2 h-full flex flex-col justify-between transition-all duration-300 mb-12">
              <div className="flex justify-items-start mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>

              <p className="text-sm text-gray-700 mb-4 text-center">
                {t.message}
              </p>

              <div className="text-left mt-4">
                <p className="text-sm font-semibold text-pink-600">{t.name}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
