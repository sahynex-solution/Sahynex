"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ConnectFooter = () => {
  return (
    <div className="relative w-full h-[300px] font-inter"> 
      <div className="absolute inset-0">
        <Image
          src="/images/connect-Footer.svg"
          alt="Connect Banner"
          layout="fill"
          objectFit="cover"
          className="z-0" 
        />
        <div className="absolute inset-0 z-10" />
      </div>

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
  );
};

export default ConnectFooter;
