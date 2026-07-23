"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { Lock } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Invalid credentials');
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans">
      <Navbar />
      <main className="max-w-md mx-auto px-8 pt-40 pb-20">
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-[#570013] rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={20} className="text-white" />
          </div>
          <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.2em] block mb-3">Restricted Access</span>
          <h1 className="font-serif text-3xl text-[#570013]">Admin Sign In</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-sm border border-[#e0bfbf]/20 p-10 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 rounded-sm">
              {error}
            </div>
          )}
          <div>
            <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#e0bfbf]/40 px-4 py-3 text-sm outline-none focus:border-[#570013] transition-colors bg-[#f7f3ee]/40"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#e0bfbf]/40 px-4 py-3 text-sm outline-none focus:border-[#570013] transition-colors bg-[#f7f3ee]/40"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#6d0019] transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </main>
    </div>
  );
}
