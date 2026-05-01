import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { AnimatedSection, StaggerContainer, StaggerItem, FadeIn, ScaleIn } from '../components/AnimatedSection';
import { ShieldCheck, Globe, GraduationCap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Background & History Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12">
              <AnimatedSection>
                <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-4">Our Journey</span>
                <h2 className="font-serif text-5xl md:text-6xl text-[#570013] leading-tight mb-12 max-w-4xl">Background and History</h2>
              </AnimatedSection>
              <StaggerContainer className="space-y-6 text-[#584141] leading-relaxed opacity-90 text-sm md:text-base max-w-4xl">
                <StaggerItem>
                  <p>
                    The vision for Christ-Pattern Bible College was born out of a divine encounter received during a personal retreat at Babalola Camp, Arakeji, on September 16, 1999. During this time of prayer and spiritual reflection, a clear mandate was given to establish a Bible training institution dedicated to raising men and women for effective Christian ministry.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    After sharing this vision with my husband, we committed ourselves to earnest prayer and careful planning, trusting God for guidance and provision.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    In January 2002, the vision was brought to life as Christ Pattern Bible College officially commenced operations at a small church building in Irojo, Ademokoya area Ilesa with six students. From its humble beginnings, the college has remained committed to sound biblical teaching, spiritual growth, and leadership development.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p>
                    Over the years, the institution has recorded significant milestones, including official registration, campus expansion, and over 100 graduates. Today, the college continues to train and equip ministers of the Gospel Interdenominationally who are making meaningful impact in churches, communities, and mission fields both locally and internationally.
                  </p>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <div className="lg:col-span-12 mt-12">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StaggerItem direction="up" className="aspect-video bg-stone-200 overflow-hidden rounded-sm group relative">
                  <Image
                    src="/set/Set 1_14.jpg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Early Beginnings"
                  />
                </StaggerItem>
                <StaggerItem direction="up" className="aspect-video bg-stone-200 overflow-hidden rounded-sm group relative">
                  <Image
                    src="/set/Set 1_15.jpg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Campus Expansion"
                  />
                </StaggerItem>
                <StaggerItem direction="up" className="aspect-video bg-stone-200 overflow-hidden rounded-sm group relative">
                  <Image
                    src="/set/Set 1_16.jpg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Graduation Milestones"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Header Hero Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <AnimatedSection direction="left" className="lg:col-span-7 pt-12">
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-4">Our Sacred Heritage</span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#570013] leading-tight mb-8">
                Stewards of <span className="italic">Ancient Wisdom</span> in a Modern World.
              </h1>
              <p className="text-[#584141] text-lg leading-relaxed opacity-80 max-w-xl">
                Founded with a mission to raise end-time soldiers for Christ, our college serves as a center for biblical excellence and spiritual transformation.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden rounded-sm shadow-2xl relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000"
                  alt="Historical Legacy"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-12 bg-[#570013] text-white px-10 py-6 font-serif italic text-2xl shadow-xl z-20">
                &ldquo;Veritas et Lux&rdquo;
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission / Vision / Values Grid */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-40">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <StaggerItem className="md:col-span-7 bg-white p-12 shadow-sm border border-[#e0bfbf]/10 flex flex-col justify-center">
              <h2 className="font-serif text-3xl text-[#570013] mb-6">Our Mission</h2>
              <p className="text-[#584141] leading-relaxed opacity-80">
                To cultivate a community of scholar-practitioners who are deeply rooted in the theological tradition, intellectually agile, and spiritually formed to lead in a complex global landscape. We bridge the gap between the academy and the altar.
              </p>
            </StaggerItem>

            <div className="md:col-span-5 flex flex-col gap-6">
              <StaggerItem className="bg-[#775a19] p-10 text-white">
                <h2 className="font-serif text-2xl mb-4">Our Vision</h2>
                <p className="text-sm opacity-90 leading-relaxed">
                  To be the preeminent sanctuary for theological discourse and spiritual transformation in West Africa and beyond.
                </p>
              </StaggerItem>
              <StaggerItem className="bg-[#570013] p-10 text-white flex-1">
                <h2 className="font-serif text-2xl mb-6">Our Values</h2>
                <ul className="space-y-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                  <li className="flex items-center gap-3"> Intellectual Rigor</li>
                  <li className="flex items-center gap-3"> Ecumenical Charity</li>
                  <li className="flex items-center gap-3"> Historical Continuity</li>
                  <li className="flex items-center gap-3"> Modern Relevance</li>
                </ul>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </section>

        {/* Timeline Section */}
        {/* <section className="bg-[#f4f4f0] py-32 px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-serif text-4xl text-[#570013] border-b border-[#775a19] inline-block pb-2">A Legacy of Light</h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#e0bfbf]" />
            <div className="space-y-24">
              {[
                { year: "1999", title: "The Divine Vision", desc: "A clear mandate received during a personal retreat at Babalola Camp, Arakeji." },
                { year: "2002", title: "Official Commencement", desc: "Started operations in Ilesa with six pioneer students." },
                { year: "Present", title: "Global Impact", desc: "Over 100 graduates making meaningful impact in mission fields worldwide." }
              ].map((item, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                  <div className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2" />
                    <div className="z-10 bg-[#775a19] w-2 h-2 rounded-full absolute left-1/2 transform -translate-x-1/2" />
                    <div className={`w-1/2 px-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="font-serif text-3xl text-[#775a19] block mb-2">{item.year}</span>
                      <h4 className="font-bold text-[#570013] mb-2">{item.title}</h4>
                      <p className="text-xs text-[#584141] opacity-70 leading-relaxed max-w-xs inline-block">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section> */}

        {/* Governing Council Section */}
        <section className="py-32 px-8 md:px-12 max-w-7xl mx-auto">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div>
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">Leadership & Governance</span>
              <h2 className="font-serif text-5xl md:text-6xl text-[#570013] mb-4">Governing Council</h2>
              <p className="text-[#584141] opacity-70 max-w-xl">Guided by visionary leaders dedicated to spiritual excellence and academic rigor.</p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              { name: "Pastor Dr. Henry Olubunmi Adesemoye", role: "Board Member", img: "/boards/WhatsApp Image 2026-04-28 at 8.40.43 PM.jpeg" },
              { name: "Patron Dr. Isaac .O. Ogundipe", role: "Patron", img: "/boards/WhatsApp Image 2026-04-28 at 8.46.50 PM.jpeg" },
              { name: "Pastor Dr S A Ajifolokun", role: "Chairman Governing Council", img: "/boards/WhatsApp Image 2026-04-28 at 10.00.05 PM.jpeg" },
              { name: "Evang Dr. Mrs Victoria Oluremi Ajifolokun", role: "Co-founder", img: "/boards/WhatsApp Image 2026-04-28 at 10.03.24 PM.jpeg" },
              { name: "Pastor Festus Adagunodo", role: "Senior Pastor Redemption for the Nations, Ilesa, Nigeria", img: "/boards/WhatsApp Image 2026-04-28 at 10.06.36 PM.jpeg" },
              { name: "Pastor Dr. F.F Adagunodo", role: "Board Secretary", img: "/boards/WhatsApp Image 2026-04-28 at 10.12.06 PM.jpeg" },
              { name: "Oba HRH Dr. Peter Babatunde Ojo", role: "The Akimo of Ikimo Ijesa (Board Member)", img: "/boards/WhatsApp Image 2026-04-28 at 10.14.28 PM.jpeg" },
              { name: "Bro Engr Emmanuel E. Ajifolokun Oluremi", role: "Board Member", img: "/boards/WhatsApp Image 2026-04-29 at 9.43.06 AM.jpeg" }
            ].map((member, i) => (
              <StaggerItem key={i}>
                <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-6 group relative shadow-md rounded-sm">
                  <Image
                    src={member.img}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#570013]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-serif text-xl text-[#570013] mb-1">{member.name}</h4>
                <p className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest mb-4">{member.role}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Global Accreditation Section */}
        {/* <section className="py-24 px-8 md:px-12 max-w-7xl mx-auto border-t border-[#e0bfbf]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimatedSection direction="left" className="lg:col-span-8">
              <h3 className="font-serif text-3xl text-[#570013] mb-6">Global Accreditation</h3>
              <p className="text-[#584141] opacity-70 mb-8 max-w-2xl leading-relaxed">
                The Theology School is fully accredited by the Association of Theological Schools and maintains partnerships with premier research universities worldwide. Our degrees are recognized internationally for their academic depth and professional utility.
              </p>
              <div className="flex gap-12">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#570013]">
                  <ShieldCheck size={20} className="text-[#775a19]" /> ATS Certified
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#570013]">
                  <Globe size={20} className="text-[#775a19]" /> Global Recognition
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#570013]">
                  <GraduationCap size={20} className="text-[#775a19]" /> Fully Accredited
                </div>
              </div>
            </AnimatedSection>
            <ScaleIn className="lg:col-span-4 bg-[#efeeea] p-10 text-center rounded-sm">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#775a19] rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
              </div>
              <h4 className="font-serif text-[#570013] text-xl mb-2">Academic Excellence</h4>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-6">Seal of Christ-Pattern Bible College</p>
              <div className="flex justify-between text-[10px] font-bold opacity-40">
                <span>EST. 2002</span>
                <span>REG. CPBC-01</span>
              </div>
            </ScaleIn>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-[#faf9f5] py-20 px-8 md:px-12 border-t border-[#e0bfbf]/20 mt-20">
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-sm">
          <StaggerItem className="col-span-1">
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Christ-Pattern Bible College</div>
            <p className="mb-6 opacity-70">Elevating theological discourse and empowering global service since 2002.</p>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Navigation</h5>
            <ul className="space-y-4 opacity-70">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Faculty Portal</li>
            </ul>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Community</h5>
            <ul className="space-y-4 opacity-70">
              <li>Alumni</li>
              <li>Donations</li>
            </ul>
          </StaggerItem>
          <StaggerItem>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Connect</h5>
            <div className="flex gap-4 opacity-50">
              <Globe size={18} />
              <ShieldCheck size={18} />
            </div>
            <p className="mt-6 text-[10px] opacity-40">&copy; {new Date().getFullYear()} Christ-Pattern Bible College. All rights reserved.</p>
          </StaggerItem>
        </StaggerContainer>
      </footer>
    </div>
  );
}