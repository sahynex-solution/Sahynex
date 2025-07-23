"use client";

import Image from "next/image";
import Link from "next/link";

const ConnectFooter = () => {
  return (
    <div className="relative w-full h-[300px]">
      {/* Background image and gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/connect-Footer.jpg"
          alt="Connect Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-red-600/80 z-10" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 h-full w-full flex flex-col md:flex-row items-start md:items-end justify-between px-6 md:px-16 py-6 text-white gap-y-4">
        {/* Text */}
        <div className="flex flex-col gap-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
            Need Assistance?
          </h2>
          <p className="text-sm sm:text-base text-white">
            Get in touch with Sahynex for personalized support.
          </p>
        </div>

        {/* Button */}
        <div>
          <Link href="/Contact">
            <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded shadow hover:bg-red-100 transition">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectFooter;
