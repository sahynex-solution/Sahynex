import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5C7FE0] via-[#745087] to-[#ff0000] text-white text-xs sm:text-sm px-4 sm:px-8 py-3">
      <div className="flex justify-between items-center gap-2">
        {/* Left: Email with icon */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <FaEnvelope size={14} />
          <Link
            href="mailto:sahynexsolutions@gmail.com"
            className="hover:text-yellow-300"
          >
            sahynexsolutions@gmail.com
          </Link>
        </div>

        <div className="hidden sm:flex items-center flex-wrap justify-center gap-3">
          <Link
            href="https://www.instagram.com/sahynex?igsh=NXMycTJrYjZ5bW42"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaInstagram size={14} />
          </Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
            <FaFacebookF size={14} />
          </Link>
          <Link
            href="https://x.com/sahynex?t=x9L3bvGfqIe7_zmIALHjtg&s=09"
            target="_blank"
            className="hover:text-yellow-400"
          >
            <FaTwitter size={14} />
          </Link>
          <Link href="https://www.linkedin.com/company/sahynex" target="_blank" className="hover:text-yellow-400">
            <FaLinkedinIn size={14} />
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black transition text-xs"
          >
            <IoGlobeOutline size={8} />En
           <span>English</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
