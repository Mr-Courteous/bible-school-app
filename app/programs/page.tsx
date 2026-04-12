import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import {
  ArrowRight,
  Book,
  GraduationCap,
  Award,
  Search,
  Database,
  Globe,
  Clock,
  Send
} from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-20 relative">
          <div className="absolute top-0 right-0 opacity-[0.03] text-[#570013] select-none pointer-events-none">
            <span className="font-serif text-[15rem] leading-none">Σ</span>
          </div>
          <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-4">Academic Excellence</span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#570013] leading-tight mb-8 max-w-3xl">
            Academic Programs <br/>& Scholarly Services
          </h1>
          <p className="text-[#584141] text-lg leading-relaxed opacity-70 max-w-2xl">
            Dedicated to the rigorous pursuit of theological understanding, our programs blend ancient wisdom with contemporary critical inquiry to form the next generation of scholars and leaders.
          </p>
        </section>

        {/* Bento Grid Programs */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Graduate Studies */}
            <div className="md:col-span-8 bg-[#efeeea] rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="p-10 flex-1">
                <span className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest block mb-4">Advanced Inquiry</span>
                <h2 className="font-serif text-3xl text-[#570013] mb-4">Graduate Studies</h2>
                <p className="text-sm text-[#584141] opacity-80 mb-8 leading-relaxed">
                  Our MA and PhD programs offer deep specialization in Biblical Languages, Historical Theology, and Systematic Thought.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-xs font-bold text-[#570013] opacity-80 uppercase tracking-wider">
                    <Book size={16} className="text-[#775a19]" /> Masters of Divinity (M.Div)
                  </li>
                  <li className="flex items-center gap-3 text-xs font-bold text-[#570013] opacity-80 uppercase tracking-wider">
                    <GraduationCap size={16} className="text-[#775a19]" /> Ph.D. in Theological History
                  </li>
                </ul>
                <Link href="#" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#570013] border-b border-[#570013] pb-1">
                  Explore Curriculum <ArrowRight size={14} />
                </Link>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-60" alt="Graduate Studies" />
              </div>
            </div>

            {/* Undergraduate Foundation */}
            <div className="md:col-span-4 bg-[#570013] p-10 text-white flex flex-col justify-between rounded-sm">
              <div>
                <h2 className="font-serif text-3xl mb-6 leading-tight">Undergraduate Foundation</h2>
                <p className="text-sm opacity-70 leading-relaxed mb-10">
                  A comprehensive introduction to the liberal arts seen through a theological lens. Form your worldview with clarity and conviction.
                </p>
              </div>
              <button className="w-full py-4 bg-white text-[#570013] font-bold text-xs uppercase tracking-widest hover:bg-[#fed488] transition-colors">
                Apply Now
              </button>
            </div>

            {/* Specialized Certificates */}
            <div className="md:col-span-4 bg-[#efeeea] p-10 rounded-sm flex flex-col justify-between">
              <div>
                <Award size={28} className="text-[#775a19] mb-6" />
                <h2 className="font-serif text-2xl text-[#570013] mb-4">Specialized Certificates</h2>
                <p className="text-xs text-[#584141] opacity-70 leading-relaxed">
                  Short-form intensive programs for lay leaders and professionals seeking theological literacy.
                </p>
              </div>
              <div className="flex justify-between items-center mt-10 text-[10px] font-bold text-[#570013] opacity-40 uppercase">
                <span>6-12 Months</span>
                <ArrowRight size={18} />
              </div>
            </div>

            {/* Digital Scriptorium Online */}
            <div className="md:col-span-8 bg-[#efeeea] rounded-sm overflow-hidden flex flex-col md:flex-row">
              <div className="p-10 flex-1">
                <h2 className="font-serif text-3xl text-[#570013] mb-4">Digital Scriptorium Online</h2>
                <p className="text-sm text-[#584141] opacity-70 leading-relaxed mb-10">
                  Access our world-class faculty from anywhere in the world. Our digital platform is designed for deep contemplation and community engagement.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4">
                    <span className="flex items-center gap-2 text-sm font-serif text-[#570013] mb-1"><Clock size={14} className="text-[#775a19]"/> 24/7</span>
                    <span className="text-[9px] uppercase tracking-widest opacity-50">Access</span>
                  </div>
                  <div className="bg-white p-4">
                    <span className="flex items-center gap-2 text-sm font-serif text-[#570013] mb-1"><Globe size={14} className="text-[#775a19]"/> Global</span>
                    <span className="text-[9px] uppercase tracking-widest opacity-50">Community</span>
                  </div>
                </div>
              </div>
              <div className="md:w-[40%] h-full min-h-[250px]">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" className="w-full h-full object-cover grayscale" alt="Digital Learning" />
              </div>
            </div>
          </div>
        </section>

        {/* Library & Support Section */}
        <section className="max-w-7xl mx-auto px-8 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
             <div className="absolute -top-10 -left-6 opacity-[0.05] text-[#570013] font-serif text-9xl pointer-events-none select-none">Lib</div>
             <h2 className="font-serif text-4xl text-[#570013] mb-6">The Great Library Services</h2>
             <p className="text-[#584141] opacity-70 mb-10 leading-relaxed">
               Home to over 500,000 volumes and a significant collection of rare medieval manuscripts, our library provides students with unparalleled research resources.
             </p>
             <div className="space-y-8">
                <div className="flex gap-4 group">
                  <Search className="text-[#775a19] shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm text-[#570013] mb-1 uppercase tracking-wider">Archival Research</h4>
                    <p className="text-xs text-[#584141] opacity-60">Personalized assistance for doctoral and faculty research projects.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <Database className="text-[#775a19] shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-sm text-[#570013] mb-1 uppercase tracking-wider">Digital Repository</h4>
                    <p className="text-xs text-[#584141] opacity-60">Access digitized fragments and rare texts from our global database.</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="bg-white p-12 border-l-4 border-[#775a19] shadow-sm">
            <h3 className="font-serif text-3xl text-[#570013] mb-6">Student Support</h3>
            <p className="text-sm text-[#584141] opacity-70 mb-10 leading-relaxed">
              We believe that rigorous study must be supported by spiritual and physical well-being. Our support systems are built on the principles of community and care.
            </p>
            <div className="divide-y divide-[#e0bfbf]/30">
              {['Pastoral Care', 'Academic Writing Center', 'Vocational Discernment'].map((item) => (
                <div key={item} className="py-5 flex justify-between items-center group cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#570013] opacity-60 group-hover:opacity-100 transition-opacity">{item}</span>
                  <div className="w-4 h-px bg-[#775a19] group-hover:w-8 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="max-w-6xl mx-auto px-8">
          <div className="bg-[#570013] p-16 text-center text-white relative overflow-hidden rounded-sm">
            <h2 className="font-serif text-4xl mb-10 relative z-10">Ready to begin your scholarly journey?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="px-8 py-4 bg-[#775a19] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#8e6b20] transition-colors">Download Prospectus</button>
              <button className="px-8 py-4 border border-white/30 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">Speak with Admissions</button>
            </div>
          </div>
        </section>

      {/* Main Footer (Modified slightly to match screenshot footer details) */}
      <footer className="bg-[#faf9f5] pt-24 pb-12 px-8 md:px-12 border-t border-[#e0bfbf]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-[#584141] text-xs">
          <div>
            <div className="text-xl font-bold text-[#570013] font-serif mb-6">Theology School</div>
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
              <button className="bg-[#570013] p-2 text-white">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#e0bfbf]/10 flex flex-col md:flex-row justify-between items-center text-[9px] opacity-40 uppercase tracking-[0.2em]">
          <p>© 2024 Digital Scriptorium Theology School & NGO. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Globe size={14} />
            <Award size={14} />
            <Book size={14} />
          </div>
        </div>
      </footer>
    </div>
  );
}