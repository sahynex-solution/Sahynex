"use client";

import { FC } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { useState } from 'react'; // Import useState

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: FC = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const messageText = formData.get('message') as string;

    const contactData: ContactFormData = {
      name,
      email,
      phone,
      message: messageText,
    };

    try {
      const response = await fetch('/apis/contact', { // Call the API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for your message! We will get back to you soon.');
        form.reset(); // Clear the form
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#2C2F7D] to-[#431344] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#EB505A] text-sm font-semibold tracking-wider">
            \ Get In Touch \
          </h2>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
            Hey! Let's Connect
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#ebeefa] to-[#F8E2E6] rounded-lg p-6 sm:p-8 shadow-lg border border-white/20">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition "
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
              />
              <input
                type="tel"
                placeholder="Phone"
                name="phone"
                required
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition resize-none"
              />
              {message && (
                <p className={`text-center ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {message}
                </p>
              )}
              <button type="submit" disabled={isSubmitting} className={`bg-[#EB505A] hover:bg-[#e03e4b] transition-colors text-white font-semibold px-6 py-3 rounded-md w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Sending...' : 'Send Now'}
              </button>
            </form>
          </div>

          <div className="bg-[#fde1e6] backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg border border-white/20 text-[#322a56] space-y-8 w-86">
            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiPhone size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Call Anytime
                </h3>
                <p className=" text-[#322a56]">+91 8762205219</p>
                {/* <p className=" text-[#322a56]">+91 67477473984</p> */}
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiMail size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Send Email
                </h3>
                <p className=" text-[#322a56]">sahynexsolutions@gmail.com</p>
                {/* <p className=" text-[#322a56]">hello@sahynex.com</p> */}
              </div>
            </div>

            <div className="flex items-start">
              <div className="mt-1 mr-4">
                <FiMapPin size={20} className="text-[#EB505A]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#EB505A]">
                  Visit Us
                </h3>
                <p className=" text-[#322a56]">5th floor Sahyadri campus</p>
                <p className=" text-[#322a56]">Adyar Mangaluru</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#322a56]">
                Follow us
              </h3>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/company/sahynex/" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaLinkedinIn size={20} />
                  </div>
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaInstagram size={20} />
                  </div>
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaFacebookF size={20} />
                  </div>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b] cursor-pointer">
                    <FaTwitter size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;