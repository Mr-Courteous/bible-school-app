"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FloatingBubbles, MovingGradient } from '../components/AnimatedSection';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: 'Diploma in Biblical Studies',
  });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('SUCCESS');
      setFormData({ fullName: '', email: '', phone: '', program: 'Diploma in Biblical Studies' });
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans selection:bg-[#fed488]">
      <Navbar />
      <MovingGradient />
      
      <main className="relative z-10 pt-20 pb-32 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <FloatingBubbles />
        
        <div className="max-w-xl w-full mx-6">
          <div className="bg-white/80 backdrop-blur-xl p-12 shadow-2xl border border-[#e0bfbf]/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#570013] via-[#775a19] to-[#570013]" />
            
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.3em] block mb-4">Enrollment 2026</span>
              <h1 className="font-serif text-4xl text-[#570013] mb-4">Candidate Registration</h1>
              <p className="text-[#584141] opacity-60 text-sm">Join our community of scholarly soldiers for Christ.</p>
            </div>

            {status === 'SUCCESS' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h2 className="font-serif text-2xl text-[#570013] mb-4">Registration Received</h2>
                <p className="text-[#584141] opacity-70 mb-8">Your application has been successfully submitted. Our admissions team will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="px-8 py-3 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#800020] transition-colors"
                >
                  Register Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'ERROR' && (
                  <div className="p-4 bg-red-50 text-red-600 text-xs flex items-center gap-3 border-l-4 border-red-600">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com" 
                    className="w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+234 ..." 
                    className="w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest">Intended Program</label>
                  <select 
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                    className="w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    <option>Diploma in Biblical Studies</option>
                    <option>Bachelor of Theology</option>
                    <option>Postgraduate Diploma</option>
                    <option>Master of Divinity</option>
                  </select>
                </div>

                <button 
                  disabled={status === 'LOADING'}
                  className="w-full py-5 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#800020] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'LOADING' ? 'Processing...' : (
                    <>Submit Application <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <p className="text-center mt-12 text-[10px] text-[#584141] opacity-40 uppercase tracking-widest">
            Christ-Pattern Bible College • Quality Theological Education Since 2002
          </p>
        </div>
      </main>
    </div>
  );
}
