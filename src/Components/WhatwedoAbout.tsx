import React from 'react';
import Image from 'next/image';

const WhatwedoAbout = () => {
  return (
   <section className="bg-gradient-to-r from-[#f8f9ff] to-[#fdeef3] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <Image
              src="/images/what-we-do.jpg"
              alt="Developer at work"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-red-500 font-semibold mb-3 text-[16px]">
                \ What We Do \
              </p>

              <h2 className="text-[1.62rem] md:text-4xl font-bold text-[#0e1f51] leading-tight mb-5 ">
                We build what people love.
              </h2>

              <p className="text-gray-700 mb-4 max-w-xl text-[15.5px] leading-relaxed">
                At Sahynex, we craft digital products that not only solve
                real-world problems but are truly loved by users. With every
                client collaboration, we bring together design, technology, and
                strategy to deliver impactful solutions that stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-[#FFF6F6] p-4 rounded-xl shadow flex flex-row sm:flex-row items-start gap-4">
                <div className="bg-white p-3 rounded-md flex-shrink-0">
                  <Image
                    src="/icons/vision-icon.svg"
                    alt="Our Vision Icon"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-red-600 font-semibold text-base mb-1">
                    Our Vision
                  </h4>
                  <p className="text-sm text-[#0e1f51] leading-snug">
                    Be a trusted innovation partner for businesses
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF6F6] p-4 rounded-xl shadow flex flex-row sm:flex-row items-start gap-4">
                <div className="bg-white p-3 rounded-md flex-shrink-0">
                  <Image
                    src="/icons/goal-icon.svg"
                    alt="Our Goal Icon"
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-red-600 font-semibold text-base mb-1">
                    Our Goal
                  </h4>
                  <p className="text-sm text-[#0e1f51] leading-snug">
                    To develop and deliver world-class products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default WhatwedoAbout;
