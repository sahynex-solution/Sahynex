"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        className="w-full h-full swiper-pagination-spacing"
        // style={{ '--swiper-pagination-bottom': '0px'} as React.CSSProperties}
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-end"
            style={{
              background: `
                linear-gradient(264deg, rgba(253, 40, 56, 0.35) 11.69%, rgba(73, 123, 250, 0.35) 77.83%),
                linear-gradient(263deg, rgba(200, 0, 14, 0.33) 21.88%, rgba(71, 123, 251, 0.33) 81.65%),
                url(/images/slide1.jpg) lightgray 50% / cover no-repeat
              `,
              backgroundBlendMode: "multiply, normal, normal",
            }}
          >
            <div className="p-4 sm:p-8 text-white space-y-2">
              <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold font-poppins">
                IT Solutions
              </p>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight font-poppins">
                Professional <br />
                <span>IT Services for Business</span>
              </h1>
     
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-end"
            style={{
              background: `
                linear-gradient(264deg, rgba(253, 40, 56, 0.35) 11.69%, rgba(73, 123, 250, 0.35) 77.83%),
                linear-gradient(263deg, rgba(200, 0, 14, 0.33) 21.88%, rgba(71, 123, 251, 0.33) 81.65%),
                url(/images/slide3.jpg) lightgray 50% / cover no-repeat
              `,
              backgroundBlendMode: "multiply, normal, normal",
            }}
          >
            <div className="p-4 sm:p-8 text-white space-y-2">
              <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold font-poppins">
                IT Solutions
              </p>
              <h1 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight font-poppins">
                Creative <br />
                <span>Marketing Services</span>
              </h1>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
