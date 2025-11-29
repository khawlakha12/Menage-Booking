import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";


export default function Home() {
  const navItems = ["Services", "Trafis", "Home", "About", "Contact"];
  const [open, setOpen] = useState(false);

  return (
 <header className="fixed top-0 left-0 w-full bg-white shadow z-50 bg-black rounded-b-full h-[80%]">

    <div className="flex items-center justify-between px-12 py-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="../src/assets/logo.png" alt="Menage Booking" className="hidden sm:inline w-28 h-auto object-contain"/>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-6 items-center rounded-3xl bg-[#10B981] h-10 px-6">
        {navItems.map((item) => (
          <a
            key={item}
            href={"#" + item.toLowerCase()}
            className="text-white hover:text-[#F59E0B] px-8 py-1 rounded-md transition"
          >
            {item}
          </a>
        ))}

      </nav>
        <a
          href="#"
          className="ml-2 inline-flex items-center justify-center w-10 h-10 bg-white rounded-full border border-gray-300 hover:bg-[#10B981] transition"
        >
          <UserIcon className="w-7 h-7 text-[#10B981] cursor-pointer hover:text-white transition" />
        </a>

      {/* Mobile button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
   
  </div>
</header>
  );
}

