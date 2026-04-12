"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf9f5]/80 backdrop-blur-md border-b border-[#e0bfbf]/20 flex justify-between items-center px-8 md:px-12 py-5">
      <div className="text-2xl font-bold text-[#570013] font-serif">Theology School</div>
      <div className="hidden md:flex space-x-8 font-serif text-[#570013]">
        <Link href="/" className={`font-bold ${isActive('/') ? 'border-b-2 border-[#775a19]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>Home</Link>
        <Link href="/about" className={`font-bold ${isActive('/about') ? 'border-b-2 border-[#775a19]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>About</Link>
        <Link href="/programs" className={`font-bold ${isActive('/programs') ? 'border-b-2 border-[#775a19]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>Programs</Link>
        <Link href="/contact" className={`font-bold ${isActive('/contact') ? 'border-b-2 border-[#775a19]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>Contact Us</Link>
        <Link href="/ngo" className={`font-bold ${isActive('/ngo') ? 'border-b-2 border-[#775a19]' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>NGO</Link>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-[#570013] text-white rounded font-medium hover:bg-[#800020] transition-colors">Enroll</button>
        <button className="px-6 py-2 border border-[#8c7071] text-[#570013] rounded font-medium hover:bg-[#f4f4f0] transition-colors">Donate</button>
      </div>
    </nav>
  );
}