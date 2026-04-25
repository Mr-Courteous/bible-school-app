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
            <img src="/set/Set 1_6.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Biblical Theology" />
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
            <img src="/set/Set 1_23.jpg" className="w-full h-full object-cover brightness-50" alt="Global Service" />
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

      {/* Alumni Gallery Section */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl text-[#570013] mb-4">Our Alumni</h2>
          <div className="w-16 h-1 bg-[#775a19] mx-auto mb-6" />
          <p className="text-[#584141] max-w-2xl mx-auto">
            Celebrate the journey of our past students who have graduated and moved on to impactful ministries worldwide. 
            These faces represent the rich legacy and ongoing mission of Christ-Pattern Bible College since 2002.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_28.jpg" alt="Graduate 1" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_29.jpg" alt="Graduate 2" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_30.jpg" alt="Graduate 3" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_31.jpg" alt="Graduate 4" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_32.jpg" alt="Graduate 5" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_33.jpg" alt="Graduate 6" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_34.jpg" alt="Graduate 7" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_35.jpg" alt="Graduate 8" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_36.jpg" alt="Graduate 9" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_37.jpg" alt="Graduate 10" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_38.jpg" alt="Graduate 11" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <img className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110" src="/set/Set 1_39.jpg" alt="Graduate 12" />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
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
              img: "/set/Set 1_24.jpg"
            },
            {
              title: "Annual Symposium: Faith in the Age of AI",
              tag: "Events",
              img: "/set/Set 1_25.jpg"
            },
            {
              title: "Extending the Scriptorium to South Sudan",
              tag: "NGO Work",
              img: "/set/Set 1_26.jpg"
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