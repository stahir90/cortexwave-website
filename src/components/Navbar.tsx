"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CW</span>
          </div>
          <span className="text-xl font-bold text-gray-900">
            Cortex<span className="text-indigo-600">Wave</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.checkmycars.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Try CheckMyCars
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.checkmycars.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block w-full text-center px-5 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Try CheckMyCars
          </a>
        </div>
      )}
    </nav>
  );
}
