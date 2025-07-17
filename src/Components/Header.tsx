"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300);
  };

  return (
    <div className="flex items-center justify-between bg-[#f7f7f7] px-6 py-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo/sahynex.svg"
            alt="Sahynex Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="text-[#0e1f51] hover:text-[#EB505A] transition-colors font-medium"
        >
          Home
        </Link>

        <div className="relative">
          <button
            className="text-[#0e1f51] hover:text-[#EB505A] transition-colors font-medium flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsAboutOpen(!isAboutOpen)}
          >
            About Us
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${
                isAboutOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isAboutOpen && (
            <div
              className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/About"
                className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                onClick={() => setIsAboutOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/Team"
                className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                onClick={() => setIsAboutOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/Clients"
                className="block px-4 py-2 text-sm text-[#0e1f51] hover:bg-[#f7f7f7] hover:text-[#EB505A] font-medium"
                onClick={() => setIsAboutOpen(false)}
              >
                Our Clients
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/Services"
          className="text-[#0e1f51] hover:text-[#EB505A] transition-colors font-medium"
        >
          Our Services
        </Link>
        <Link
          href="/Career"
          className="text-[#0e1f51] hover:text-[#EB505A] transition-colors font-medium"
        >
          Career
        </Link>
        <Link
          href="/Contact"
          className="text-[#0e1f51] hover:text-[#EB505A] transition-colors font-medium"
        >
          Contact
        </Link>

        <Link href="/Contact">
          <button className="bg-[#EB505A] hover:bg-[#d83a4f] text-white px-4 py-2 rounded-md transition-colors font-medium ml-4">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
