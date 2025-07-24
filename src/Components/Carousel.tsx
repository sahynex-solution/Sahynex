"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[450px] relative">
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
          <div className="relative w-full h-full">
          {/* Background Image */}
            <Image
              src="/images/slide1.jpg"
              alt="IT Solutions Slide"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
            />
 {/* Simplified Gradient Overlay */}
 <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(259deg, rgba(243,44,66,0.2) 20%, rgba(85,117,236,0.2) 80%),
                    linear-gradient(to right, rgba(85,117,236,0.4), rgba(252,40,57,0.25))
                  `,
                  backgroundBlendMode: 'multiply, normal',
                }}
              ></div>
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="p-4 sm:p-8 text-white max-w-full space-y-2">
                <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold">
                  IT Solutions
                </p>
                <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                  Professional IT <br />
                  <span className="block">Services for Business</span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-end text-white"
            style={{
              background: `
        linear-gradient(259.34deg, rgba(243, 44, 66, 0.24) 17.47%, rgba(85, 117, 236, 0.24) 87.02%),
        linear-gradient(83.28deg, rgba(85, 117, 236, 0.22) 13.26%, rgba(252, 40, 57, 0.22) 81.36%),
        linear-gradient(to right, rgba(85,117,236,0.7), rgba(252,40,57,0.3)),
        linear-gradient(to right, rgba(252,40,57,0.7), rgba(85,117,236,0.3)),
        url('/images/slide3.jpg')
      `,
              backgroundBlendMode: 'multiply, normal, multiply, multiply, normal',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="p-4 sm:p-8 max-w-full space-y-2">
              <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold">
                IT Solutions
              </p>
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Creative <br />
                <span className="block">Marketing Services</span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
