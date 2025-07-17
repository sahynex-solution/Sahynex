'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/slide1.png"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center">
              <div className="px-10 max-w-xl text-white">
                <p className="text-yellow-400 text-sm font-semibold mb-2">IT Solutions</p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Professional IT <br /> Services for Business
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen">
            <Image
              src="/images/slide1.png"
              alt="Slide 2"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center">
              <div className="px-10 max-w-xl text-white">
                <p className="text-yellow-400 text-sm font-semibold mb-2">IT Solutions</p>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
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
