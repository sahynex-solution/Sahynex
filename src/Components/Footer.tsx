"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  return (
    <footer className="bg-[#0d1440] text-white py-6 md:py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="mb-4 leading-relaxed text-gray-300 md:mt-10">
            At Sahynex, we believe clarity in design and function leads to
            products that users truly connect with and inspire innovation in
            every interaction.
          </p>
          <div className="flex gap-4 mt-6">
            <SocialIcon
              href="https://www.linkedin.com/company/sahynex/"
              iconSrc="/footer/linkedin.svg"
              alt="LinkedIn"
            />
            <SocialIcon
              href="https://www.instagram.com/sahynex?igsh=NXMycTJrYjZ5bW42"
              iconSrc="/footer/instagram.svg"
              alt="Instagram"
            />
            <SocialIcon
              href="https://www.instagram.com/sahynex/"
              iconSrc="/footer/facebook.svg"
              alt="Facebook"
            />
            <SocialIcon
              href="https://x.com/sahynex?t=x9L3bvGfqIe7_zmIALHjtg&s=09"
              iconSrc="/footer/twitter.svg"
              alt="Twitter"
            />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Services</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <ul className="text-gray-300 space-y-2">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Digital Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Career</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <div className="space-y-4">
            <CareerItem
              href="/Career"
              iconSrc="/footer/react.svg"
              alt="React"
              title="ReactJs Dev. Intern"
            />
            <CareerItem
              href="/Career"
              iconSrc="/footer/wordpress.svg"
              alt="WordPress"
              title="Wordpress Dev. Intern"
            />
            <CareerItem
              href="/Career"
              iconSrc="/footer/python.svg"
              alt="Python"
              title="Python Developer Intern"
            />
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-1">Subscribe Us</h4>
          <div className="w-10 h-1 bg-red-500 mb-4 rounded"></div>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Subscribe to our periodic newsletter for updates on innovations,
            client stories, and more from the team at Sahynex.
          </p>
          <form
            className="flex flex-col gap-3"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = form.email.value;
              if (!email) return;
              setSubscriptionMessage("");
              try {
                const res = await fetch("/api/subscription", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
                const data = await res.json();
                if (res.status === 201) {
                  setSubscriptionMessage("Thank you for subscribing!");
                  form.reset();
                } else {
                  setSubscriptionMessage(data.error || "Subscription failed.");
                }
              } catch (err) {
                setSubscriptionMessage("Subscription failed.");
              }
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-2 rounded-md text-black bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
          {subscriptionMessage && (
            <p
              className={`mt-2 text-sm ${
                subscriptionMessage.startsWith("Thank")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {subscriptionMessage}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({
  href,
  iconSrc,
  alt,
}: {
  href: string;
  iconSrc: string;
  alt: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-2 rounded-md hover:bg-red-100 transition w-10 h-10 flex items-center justify-center"
  >
    <Image
      src={iconSrc}
      alt={alt}
      width={18}
      height={18}
      style={{ width: "auto", height: "auto" }}
      className="object-contain"
    />
  </Link>
);

const CareerItem = ({
  href,
  iconSrc,
  alt,
  title,
}: {
  href: string;
  iconSrc: string;
  alt: string;
  title: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 group hover:opacity-90 transition"
  >
    <div className="bg-white text-red-500 p-2 w-10 h-10 rounded-md flex items-center justify-center">
      <Image src={iconSrc} alt={alt} width={40} height={40} style={{ width: "auto", height: "auto" }} />
    </div>
    <p className="text-red-500 font-medium group-hover:underline">{title}</p>
  </Link>
);
