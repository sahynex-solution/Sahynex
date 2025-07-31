import React, { forwardRef } from "react";

interface PhoneInputProps {
  value: string;
  setValue: (val: string) => void;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, setValue }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let input = e.target.value;

      // Allow only digits, +, spaces, and hyphens
      input = input.replace(/[^0-9+\s-]/g, "");

      // Only allow one '+' at the beginning
      if (input.includes("+")) {
        input = "+" + input.replace(/\+/g, "");
      }

      // Count only digits (ignoring +, spaces, hyphens)
      const digits = input.replace(/[^0-9]/g, "");
      if (digits.length > 10) return;

      setValue(input);

      // Sync ref value so FormData works correctly
      if (ref && typeof ref !== "function" && ref.current) {
        ref.current.value = input;
      }
    };

    return (
      <input
        type="tel"
        name="phone"
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder="Phone"
        required
        className="w-full p-3 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB505A] transition"
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
