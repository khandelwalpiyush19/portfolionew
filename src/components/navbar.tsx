"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white sticky top-0 p-4 z-50">
      {/* Website Title */}
      <Link href="/" className="text-xl font-bold">
        Website
      </Link>

      {/* Hamburger Menu (Mobile) */}
      <div
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          // Big cross icon when menu is open
          <span className="text-4xl">×</span>
        ) : (
          // Hamburger menu when menu is closed
          <>
            <span className="w-8 h-1 bg-white rounded mb-1"></span>
            <span className="w-8 h-1 bg-white rounded mb-1"></span>
            <span className="w-8 h-1 bg-white rounded"></span>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:items-center md:space-x-4 absolute md:static bg-gray-900 w-full md:w-auto left-0 md:left-auto top-full md:top-auto transition-all duration-300 ${
          menuOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/about"
            className="block py-2 px-4 hover:bg-blue-900 rounded transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="block py-2 px-4 hover:bg-blue-900 rounded transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="block py-2 px-4 hover:bg-blue-900 rounded transition-colors"
            onClick={() => setMenuOpen(false)} // Close menu on link click
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};