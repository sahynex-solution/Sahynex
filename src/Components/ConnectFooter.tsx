"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ConnectFooter = () => {
  return (
    <div className="relative w h-[250px] md:h-[350px] font-inter">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <Image
          src="/images/Get_In_Touch.jpg"
          alt="Students in a group"
          fill
          className="object-cover z-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `
                    linear-gradient(259deg, rgba(243,44,66,0.2) 40%, rgba(85,117,236,0.2) 100%),
                    linear-gradient(to right, rgba(85,117,236,0.4), rgba(252,40,57,0.25)),
                    linear-gradient(to right, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.25) 100%)
                    `,
            backgroundBlendMode: 'multiply, overlay, multiply',
          }}
        ></div>
        {/* Foreground Content */}
        <div className="relative z-20 h-full w-full flex flex-row items-end justify-between px-4 sm:px-6 py-6 text-white gap-x-4">
          <div className="flex flex-col gap-y-2 max-w-xs sm:max-w-md">
            <h2 className="text-lg sm:text-xl font-bold text-yellow-300">
              Need Assistance?
            </h2>
            <p className="text-xs sm:text-sm text-white">
              Get in touch with Sahynex for personalized support.
            </p>
          </div>
          <div>
            <Link href="/Contact">
              <button className="bg-white text-red-600 font-medium text-xs sm:text-sm px-2.5 py-1 sm:px-4 sm:py-2 rounded-md shadow-lg hover:bg-red-100 transition duration-300 ease-in-out transform hover:scale-105">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectFooter;
