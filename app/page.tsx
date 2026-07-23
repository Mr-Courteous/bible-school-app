"use client";

import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Image from 'next/image';

import {
  ChevronDown,
  Quote as QuoteIcon,
  ArrowRight,
  Globe,
  School,
  Library
} from 'lucide-react';

const LazyImage = (props: React.ComponentPropsWithoutRef<typeof Image>) => (
  <Image loading="lazy" {...props} />
);

type SectionProps = React.HTMLAttributes<HTMLDivElement> & { direction?: 'left' | 'right' | 'none' };

const AnimatedSection = ({ children, className, ...props }: SectionProps) => (
  <div className={className} {...props}>{children}</div>
);

const StaggerContainer = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>{children}</div>
);

const StaggerItem = StaggerContainer;
const FadeIn = StaggerContainer;
const ScaleIn = StaggerContainer;
const HoverCard = StaggerContainer;
const Floating = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={className} {...props}>{children}</div>
);
const MovingGradient = () => null;
const FloatingBubbles = () => null;
const LiveIcon = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default function TheologySchool() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <nav className="relative">
        <Navbar />
        <MovingGradient />
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FloatingBubbles />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000"
            fill
            priority
            className="object-cover brightness-[0.4]"
            alt="Library background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#570013]/20 to-[#faf9f5]/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span
            className="inline-block px-4 py-1 mb-6 border border-white/30 text-white uppercase tracking-widest text-[10px] bg-white/10 backdrop-blur-md rounded-full"
          >
            since 2002 • Ilesa, Nigeria
          </span>
          <h1
            className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[1.1]"
          >
            Raising <br /> End-Time <span className="italic text-[#e9c176]">Soldiers for Christ</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Dedicated to raising men and women for effective Christian ministry through sound biblical teaching, spiritual growth, and leadership development.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/apply"
              className="px-10 py-4 bg-[#570013] text-white font-bold rounded-sm"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-sm"
            >
              Meet the Council
            </Link>
          </div>
        </div>
        <Floating className="absolute bottom-10 text-white/50 cursor-pointer">
          <ChevronDown size={32} />
        </Floating>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl text-[#570013] mb-4">Core Pillars</h2>
          <div className="w-16 h-1 bg-[#775a19]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Pastor Dr S A Ajifolokun', role: 'Chairman', img: '/Boards/WhatsApp Image 2026-04-28 at 10.00.05 PM.jpeg' },
            { name: 'Evang Dr. Mrs Victoria Oluremi Ajifolokun', role: 'Founder / Director of Studies', img: '/Boards/WhatsApp Image 2026-04-28 at 10.03.24 PM.jpeg' },
            { name: 'Bro Engr Emmanuel E. Ajifolokun Oluremi', role: 'Coordinator', img: '/Boards/WhatsApp Image 2026-04-29 at 9.43.06 AM.jpeg' },
            { name: 'Pastor Dr. Henry Olubunmi Adesemoye', role: 'Dean', img: '/Boards/WhatsApp Image 2026-04-28 at 8.40.43 PM.jpeg' },
            { name: 'Pastor Dr J.A. Adeleye', role: 'Registrar', img: '/Boards/WhatsApp Image 2026-05-07 at 8.38.20 PM.jpeg' },
            { name: 'Patron Dr. Isaac .O. Ogundipe', role: 'Patron', img: '/Boards/WhatsApp Image 2026-04-28 at 8.46.50 PM.jpeg' },
            { name: 'Oba HRH Dr. Peter Babatunde Ojo', role: 'Board Member', img: '/Boards/WhatsApp Image 2026-04-28 at 10.14.28 PM.jpeg' },
          ].map((pillar, index) => (
            <div key={index} className="bg-[#f6f2eb] rounded-sm overflow-hidden border border-[#e0bfbf]/20 shadow-sm">
              <div className="aspect-[4/5] relative">
                <LazyImage
                  src={pillar.img}
                  fill
                  className="object-cover"
                  alt={pillar.name}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-[#570013] mb-2">{pillar.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#775a19]">{pillar.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Highlight Section */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto border-t border-[#e0bfbf]/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10 bg-stone-100">
              <LazyImage
                src="/Boards/WhatsApp Image 2026-04-28 at 10.00.05 PM.jpeg"
                fill
                className="object-cover"
                alt="Chairman Governing Council"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#570013] text-white p-8 shadow-xl z-20">
              <h4 className="font-serif text-xl mb-1">Pastor Dr S A Ajifolokun</h4>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Chairman Governing Council</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">Leadership Voice</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#570013] mb-8">Guided by Divine Vision and Academic Excellence</h2>
            <p className="text-[#584141] text-lg leading-relaxed opacity-80 mb-10">
              Our Governing Council provides the spiritual oversight and strategic direction necessary to ensure Christ-Pattern Bible College remains a beacon of theological integrity.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#e0bfbf] relative">
                  <LazyImage
                    src="/Boards/WhatsApp Image 2026-04-28 at 8.46.50 PM.jpeg"
                    fill
                    className="object-cover"
                    alt="Patron"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#570013]">Patron Dr. Isaac .O. Ogundipe</h5>
                  <p className="text-[9px] uppercase tracking-tighter opacity-60">College Patron</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#e0bfbf] relative">
                  <LazyImage
                    src="/Boards/WhatsApp Image 2026-04-28 at 8.40.43 PM.jpeg"
                    fill
                    className="object-cover"
                    alt="Board Member"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#570013]">Pastor Dr. Henry O. Adesemoye</h5>
                  <p className="text-[9px] uppercase tracking-tighter opacity-60">Board Member</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-[#775a19] text-white font-bold text-xs uppercase tracking-widest">
              Meet the Full Council <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#efeeea] overflow-hidden relative">
        <QuoteIcon className="absolute -top-10 -left-10 text-[#570013]/5" size={300} fill="currentColor" />
        <FadeIn className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <blockquote className="font-serif text-3xl md:text-5xl text-[#570013] italic mb-10 leading-snug">
            &ldquo;Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#570013]">2 Timothy 2:15</p>
          </div>
        </FadeIn>
      </section>

      {/* Alumni Gallery Section */}
      <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-serif text-4xl text-[#570013] mb-4">Our Alumni</h2>
          <div className="w-16 h-1 bg-[#775a19] mx-auto mb-6" />
          <p className="text-[#584141] max-w-2xl mx-auto">
            Celebrate the journey of our past students who have graduated and moved on to impactful ministries worldwide.
            These faces represent the rich legacy and ongoing mission of Christ-Pattern Bible College since 2002.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StaggerItem className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_28.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 1"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_29.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 2"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_30.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 3"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </StaggerItem>
          <StaggerItem className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_31.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 4"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_32.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 5"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_33.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 6"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </StaggerItem>
          <StaggerItem className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_34.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 7"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_35.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 8"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_36.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 9"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </StaggerItem>
          <StaggerItem className="grid gap-4">
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_37.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 10"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_38.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 11"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="overflow-hidden rounded-sm group relative">
              <LazyImage
                src="/set/Set 1_39.jpg"
                width={400}
                height={500}
                className="h-auto max-w-full rounded-sm transition-transform duration-700 group-hover:scale-110"
                alt="Graduate 12"
              />
              <div className="absolute inset-0 bg-[#570013]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>



      {/* Footer CTA */}
      <AnimatedSection direction="none">
        <section className="py-20 bg-[#570013] text-center text-white">
          <h2 className="font-serif text-4xl mb-6">Begin Your Scholarly Journey</h2>
          <p className="max-w-xl mx-auto opacity-80 mb-10 px-6">Applications for the upcoming semester are now open. Experience a curriculum designed for depth, discipline, and devotion.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
            <button
              className="px-10 py-4 bg-[#775a19] font-bold"
            >
              Start Application
            </button>
            <button className="px-10 py-4 border border-white/30 font-bold">Request Information</button>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Footer */}
      <footer className="bg-[#faf9f5] py-20 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-sm">
          <StaggerItem className="col-span-1">
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Christ-Pattern Bible College</div>
            <p className="mb-6 opacity-70">Elevating theological discourse and empowering global service since 2002.</p>
            <div className="flex gap-4">
              <Globe size={18} className="opacity-50" />
              <School size={18} className="opacity-50" />
              <Library size={18} className="opacity-50" />
            </div>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Navigation</h5>
            <ul className="space-y-4 opacity-70">
              <li>About Us</li>
              <li>Academic Programs</li>
              <li>Admissions</li>
              <li>Faculty Directory</li>
            </ul>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Resources</h5>
            <ul className="space-y-4 opacity-70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Faculty Portal</li>
              <li>Alumni</li>
            </ul>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Contact</h5>
            <div className="opacity-70 space-y-4 italic text-xs">
              <p>No 1, Abiola Adedoja Crescent, Ilesa, Osun State, Nigeria</p>
              <div className="space-y-1">
                <p>08033514808</p>
                <p>08056404396</p>
                <p>08038571189</p>
                <p>08107282511 (Registerer)</p>
                <p>08146238217 (Deen)</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#e0bfbf]/20 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Christ-Pattern Bible College. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Accessibility</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}