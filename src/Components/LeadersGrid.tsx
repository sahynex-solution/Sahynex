import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const LeadersGrid = () => {
  return (
    <div>
      <section
        id="team"
        className="bg-white py-12 px-3 md:px-6 md:px-16 scroll-mb-8 mb-0"
      >
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1f51] mb-10">
            Our Leaders
          </h2>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4 sm:px-8">
            {[
              {
                name: "Dr. Manjunath Bhandary",
                title: "Founder",
                image: "/images/leaders/manjunath.png",
              },
              {
                name: "Dr. Sudheer Shetty",
                title: "Director",
                image: "/images/leaders/sudheer.jpg",
              },
              {
                name: "Dr. Shamanth Rai",
                title: "Director & COO",
                image: "/images/leaders/shamantha.jpg",
              },
              {
                name: "Dr. Rithesh Pakkala P.",
                title: "CEO",
                image: "/images/leaders/rithesh3.png",
              },
              {
                name: "Mr. Harish A",
                title: "CIO",
                image: "/images/leaders/harisha.png",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className="bg-[#f9f9f9] rounded-xl shadow-lg p-2 md:p-4 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow min-w-[235px]"
              >
                {/* Image Container - Perfect Square, Responsive */}
                <div className="relative w-full aspect-square mb-4  max-w-[220px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-[#0e1f51] font-semibold text-lg">{leader.name}</h3>
                <p className="text-[#EB505A] text-sm font-medium">{leader.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default LeadersGrid;
