"use client";

import Image from "next/image";
import Link from "next/link";

const ConnectFooter = () => {
  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute inset-0">
        <Image
          src="/images/connect-Footer.jpg"
          alt="Connect Banner"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/70 via-purple-600/50 to-red-700/80 z-10" />
      </div>

      <div className="relative z-20 h-full flex flex-col justify-end px-6 sm:px-10 pb-6 text-white">
        <div className="max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
            Connect with a Sahynex representative!
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white">
            Got any quarries? Want to know more about our services?{" "}
            <Link
              href="/Contact"
              className="text-blue-300 font-bold underline inline-block sm:inline"
            >
              Contact us now!
            </Link>
          </p>
        </div>

        <div className="mt-4 sm:mt-0 md:absolute md:top-1/2 md:right-6 md:-translate-y-1/2">
          <Link href="/Contact">
            <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded shadow hover:bg-red-100 transition mx-auto md:mx-0 block">
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectFooter;
