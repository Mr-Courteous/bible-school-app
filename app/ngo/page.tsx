import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  ArrowRight,
  MapPin,
  Heart,
  Users,
  Globe,
  Send,
  Quote as QuoteIcon
} from 'lucide-react';

export default function NGOPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />
        {/* NGO Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-[#e5e4de] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
            <h2 className="text-[25vw] font-serif font-bold text-[#570013] whitespace-nowrap">PHYSICAL ACTION</h2>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div className="pt-20">
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">ANOTHER HERITAGE OUTREACH</span>
              <h1 className="font-serif text-6xl md:text-8xl text-[#570013] leading-tight mb-8">
                Wisdom in <span className="italic font-light">Service.</span>
              </h1>
              <p className="text-[#584141] text-lg leading-relaxed opacity-80 max-w-md mb-10">
                Extending the scholarly pursuit of truth into the physical world through dignified humanitarian action and systemic restoration.
              </p>
              <button className="flex items-center gap-4 px-8 py-4 bg-[#570013] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#800020] transition-all">
                Support Our Mission <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Our Sacred Mandate */}
        <section className="py-32 max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative z-10 bg-slate-800">
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Community Support" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#efeeea] p-10 shadow-xl z-20 border border-[#e0bfbf]/20">
                 <div className="text-5xl font-serif text-[#570013] mb-2">94%</div>
                 <p className="text-[9px] font-bold uppercase tracking-widest opacity-50 text-[#584141]">Direct Impact Allocation</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl text-[#570013] mb-8">Our Sacred Mandate</h2>
              <div className="space-y-6 text-[#584141] leading-relaxed opacity-80">
                <p>We believe that theology is not a basic science contained within leather-bound volumes; it is a living dialogue that must find its highest expression in the alleviation of human suffering.</p>
                <p>The Digital Scriptorium NGO was founded to provide a structural bridge between the wealth of academic resources and the urgent needs of marginalized communities. We focus on three pillars: transformation, education, restoration, and resilience.</p>
              </div>

              <div className="grid grid-cols-2 gap-10 mt-12">
                <div>
                  <h4 className="font-serif text-[#775a19] text-xl mb-3">Education</h4>
                  <p className="text-xs opacity-70">Creating sustainable learning environments in areas affected by poverty.</p>
                </div>
                <div>
                  <h4 className="font-serif text-[#775a19] text-xl mb-3">Restoration</h4>
                  <p className="text-xs opacity-70">Providing physical and community support after conflict or disaster.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Field Projects */}
        <section className="py-24 bg-[#faf9f5] px-8 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-2">ACTIVE LABOR</span>
              <h2 className="font-serif text-4xl text-[#570013]">Current Field Projects</h2>
            </div>
            <Link href="#" className="text-[9px] font-bold uppercase tracking-widest text-[#570013] border-b border-[#570013] pb-1">View All Projects</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="md:col-span-2 relative h-[300px] overflow-hidden group rounded-sm shadow-sm">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200" className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt="Ethiopia Initiative" />
              <div className="absolute inset-0 bg-black/60 p-10 flex flex-col justify-end">
                <span className="text-[9px] text-[#fed488] font-bold uppercase tracking-widest mb-2">Education • Ethiopia</span>
                <h3 className="font-serif text-3xl text-white mb-4">The Aksum Library Initiative</h3>
                <p className="text-white/70 text-sm max-w-md">Restoring and digitizing ancient manuscripts while providing modern primary education to 400 local children.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#0f172a] p-10 flex flex-col justify-end relative overflow-hidden rounded-sm">
               <Globe className="absolute top-[-20px] right-[-20px] text-white/5" size={150} />
               <span className="text-[9px] text-[#fed488] font-bold uppercase tracking-widest mb-2">Resilience</span>
               <h3 className="font-serif text-2xl text-white mb-4 leading-tight">Desert Oasis Farming</h3>
               <p className="text-white/60 text-xs">Implementing sustainable water solution systems in semi-arid regions.</p>
            </div>

            {/* Project 3 */}
            <div className="bg-[#efeeea] p-10 rounded-sm">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ngo" className="w-20 h-20 mb-6 grayscale" alt="Profile" />
               <h3 className="font-serif text-[#570013] text-xl mb-4">Peace-Maker Circles</h3>
               <p className="text-[#584141] text-xs opacity-70 leading-relaxed mb-6">Conflict mediation training based on historical theological principles of governance.</p>
               <Link href="#" className="text-[#775a19] text-[10px] font-bold uppercase tracking-widest">Learn More</Link>
            </div>

            {/* Quote Block */}
            <div className="md:col-span-2 bg-[#570013] p-12 text-white relative overflow-hidden rounded-sm flex items-center">
              <QuoteIcon className="absolute top-[-30px] left-[-30px] opacity-10" size={180} />
              <div className="relative z-10 text-center mx-auto max-w-md">
                <blockquote className="font-serif text-2xl italic mb-6">
                  "Scholarship without empathy is mere vanity; service without wisdom is fragile. We combine both for lasting transformation."
                </blockquote>
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#fed488]">— DR. JULIAN THORNE, FOUNDER</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved / Inquiry Form */}
        <section className="py-32 px-8 md:px-12 bg-[#efeeea] rounded-t-[50px]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-serif text-5xl text-[#570013] mb-8">Get Involved</h2>
              <p className="text-[#584141] opacity-70 leading-relaxed mb-12">
                Whether you are a researcher, a student, or a citizen of the world, there is a place for your talents in our mission. We require physical volunteers, digital transcribers, and advocates.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 shadow-sm flex items-center gap-6 group hover:border-[#775a19] border border-transparent transition-all">
                  <div className="p-3 bg-[#f4f4f0] text-[#775a19]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#570013] text-sm uppercase tracking-wider">Field Research Fellowship</h4>
                    <p className="text-xs opacity-60">Join a semester-long internship on location in Ethiopia or Jordan.</p>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm flex items-center gap-6 group hover:border-[#775a19] border border-transparent transition-all">
                  <div className="p-3 bg-[#f4f4f0] text-[#775a19]">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#570013] text-sm uppercase tracking-wider">Digital Scribe Corps</h4>
                    <p className="text-xs opacity-60">Remote transcription and translation of historic texts for global accessibility.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 shadow-2xl rounded-sm">
              <h3 className="font-serif text-3xl text-[#570013] mb-8">Inquiry for Action</h3>
              <form className="space-y-6">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-[#f4f4f0] p-4 text-xs outline-none border-b border-transparent focus:border-[#775a19] transition-all" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-[#f4f4f0] p-4 text-xs outline-none border-b border-transparent focus:border-[#775a19] transition-all" />
                </div>
                <div>
                   <select className="w-full bg-[#f4f4f0] p-4 text-xs opacity-60 outline-none">
                     <option>Area of Interest</option>
                     <option>Field Volunteering</option>
                     <option>Digital Support</option>
                     <option>Donation Partnerships</option>
                   </select>
                </div>
                <button className="w-full py-5 bg-[#775a19] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#570013] transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Fuel The Restoration */}
        <section className="py-32 bg-[#570013] text-white text-center relative">
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <Heart size={40} className="mx-auto mb-8 text-[#fed488]" />
            <h2 className="font-serif text-5xl mb-6">Fuel the Restoration</h2>
            <p className="opacity-70 mb-12 max-w-xl mx-auto">Every contribution directly funds the preservation of history and the future of marginalized communities. Be a part of the legacy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-[#570013] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#fed488] transition-colors">Monthly Gift</button>
              <button className="px-10 py-5 bg-[#775a19] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#8e6b20] transition-colors">One-Time Donation</button>
            </div>
            <div className="mt-12 flex justify-center gap-10 opacity-40 text-[9px] font-bold uppercase tracking-widest">
               <span className="flex items-center gap-2 underline decoration-[#775a19]">Tax Exempted</span>
               <span className="flex items-center gap-2 underline decoration-[#775a19]">Global Impact</span>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-[#faf9f5] pt-24 pb-12 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-xs">
          <div>
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Digital Scriptorium</div>
            <p className="opacity-60 leading-relaxed">Bridging ancient knowledge with modern action. A non-profit initiative of the Sacred Heritage Theology School.</p>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">The Mission</h5>
            <ul className="space-y-4 opacity-60">
              <li>About NGO</li>
              <li>Current Projects</li>
              <li>Financial Reports</li>
              <li>Impact Metrics</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Resources</h5>
            <ul className="space-y-4 opacity-60">
              <li>Donor Portal</li>
              <li>Forms</li>
              <li>Privacy Policy</li>
              <li>Support Services</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[#570013] uppercase tracking-widest text-[10px] mb-6">Connect</h5>
            <div className="flex bg-[#efeeea] p-1 mb-6">
              <input type="email" placeholder="Newsletter" className="bg-transparent px-3 py-2 w-full outline-none text-[10px]" />
              <button className="bg-[#570013] p-2 text-white"><Send size={14} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#e0bfbf]/10 flex justify-between items-center text-[9px] opacity-40 uppercase tracking-[0.2em]">
          <p>© 2024 Digital Scriptorium Theology School & NGO. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Give Now</span>
            <span>Volunteer</span>
          </div>
        </div>
      </footer>
    </div>
  );
}