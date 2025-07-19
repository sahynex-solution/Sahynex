'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Image from "next/image";

const slides = [
  '/images/placement1.svg',
  '/images/placement2.svg',
  '/images/placement3.svg',
  '/images/placement4.svg',
];

const services = [
  {
    title: "Web Design / Development",
    icon: "/icons/web-design.svg",
    desc: "We specialize in building responsive and dynamic websites that not only look great but also perform seamlessly across all devices, ensuring a strong digital presence for your brand."
  },
  {
    title: "UI/UX Design",
    icon: "/icons/ui-ux.svg",
    desc: "Our design philosophy centers around creating user experiences that are visually engaging and intuitively functional, turning complex ideas into interfaces that feel natural and effortless to navigate."
  },
  {
    title: "Website Migration",
    icon: "/icons/migration.svg",
    desc: "Whether you're shifting platforms or upgrading infrastructure, we ensure smooth and secure website migration with zero data loss, minimized downtime, and preserved SEO performance."
  },
  {
    title: "App Development",
    icon: "/icons/app-dev.svg",
    desc: "From concept to launch, we develop mobile and web apps that are reliable, scalable, and tailored to your unique business needs, combining speed, aesthetics, and functionality."
  },
  {
    title: "Videography",
    icon: "/icons/video.svg",
    desc: "Our team produces professional video content that captures your story with impact — whether for promotional campaigns, events, or branding — ensuring your message is seen and remembered."
  },
  {
    title: "Digital Marketing",
    icon: "/icons/marketing.svg",
    desc: " We craft and execute data-driven digital marketing strategies that enhance visibility, engage your audience, and drive measurable results across SEO, social media, email, and paid channels."
  },
];

export default function Page() {
  const swiperRef = useRef<any>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 lg:px-20 relative overflow-hidden bg-gradient-to-r from-blue-50 via-pink-50 to-white">
        {/* ✅ Static Transparent Bubbles */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-8 left-8 w-28 h-28 rounded-full bg-blue-300 opacity-40"></div>
          <div className="absolute top-1/3 right-12 w-36 h-36 rounded-full bg-pink-300 opacity-40"></div>
          <div className="absolute bottom-12 left-1/4 w-24 h-24 rounded-full bg-purple-300 opacity-30"></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 rounded-full bg-green-300 opacity-25"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-yellow-300 opacity-30"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto relative z-10">
          {/* ✅ Left Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-start justify-center">
            <p className="text-[#EB505A] text-base font-semibold mb-2">\ We Are Here \</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0E1F51] mb-4 leading-tight">
              Better Insights For <br /> Business Growth
            </h1>
            <button className="bg-[#FF3E54] hover:bg-[#EB505A] text-white px-6 py-3 rounded-md text-base font-semibold mt-2">
              View More
            </button>
          </div>

          {/* ✅ Right Swiper Carousel (unchanged) */}
          <div className="lg:w-1/2 w-full relative flex items-center justify-center">
            {/* Left Button */}
            <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-20 flex items-center">
              <button
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow cursor-pointer border-2 border-[#FF3E54] transition hover:bg-[#FF3E54] hover:text-white"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous Slide"
              >
                <span className="text-[#FF3E54] text-2xl font-bold">&lt;</span>
              </button>
            </div>
            {/* Right Button */}
            <div className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-20 flex items-center">
              <button
                className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow cursor-pointer border-2 border-[#FF3E54] transition hover:bg-[#FF3E54] hover:text-white"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next Slide"
              >
                <span className="text-[#FF3E54] text-2xl font-bold">&gt;</span>
              </button>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.5,
                slideShadows: false,
              }}
              className="w-full max-w-xl mx-auto">
              {slides.map((src, i) => (
                <SwiperSlide
                key={i}
                className="!w-[280px] !h-[450px] sm:!w-[240px] sm:!h-[380px] rounded-xl overflow-visible shadow-xl relative"
              >
                <div className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-[20px] h-full bg-gradient-to-b from-pink-400 to-pink-200 rounded-md"
                    style={{ clipPath: 'polygon(100% 0, 0 10%, 0 90%, 100% 100%)' }}
                  />
                </div>
              
                <div className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10">
                  <div
                    className="w-[20px] h-full bg-gradient-to-b from-pink-400 to-pink-200 rounded-md"
                    style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0% 100%)' }}
                  />
                </div>
              
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={240}
                  height={380}
                  className="w-[280px] h-[450px] sm:w-[240px] sm:h-[380px] object-cover rounded-xl"
                />
              </SwiperSlide>
              

              ))}

            </Swiper>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="bg-white py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-pink-500 font-semibold text-lg">\ Services \</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-2 mb-4">Our Expertise</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-start shadow-sm hover:shadow-lg transition"
            >
              <Image src={service.icon} alt={service.title} width={64} height={64} className="mb-4" />
              <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
              <div className="w-16 h-2 bg-pink-500 rounded-full mb-4"></div>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}