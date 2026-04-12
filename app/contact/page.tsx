import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  HelpCircle,
  ArrowRight,
  Send,
  MessageSquareHeart
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">Connect with Scholarship</span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#570013] leading-tight mb-8">
                Inquiry & Dialogue
              </h1>
              <p className="text-[#584141] text-lg leading-relaxed opacity-70 max-w-md">
                Whether you are a prospective student seeking spiritual growth, a scholar looking for collaboration, or an alumnus reconnecting, our doors—and our minds—remain open to your voice.
              </p>
            </div>
            <div className="aspect-video bg-stone-200 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000" 
                alt="Library Sanctuary" 
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
          </div>
        </section>

        {/* Form and Info Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-12 shadow-sm border border-[#e0bfbf]/20">
              <h2 className="font-serif text-3xl text-[#570013] mb-8">Send a Petition</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#775a19]">Given Name</label>
                    <input type="text" className="w-full bg-[#f4f4f0] p-4 text-xs outline-none focus:ring-1 focus:ring-[#775a19]" placeholder="Theophilus" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#775a19]">Surname</label>
                    <input type="text" className="w-full bg-[#f4f4f0] p-4 text-xs outline-none focus:ring-1 focus:ring-[#775a19]" placeholder="Student" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#775a19]">Electronic Address</label>
                  <input type="email" className="w-full bg-[#f4f4f0] p-4 text-xs outline-none focus:ring-1 focus:ring-[#775a19]" placeholder="scholar@scriptorium.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#775a19]">Nature of Inquiry</label>
                  <select className="w-full bg-[#f4f4f0] p-4 text-xs outline-none appearance-none">
                    <option>Admissions Inquiry</option>
                    <option>Research Collaboration</option>
                    <option>NGO Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#775a19]">Message</label>
                  <textarea rows={5} className="w-full bg-[#f4f4f0] p-4 text-xs outline-none focus:ring-1 focus:ring-[#775a19]" placeholder="Your thoughts or questions..."></textarea>
                </div>
                <button className="flex items-center gap-3 px-10 py-4 bg-[#570013] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#800020] transition-all group">
                  Submit Inquiry <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="font-serif text-2xl text-[#570013] mb-8">Our Scriptoriums</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#efeeea] rounded-full flex items-center justify-center text-[#775a19] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#570013] text-sm">Central Campus, Oxford</h4>
                      <p className="text-xs text-[#584141] opacity-60 leading-relaxed mt-1">12 Latimer Lane, Academic Quarter<br/>Oxford, OX1 4AU, UK</p>
                      <p className="text-xs text-[#775a19] mt-2 font-bold">+44 (0) 1865 270000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#efeeea] rounded-full flex items-center justify-center text-[#775a19] shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#570013] text-sm">Jerusalem Research Center</h4>
                      <p className="text-xs text-[#584141] opacity-60 leading-relaxed mt-1">St. George's Cathedral Precinct<br/>Jerusalem, 91190</p>
                      <p className="text-xs text-[#775a19] mt-2 font-bold">+972 2 628 3261</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fdf9f0] p-10 border border-[#775a19]/10">
                <h4 className="font-serif italic text-[#775a19] text-xl mb-6">Direct Channels</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#570013]/70">
                    <Mail size={14} className="text-[#775a19]" /> admissions@scriptorium.edu
                  </li>
                  <li className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#570013]/70">
                    <Globe size={14} className="text-[#775a19]" /> ngo-partnerships@scriptorium.edu
                  </li>
                  <li className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#570013]/70">
                    <MessageSquareHeart size={14} className="text-[#775a19]" /> 24/7 Spiritual Support Line
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
          <div className="h-[400px] bg-[#e5e4de] relative overflow-hidden group grayscale opacity-60 hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white p-6 shadow-xl relative z-10 text-center">
                  <MapPin size={24} className="text-[#570013] mx-auto mb-2" />
                  <p className="font-serif text-[#570013] font-bold">The Great Hall</p>
                  <p className="text-[9px] uppercase tracking-widest opacity-60">Navigate to Campus</p>
               </div>
            </div>
            {/* Faux Map Elements */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#570013] rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#570013] rounded-full opacity-40" />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-8 md:px-12 mb-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#570013] mb-4">Scholarly Inquiries (FAQ)</h2>
            <p className="text-xs text-[#584141] opacity-60 uppercase tracking-widest">Common questions regarding our heritage and admissions</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What are the requirements for the Divinity program?", 
                a: "Applicants must possess a Bachelor's degree in a related field of Humanities or Social Sciences and demonstrate a commitment to rigorous theological inquiry and ethical practice." 
              },
              { 
                q: "Does the NGO offer international volunteering?", 
                a: "Yes, our Outreach Division operates in five continents. We prioritize long-term sustainable development and theological dialogue within local communities." 
              },
              { 
                q: "Are scholarships available for non-traditional students?", 
                a: "Indeed. The 'Illumination Grant' is specifically designed to support mature students and those from diverse professional backgrounds transitioning into theology." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 border border-[#e0bfbf]/20 group">
                <div className="flex gap-4 items-start">
                  <HelpCircle size={20} className="text-[#775a19] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#570013] text-sm mb-4 leading-snug">{faq.q}</h4>
                    <p className="text-xs text-[#584141] opacity-70 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Footer (Simplified as per screenshot) */}
      <footer className="bg-[#faf9f5] pt-24 pb-12 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-[10px] font-bold uppercase tracking-widest">
          <div>
            <div className="text-xl font-bold text-[#570013] font-serif normal-case mb-6">Theology School</div>
            <p className="opacity-50 lowercase font-normal normal-case leading-relaxed">Bridging the gap between ancient wisdom and modern scholarship through dedicated research and global outreach.</p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#570013]">Navigation</h5>
            <ul className="space-y-2 opacity-50 font-normal">
              <li>Faculty Portal</li>
              <li>Alumni</li>
              <li>Give Now</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#570013]">Legal</h5>
            <ul className="space-y-2 opacity-50 font-normal">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[#570013]">Newsletter</h5>
            <div className="flex bg-[#efeeea] p-1 mt-4">
              <input type="email" placeholder="Email for the Scriptorium Digest" className="bg-transparent px-3 py-2 w-full outline-none font-normal lowercase" />
              <button className="bg-[#570013] p-2 text-white"><Send size={14} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#e0bfbf]/10 text-center opacity-40 text-[9px]">
          © 2024 Digital Scriptorium Theology School & NGO. All rights reserved.
        </div>
      </footer>
    </div>
  );
}