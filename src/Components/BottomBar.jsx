'use client';
import Link from 'next/link';

const BottomBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#ff0000] via-[#745087] to-[#5C7FE0] text-white text-sm px-6 py-2 flex justify-center items-center">
        <h3 className="font-semibold">
          Designed by <Link href="https://www.sahynex.com" >Sahynex Solutions</Link>
        </h3>
    </div>
  );
};

export default BottomBar;