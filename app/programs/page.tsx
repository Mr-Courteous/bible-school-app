import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { AnimatedSection } from '../components/AnimatedSection';
import { Send, Globe, Award, Book } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />
      <AnimatedSection className="max-w-7xl mx-auto px-8 md:px-12 mb-20 relative">
        <div className="absolute top-0 right-0 opacity-[0.03] text-[#570013] select-none pointer-events-none">
          <span className="font-serif text-[15rem] leading-none">Σ</span>
        </div>
        <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">Academic Excellence</span>
        <h1 className="font-serif text-5xl md:text-6xl text-[#570013] leading-tight mb-8 max-w-3xl">
          Academic Programs
        </h1>
        <p className="text-[#584141] text-lg leading-relaxed opacity-70 max-w-2xl">
          Discover our course offerings and study formats across certificate, diploma, bachelor&apos;s, and master&apos;s levels.
        </p>
      </AnimatedSection>

      <section className="max-w-6xl mx-auto px-8 md:px-12 mb-24 space-y-12">
        <article className="bg-white shadow-sm border border-[#e8e2d6] rounded-md p-10">
          <h2 className="font-serif text-3xl text-[#570013] mb-4">Certificate Course</h2>
          <p className="text-sm text-[#584141] mb-6">Certificate Course in [Field Not Specified]</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Full Time</h3>
              <p className="text-sm text-[#584141]">9 Months</p>
              <p className="text-sm text-[#584141]">9:00 AM - 1:00 PM, Tuesday - Thursday</p>
            </div>
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Weekend</h3>
              <p className="text-sm text-[#584141]">1 Year / 9 Months</p>
              <p className="text-sm text-[#584141]">3:00 PM - 7:00 PM, Friday & Saturday</p>
            </div>
            <div className="md:col-span-2 rounded-sm bg-[#fff7e7] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Sandwich</h3>
              <p className="text-sm text-[#584141]">2 weeks in 1st & 2nd term, and one month during long vacation holidays</p>
            </div>
          </div>
        </article>

        <article className="bg-white shadow-sm border border-[#e8e2d6] rounded-md p-10">
          <h2 className="font-serif text-3xl text-[#570013] mb-4">Diploma Course</h2>
          <p className="text-sm text-[#584141] mb-6">Diploma of Theology in Mission & Evangelism</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Full Time</h3>
              <p className="text-sm text-[#584141]">1 Year</p>
              <p className="text-sm text-[#584141]">9:00 AM - 1:00 PM, Tuesday - Thursday</p>
            </div>
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Weekend</h3>
              <p className="text-sm text-[#584141]">1 Year 3 Months</p>
              <p className="text-sm text-[#584141]">3:00 PM - 7:00 PM, Saturday & Sunday</p>
            </div>
            <div className="md:col-span-2 rounded-sm bg-[#fff7e7] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Sandwich</h3>
              <p className="text-sm text-[#584141]">2 weeks in 1st & 2nd term, and one month during long vacation holidays</p>
            </div>
          </div>
        </article>

        <article className="bg-white shadow-sm border border-[#e8e2d6] rounded-md p-10">
          <h2 className="font-serif text-3xl text-[#570013] mb-4">Bachelor&apos;s Degree</h2>
          <p className="text-sm text-[#584141] mb-6">Bachelor of Theology in Region & Church Ministry</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Full Time</h3>
              <p className="text-sm text-[#584141]">1 Year</p>
            </div>
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Weekend</h3>
              <p className="text-sm text-[#584141]">15 Months</p>
            </div>
            <div className="md:col-span-2 rounded-sm bg-[#fff7e7] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Sandwich</h3>
              <p className="text-sm text-[#584141]">2 Session Holidays</p>
              <p className="text-sm text-[#584141] mt-3 font-semibold">Correspondence</p>
            </div>
          </div>
        </article>

        <article className="bg-white shadow-sm border border-[#e8e2d6] rounded-md p-10">
          <h2 className="font-serif text-3xl text-[#570013] mb-4">Master&apos;s Degree</h2>
          <p className="text-sm text-[#584141] mb-6">Master of Arts in Biblical Theology</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Full Time</h3>
              <p className="text-sm text-[#584141]">1 Year</p>
            </div>
            <div className="rounded-sm bg-[#f7f3ee] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Weekend</h3>
              <p className="text-sm text-[#584141]">10 Months</p>
            </div>
            <div className="md:col-span-2 rounded-sm bg-[#fff7e7] p-6">
              <h3 className="font-bold text-[#570013] mb-3">Sandwich</h3>
              <p className="text-sm text-[#584141]">2 Session Holidays</p>
              <p className="text-sm text-[#584141] mt-3 font-semibold">Correspondence</p>
            </div>
          </div>
        </article>
      </section>

      <AnimatedSection direction="none" className="max-w-6xl mx-auto px-8">
        <div className="bg-[#570013] p-16 text-center text-white relative overflow-hidden rounded-sm">
          <h2 className="font-serif text-4xl mb-10 relative z-10">Ready to begin your scholarly journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/apply" className="px-8 py-4 bg-[#775a19] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#8e6b20] transition-colors">Apply Now</Link>
            <Link href="/contact" className="px-8 py-4 border border-white/30 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">Speak with Admissions</Link>
          </div>
        </div>
      </AnimatedSection>

      <footer className="bg-[#faf9f5] pt-24 pb-12 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-xs">
          <div>
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Christ-Pattern Bible College</div>
            <p className="opacity-60 leading-relaxed">Preserving the past, informing the present, and shaping the future of theological discourse.</p>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Academic</h5>
            <ul className="space-y-4 opacity-60">
              <li>Faculty Portal</li>
              <li>Alumni</li>
              <li>Library Access</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Support</h5>
            <ul className="space-y-4 opacity-60">
              <li>Give Now</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Newsletter</h5>
            <p className="opacity-60 mb-4">Occasional insights from our Scriptorium.</p>
            <div className="flex bg-[#efeeea] p-1">
              <input type="email" placeholder="Email address" className="bg-transparent px-3 py-2 w-full outline-none text-[10px]" />
              <button className="bg-[#570013] p-2 text-white">Send</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#e0bfbf]/10 flex flex-col md:flex-row justify-between items-center text-[9px] opacity-40 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Christ-Pattern Bible College. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}