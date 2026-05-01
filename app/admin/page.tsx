"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { RefreshCw, Trash2, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Candidate {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  program: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
}

export default function AdminDashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCandidates = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/candidates');
      const data = await res.json();
      setCandidates(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/candidates/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCandidate = async (id: string) => {
    if (!confirm('Are you sure you want to delete this registration?')) return;
    try {
      await fetch(`/api/admin/candidates/${id}`, { method: 'DELETE' });
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-2">Admin Portal</span>
            <h1 className="font-serif text-4xl text-[#570013]">Registrations</h1>
          </div>
          <button 
            onClick={fetchCandidates}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest hover:bg-[#efeeea] transition-colors"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>

        <div className="bg-white shadow-sm border border-[#e0bfbf]/20 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#efeeea]/50 border-b border-[#e0bfbf]/20">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Candidate</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Program</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Contact</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e0bfbf]/10">
              {candidates.length === 0 && !loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-[#584141] opacity-50 italic text-sm">
                    No registrations found.
                  </td>
                </tr>
              ) : (
                candidates.map((c) => (
                  <tr key={c.id} className="hover:bg-[#faf9f5]/50 transition-colors">
                    <td className="px-6 py-6">
                      <div className="font-bold text-[#570013] text-sm">{c.fullName}</div>
                      <div className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">Applied: {new Date(c.createdAt).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-6 text-xs text-[#584141]">{c.program}</td>
                    <td className="px-6 py-6">
                      <div className="text-xs text-[#584141]">{c.email}</div>
                      <div className="text-[10px] opacity-50 mt-1">{c.phone}</div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                        c.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                        c.status === 'REJECTED' ? 'bg-red-100 text-red-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {c.status === 'APPROVED' && <CheckCircle size={10} />}
                        {c.status === 'REJECTED' && <XCircle size={10} />}
                        {c.status === 'PENDING' && <Clock size={10} />}
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => updateStatus(c.id, 'APPROVED')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors"
                          title="Approve"
                        >
                          <CheckCircle size={18} />
                        </button>
                        <button 
                          onClick={() => updateStatus(c.id, 'REJECTED')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          title="Reject"
                        >
                          <XCircle size={18} />
                        </button>
                        <button 
                          onClick={() => deleteCandidate(c.id)}
                          className="p-2 text-gray-400 hover:bg-gray-100 rounded transition-colors ml-2"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
