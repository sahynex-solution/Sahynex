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
    <div className="w-full h-[160px] sm:h-[200px] md:h-[260px] lg:h-[450px] relative">
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
            <Image
              src="/images/slide1.jpg"
              alt="Slide 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
              <div className="px-4 sm:px-8 md:px-12 max-w-md sm:max-w-lg text-white space-y-2">
                <p className="text-yellow-400 text-sm font-medium">
                  IT Solutions
                </p>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  Professional IT <br className="block sm:hidden" />
                  <span className="sm:hidden">Services for Business</span>
                  <span className="hidden sm:inline">
                    {" "}
                    Services for Business
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/images/slide1.jpg"
              alt="Slide 2"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
              <div className="px-4 sm:px-8 md:px-12 max-w-md sm:max-w-lg text-white space-y-2">
                <p className="text-yellow-400 text-sm font-medium">
                  IT Solutions
                </p>
                <h1 className="text-lg sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight">
                  Marketing Solutions
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
