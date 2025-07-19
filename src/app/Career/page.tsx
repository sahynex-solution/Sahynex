"use client";
import React from "react";
import Link from "next/link";
import { Briefcase, Users, Code } from "lucide-react";

const CareersSectionWidgets = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-20 min-h-screen">
      <div className="max-w-5xl mx-auto mb-56">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Careers at Sahynex
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We’re building more than just products — we’re shaping careers. Join a team where growth, collaboration, and impact are at the heart of everything we do.
        </p>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl group-hover:scale-105 transition">
              <Briefcase size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition">
                Real Projects
              </h4>
              <p className="text-gray-600 text-sm">
                Deliver high-impact work for real-world clients across industries.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-105 transition">
              <Users size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                Strong Culture
              </h4>
              <p className="text-gray-600 text-sm">
                Thrive in a collaborative, startup-like environment where your voice matters.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl group-hover:scale-105 transition">
              <Code size={24} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                Modern Stack
              </h4>
              <p className="text-gray-600 text-sm">
                Build with the latest technologies powering tomorrow's digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Link href="https://work.sahynex.com">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-200 cursor-pointer">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareersSectionWidgets;
