import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';
import {
  BookOpen,
  Brain,
  History,
  ChevronDown,
  Quote as QuoteIcon,
  ArrowRight,
  Globe,
  School,
  Library
} from 'lucide-react';

export default function TheologySchool() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Library background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#570013]/20 to-[#faf9f5]/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1 mb-6 border border-white/30 text-white uppercase tracking-widest text-[10px] bg-white/10 backdrop-blur-md rounded-full">
            since 2002 • Ilesa, Nigeria
          </span>
          <h1 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[1.1]">
            Raising   <br /> End-Time <span className="italic text-[#e9c176]">Soldiers for Christ</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Dedicated to raising men and women for effective Christian ministry through sound biblical teaching, spiritual growth, and leadership development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#570013] text-white font-bold rounded-sm hover:scale-105 transition-transform">Enroll Now</button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-sm hover:bg-white/20 transition-all">Explore Faculty</button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl text-[#570013] mb-4">Core Pillars</h2>
          <div className="w-16 h-1 bg-[#775a19]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 relative group h-[450px] overflow-hidden rounded-sm">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6AZ1LtcyBZaGrQrlhPcNOw4mxqQwP0ppr4q3-vdyaMdqo53aYEL5ArMEBYTnfdmnwKz_vsEYk0pgpK11tzB4shgafh1DduY4iVu0mEhYSejrPjYfbX39bwwoCy9HL4J1LLQUQQcsBCeVZgZNGESuTRXVwfn8_5-pN44sj6A-C-8J8mIzr4OWydJxBkCo3OIVk6hFUCzbFOy3ubfV4jXaUgCGOyWHBGSsZG5hON_f8E_yalmvB22BYrlZiBY5scOAJ5HClcw_urhqc" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Biblical Theology" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#570013] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 p-10">
              <h3 className="font-serif text-3xl text-white mb-3">Biblical Theology</h3>
              <p className="text-white/80 max-w-xs text-sm">Deepening the understanding of sacred texts through historical context and linguistic analysis.</p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#efeeea] p-10 flex-1 border-l-4 border-[#775a19]">
              <Brain className="text-[#775a19] mb-4" size={32} />
              <h3 className="font-serif text-2xl text-[#570013] mb-2">Christian Philosophy</h3>
              <p className="text-[#584141] text-sm leading-relaxed">Engaging the great thinkers of history to bridge the gap between faith and reason.</p>
            </div>
            <div className="bg-[#570013] p-10 flex-1 text-white">
              <History className="text-[#ffb3b5] mb-4" size={32} />
              <h3 className="font-serif text-2xl mb-2">Scholarly Heritage</h3>
              <p className="text-white/70 text-sm leading-relaxed">Preserving the intellectual traditions of the Digital Scriptorium for future generations.</p>
            </div>
          </div>

          <div className="md:col-span-12 relative h-[350px] rounded-sm overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1500" className="w-full h-full object-cover brightness-50" alt="Global Service" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#775a19]/30">
              <h3 className="font-serif text-4xl text-white mb-4">Global Service & NGO</h3>
              <p className="text-white/90 max-w-2xl mb-8">Our theology is lived out through our global NGO initiatives, providing relief and education where it's needed most.</p>
              <button className="px-8 py-3 bg-white text-[#570013] font-bold rounded-sm hover:bg-[#e9e8e4] transition-colors">Learn About Our Impact</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#efeeea] overflow-hidden relative">
        <QuoteIcon className="absolute -top-10 -left-10 text-[#570013]/5" size={300} fill="currentColor" />
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <blockquote className="font-serif text-3xl md:text-5xl text-[#570013] italic mb-10 leading-snug">
            "The pursuit of truth is not a solitary journey, but a dialogue between the soul, the sacred, and the centuries of wisdom that precede us."
          </blockquote>
          <div className="flex flex-col items-center">
            <img src="https://i.pravatar.cc/150?u=scholar" className="w-16 h-16 rounded-full border-2 border-[#775a19] mb-4" alt="Professor" />
            <p className="font-bold text-[#570013]">Dr. Alistair Thorne</p>
            <p className="text-[#775a19] text-xs uppercase tracking-widest">Professor Emeritus of Historical Theology</p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-[#570013] mb-2">Latest News</h2>
            <p className="text-[#584141]">Dispatches from the heart of the Scriptorium</p>
          </div>
          <Link href="#" className="text-[#775a19] font-bold border-b border-[#775a19]">View All Articles</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "The Discovery of the lost Galatians Fragment",
              tag: "Faculty Research",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc5z-Wz39zWEiIm_4ShIi-k8w5mbRn9Xf23GpdX3iPZ-5YWi-2Ick0fXmrW7qjcJHdgnezBa69cr-wEM7Qom851e3a8k6G4Z69eyqmNNvY8gCR5iHV2qm6OH793qDCWNz0x-Lf16iCObKGgkwq_u3QNZ8rJO_TwytPU6U_z58iHDBfuiyas9rl_rp9W9yDGh_9YuP_qPc8_KmCbiMxsRfwc6ncp4RunDVvBtE77b1SCrCwDLm-sLTZlkI_4GnYQ4WYcAvBHb6UpOHB"
            },
            {
              title: "Annual Symposium: Faith in the Age of AI",
              tag: "Events",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaNQz7artjM4f4l7P3qw080ZOiBxIUlLr8rFc94nFpyxIXPza3a7iaS7JbJRMnmEwveG0nrbbinnNlmw3n0-i9p2B1tALetl9xEeV3Fy1oMy2M0xV-exvfTEusj8-NZdFChUDNpPOSUXy1XYFrVgMxsF8A4TKvpd06KAsWRzwbnblkYHpazAUFMkAGBM2muZqsJmiLh0NSK_exKNEdWkmUOQzmhY_tYycieC7EO3k_6PG-zzftPYmG0xhWX15boN-2dgscvepPHFFA"
            },
            {
              title: "Extending the Scriptorium to South Sudan",
              tag: "NGO Work",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXyu9jZK4DK4xB-VRNUTHs0igS82wgY-2MVgVqJMqq5_GT0-hBTMh6QpJdohrnDVYvNIz2MBjyFWNlOcCRR4mdkp3oz2K5e7EvSN2WnJ9T9zXBla_v6N8TOGsm7TavsYn1NLbmea-2SJEO82tI8wCK6p1K5bEsKdpRBz0KVJDkzmKggEkoxbRzG1Wiv8H8uIuQEPHM8CqP8dZKLPOVVQS_gXMSpyZsCVKwBFFQyPo4ZO1eJ5TAQXet8qjnX9lF5se1_2MVt04LGjT9"
            }
          ].map((post, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
                <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
              </div>
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest mb-2 block">{post.tag}</span>
              <h4 className="font-serif text-xl text-[#570013] mb-4 group-hover:text-[#775a19] transition-colors">{post.title}</h4>
              <Link href="#" className="flex items-center gap-2 font-bold text-[#570013] text-sm">
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#570013] text-center text-white">
        <h2 className="font-serif text-4xl mb-6">Begin Your Scholarly Journey</h2>
        <p className="max-w-xl mx-auto opacity-80 mb-10 px-6">Applications for the upcoming semester are now open. Experience a curriculum designed for depth, discipline, and devotion.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
          <button className="px-10 py-4 bg-[#775a19] font-bold hover:bg-[#8e6b20] transition-colors">Start Application</button>
          <button className="px-10 py-4 border border-white/30 font-bold hover:bg-white/10 transition-colors">Request Information</button>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#faf9f5] py-20 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-sm">
          <div className="col-span-1">
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Christ-Pattern Bible College</div>
            <p className="mb-6 opacity-70">Elevating theological discourse and empowering global service since 2002.</p>
            <div className="flex gap-4">
              <Globe size={18} className="opacity-50" />
              <School size={18} className="opacity-50" />
              <Library size={18} className="opacity-50" />
            </div>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Navigation</h5>
            <ul className="space-y-4 opacity-70">
              <li>About Us</li>
              <li>Academic Programs</li>
              <li>Admissions</li>
              <li>Faculty Directory</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Resources</h5>
            <ul className="space-y-4 opacity-70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Faculty Portal</li>
              <li>Alumni</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Contact</h5>
            <div className="opacity-70 space-y-4 italic text-xs">
              <p>No 1, Abiola Adedoja Crescent, Ilesa, Osun State, Nigeria</p>
              <div className="space-y-1">
                <p>08033514808</p>
                <p>08056404396</p>
                <p>08038571189</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#e0bfbf]/20 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-50 uppercase tracking-widest">
          <p>© 2024 Christ-Pattern Bible College. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Accessibility</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}