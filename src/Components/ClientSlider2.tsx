"use client"

import { link } from "fs"
import Image from "next/image"

const clients = [
  {
    name: "Heggade Vahini",
    src: "/images/clients/heggade_vahini.webp",
    link: "https://heggadevahini.com/"
  },
  {
    name: (
    <>
      Sahyadri College Of Engineering<br /> And Management, Mangaluru
    </>
  ),
    src: "/images/clients/Sahyadri.jpg",
    link: "https://sahyadri.edu.in/"
  },
  {
    name: "Shri Rama Temple, Chokkadi",
    src: "/images/clients/mahesh_bhat_choontaru.jpg",
    link: "https://srtchokkadi.org/"
  },
  {
    name: "Shri Harihareshwara Temple",
    src: "/images/clients/kishor_kumar_kujugodu.jpg",
    link: "https://shriharihareshwara.org/"
  },
  {
    name: "Coding Key LLP",
    src: "/images/clients/cod.png",
    link: "https://www.codingkeyllp.com/"
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
        <h2 className="text-4xl md:text-5xl font-bold text-[#0e1f51] mt-2 mb-12">
            <span className="text-[#e80312]">Our Clients</span>
        </h2>
        <div className="flex animate-slide-medium md:animate-slide-medium whitespace-nowrap min-w-fit will-change-transform">
  {[...clients, ...clients].map((client, index) => (
    <div
      key={`logo-${index}`}
      className="bg-white flex-shrink-0 mx-6 lg:mx-8 flex items-center justify-center rounded-3xl"
    >
      <div className="w-[230px] min-h-[260px] lg:w-[300px] lg:min-h-[340px] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center bg-white">
  <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px]">
    <Image
      src={client.src}
      alt="Client Logo"
      fill
      onClick={() => window.open(client.link, "_blank")}
      className="object-contain rounded-lg hover:cursor-pointer"
    />
  </div>
  <p className="text-[#1e293b] font-semibold text-sm sm:text-base lg:text-lg leading-snug text-center mt-4 tracking-tight">
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
