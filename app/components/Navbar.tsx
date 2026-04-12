"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/ngo', label: 'NGO' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f5]/80 backdrop-blur-md border-b border-[#e0bfbf]/20">
        <div className="flex justify-between items-center px-4 md:px-12 py-5">
          <div className="text-xl md:text-2xl font-bold text-[#570013] font-serif">Theology School</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-serif text-[#570013]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold ${
                  isActive(link.href)
                    ? 'border-b-2 border-[#775a19]'
                    : 'opacity-70 hover:opacity-100 transition-opacity'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 bg-[#570013] text-white rounded font-medium hover:bg-[#800020] transition-colors">
              Enroll
            </button>
            <button className="px-6 py-2 border border-[#8c7071] text-[#570013] rounded font-medium hover:bg-[#f4f4f0] transition-colors">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#570013] hover:bg-[#e0bfbf]/20 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#faf9f5] border-t border-[#e0bfbf]/20 px-4 py-4 space-y-3 absolute top-full left-0 right-0 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 px-3 rounded font-serif font-bold transition-all ${
                  isActive(link.href)
                    ? 'bg-[#775a19]/10 text-[#775a19] border-l-4 border-[#775a19]'
                    : 'text-[#570013] hover:bg-[#e0bfbf]/10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-2 border-t border-[#e0bfbf]/20">
              <button className="w-full px-4 py-2 bg-[#570013] text-white rounded font-medium hover:bg-[#800020] transition-colors">
                Enroll
              </button>
              <button className="w-full px-4 py-2 border border-[#8c7071] text-[#570013] rounded font-medium hover:bg-[#f4f4f0] transition-colors">
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-20"></div>
    </>
  );
}