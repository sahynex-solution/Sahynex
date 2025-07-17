'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';

const TopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5C7FE0] via-[#745087] to-[#ff0000] text-white text-sm px-6 py-2 flex justify-between items-center">
      
      <div>
        Email:{' '}
        <Link href="mailto:sahynexsolutions@gmail.com" className="">
          sahynexsolutions@gmail.com
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="https://instagram.com"  target="_blank" className="hover:text-yellow-400">
          <FaInstagram size={15} />
        </Link>
        <Link href="https://facebook.com"  target="_blank" className="hover:text-yellow-400">
          <FaFacebookF size={15}/>
        </Link>
        <Link href="https://twitter.com" target="_blank" className="hover:text-yellow-400">
          <FaTwitter size={15} />
        </Link>

        <Link
          href="#"
          className="flex items-center gap-1 border border-white rounded-full px-3 py-1 cursor-pointer hover:bg-white hover:text-black transition"
        >
          <IoGlobeOutline />
          <span>English</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
