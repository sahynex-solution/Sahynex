'use client';
import Link from 'next/link';

const BottomBar = () => {
  return (
    <div
      className="w-full text-white text-sm px-6 py-2 flex justify-center items-center"
      style={{
        background: "linear-gradient(to right, #ff0000, #745087, #5C7FE0)",
      }}
    >
      <h3 className="font-semibold">
        Designed by <Link href="/">Sahynex Solutions</Link>
      </h3>
    </div>
  );
};

export default BottomBar;