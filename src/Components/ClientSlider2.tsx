"use client"

import Image from "next/image"

const clients = [
  {
    name: "Shri Rama Temple, Chokkadi",
    src: "/images/clients/mahesh_bhat_choontaru.jpg",
  },
  {
    name: "Heggade Vahini",
    src: "/images/clients/heggade_vahini.webp",
  },
  {
    name: "Shri Harihareshwara Temple",
    src: "/images/clients/kishor_kumar_kujugodu.jpg"
  },
  {
    name: "Coding Key LLP",
    src: "/images/clients/cod.png"
  }
//   ,{
//     name: "Kulkunda Shri Basaveshwara Temple",
//     src: "/images/clients/basaveshwara.png"
//   }
]

export default function ClientSlider() {
  return (
    <div className="w-full overflow-hidden py-12 bg-gradient-to-r from-[#f8f9ff] to-[#fdeef3]">
      <div className="relative overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0e1f51] mt-2 mb-8">
            <span className="text-[#e80312]">Our Clients</span>
        </h2>
        <div className="flex animate-slide-fast md:animate-slide-medium whitespace-nowrap min-w-fit will-change-transform">
  {[...clients, ...clients].map((client, index) => (
    <div
      key={`logo-${index}`}
      className="flex-shrink-0 mx-6 lg:mx-8 flex items-center justify-center rounded-3xl"
    >
      <div
        className="w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center"
        >
            
        <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
            <Image
            src={client.src}
            alt={`${client.name} logo`}
            fill
            className="object-contain rounded-lg"
            />
        </div>
        <p className="text-[#1e293b] font-semibold text-md lg:text-xl leading-snug text-center mt-4">
            {client.name}
        </p>
    </div>

    </div>
  ))}
</div>

      </div>
    </div>
  )
}
