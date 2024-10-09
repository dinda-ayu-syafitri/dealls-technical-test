"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bg-white w-full py-3 px-5 md:px-[10%] flex items-center justify-between shadow-lg md:min-h-24">
      <div>
        <a href="/">
          <p className="font-bold md:text-2xl text-md">Dealls Article Portal</p>
        </a>
      </div>
      <div className="hidden md:flex justify-around gap-10 text-md">
        {[{ path: "", label: "home" }].map((link, index) => (
          <div key={index}>
            <a
              href={`${`/${link.path}`}`}
              className={`pb-2 px-5 border-b-4 ${
                pathname === `/${link.path}`
                  ? "border-black"
                  : "border-b-transparent"
              }`}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button
          onClick={handleMenuToggle}
          className="text-3xl focus:outline-none"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center">
          {[{ path: "", label: "home" }].map((link, index) => (
            <a
              key={index}
              href={`${`/${link.path}`}`}
              className={`py-2 w-full text-center border-b-2 hover:bg-gray-300 ${
                pathname === `/${link.path}` ? "bg-gray-500" : ""
              }`}
              onClick={handleMenuToggle}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
