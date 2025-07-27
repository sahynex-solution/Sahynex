import React, { useState } from "react";

const PhoneInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Remove invalid chars (allow digits, +, space, hyphen)
    input = input.replace(/[^0-9+\s-]/g, "");

    // Allow only one plus at the start
    if (input.includes("+")) {
      input = "+" + input.replace(/\+/g, "");
    }

    // Count digits ignoring +, spaces, hyphens
    const digits = input.replace(/[^0-9]/g, "");

    if (digits.length > 10) {
      // Block update if more than 10 digits
      return;
    }

    setValue(input);
  };

  return (
    <input
      type="tel"
      placeholder="Phone"
      value={value}
      onChange={handleChange}
      className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
      required
    />
  );
};

export default PhoneInput;