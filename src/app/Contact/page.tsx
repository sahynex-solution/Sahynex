  "use client";

  import { FC, useState } from "react";
  import Link from "next/link";
  import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
  import {
    FaLinkedinIn,
    FaInstagram,
    FaFacebookF,
    FaTwitter,
  } from "react-icons/fa";
  import { toast, ToastContainer, Bounce } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const ContactForm: FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setMessage("");

      const form = event.currentTarget;
      const formData = new FormData(form);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const messageText = formData.get("message") as string;

      const contactData: ContactFormData = {
        name,
        email,
        phone,
        message: messageText,
      };

      try {
        const response = await fetch("/apis/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("🎉 Message sent successfully!", {
            position: "top-center",
            autoClose: 4000,
            theme: "dark",
            transition: Bounce,
          });
          form.reset();
        } else {
          throw new Error(data.error || "Failed to submit form");
        }
      } catch (error: any) {
        toast.error(`🚨 ${error.message}`, {
          position: "top-center",
          autoClose: 4000,
          theme: "dark",
          transition: Bounce,
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <section className="bg-gradient-to-br from-[#2C2F7D] to-[#431344] py-6 md:py-8 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 px-2 sm:px-0">
            <h2 className="text-[#EB505A] text-2xl font-semibold tracking-wider">
              \ Get In Touch \
            </h2>
            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
              Hey! Let's Connect
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-[#ebeefa] to-[#F8E2E6] rounded-lg p-5 sm:p-8 shadow-xl border border-white/20 w-full mx-auto lg:w-[90%] lg:max-w-[800px]">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
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
                  <p
                    className={`text-center ${
                      message.startsWith("Error")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {message}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#EB505A] hover:bg-[#e03e4b] transition-colors text-white font-semibold px-6 py-3 rounded-md w-full ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Now"}
                </button>
              </form>
            </div>

            <div className="bg-[#fde1e6] backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg border border-white/20 text-[#322a56] space-y-8 w-full mx-auto lg:w-[90%] lg:max-w-[450px]">

              <div className="flex items-start">
                <FiPhone size={20} className="text-[#EB505A] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-[#EB505A]">
                    Call Anytime
                  </h3>
                  <p>+91 8762205219</p>
                </div>
              </div>

              <div className="flex items-start">
                <FiMail size={20} className="text-[#EB505A] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-[#EB505A]">
                    Send Email
                  </h3>
                  <p>info@sahynex.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <FiMapPin size={20} className="text-[#EB505A] mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-[#EB505A]">
                    Visit Us
                  </h3>
                  <p>5th floor, Sahyadri Campus,</p>
                  <p>Adyar, Mangaluru</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#322a56] mb-3">
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://www.linkedin.com/company/sahynex/"
                    target="_blank"
                  >
                    <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b]">
                      <FaLinkedinIn size={20} />
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/sahynex?igsh=NXMycTJrYjZ5bW42"
                    target="_blank"
                  >
                    <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b]">
                      <FaInstagram size={20} />
                    </div>
                  </Link>
                  <Link href="https://facebook.com" target="_blank">
                    <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b]">
                      <FaFacebookF size={20} />
                    </div>
                  </Link>
                  <Link
                    href="https://x.com/sahynex?t=x9L3bvGfqIe7_zmIALHjtg&s=09"
                    target="_blank"
                  >
                    <div className="p-2 bg-[#EB505A] rounded-md text-white hover:bg-[#e03e4b]">
                      <FaTwitter size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  };

  export default ContactForm;
