"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { KnowledgeMatrix } from '../../../components/KnowledgeMatrix';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

const inputClass =
  'w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all';
const labelClass = 'text-[10px] font-bold text-[#775a19] uppercase tracking-widest';

function YesNo({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-3">
      {['Yes', 'No'].map((opt) => (
        <button
          type="button"
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
            value === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function RelativeReferencePage() {
  const { candidateId } = useParams<{ candidateId: string }>();
  const [candidateName, setCandidateName] = useState('');
  const [loadError, setLoadError] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const [form, setForm] = useState({
    refereeName: '',
    refereeContact: '',
    relationshipDuration: '',
    relationshipDescription: '',
    knownAsChristian: '',
    characterDescription: '',
  });
  const [matrix, setMatrix] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!candidateId) return;
    fetch(`/api/candidates/${candidateId}/basic`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setCandidateName(data.fullName))
      .catch(() => setLoadError(true));
  }, [candidateId]);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');
    try {
      const res = await fetch('/api/reference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ candidateId, type: 'RELATIVE', ...form, knowledgeMatrix: matrix }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setStatus('SUCCESS');
    } catch (err: any) {
      setStatus('ERROR');
      setErrorMessage(err.message);
    }
  };

  if (loadError) {
    return (
      <div className="min-h-screen bg-[#faf9f5] font-sans">
        <Navbar />
        <main className="max-w-xl mx-auto px-8 py-32 text-center">
          <AlertCircle className="mx-auto mb-4 text-red-600" size={32} />
          <p className="text-[#584141]">This reference link is invalid or the applicant record could not be found.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-16 pb-32">
        <div className="bg-white/80 backdrop-blur-xl p-12 shadow-2xl border border-[#e0bfbf]/20 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#570013] via-[#775a19] to-[#570013]" />
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.3em] block mb-4">Relatives Reference Form</span>
            <h1 className="font-serif text-3xl text-[#570013] mb-4">
              Reference for {candidateName || '...'}
            </h1>
            <p className="text-[#584141] opacity-60 text-sm">
              As a relative, friend, or employer of the applicant, please complete the form below.
            </p>
          </div>

          {status === 'SUCCESS' ? (
            <div className="text-center py-10">
              <CheckCircle className="mx-auto mb-4 text-green-600" size={32} />
              <h2 className="font-serif text-2xl text-[#570013] mb-2">Reference Submitted</h2>
              <p className="text-[#584141] opacity-70">Thank you for your time.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'ERROR' && (
                <div className="p-4 bg-red-50 text-red-600 text-xs flex items-center gap-3 border-l-4 border-red-600">
                  <AlertCircle size={16} /> {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={labelClass}>Your Name</label>
                  <input required type="text" value={form.refereeName} onChange={(e) => update('refereeName', e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Your Phone / Email</label>
                  <input required type="text" value={form.refereeContact} onChange={(e) => update('refereeContact', e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>How long have you known the applicant?</label>
                <input type="text" placeholder="e.g. 5 years" value={form.relationshipDuration} onChange={(e) => update('relationshipDuration', e.target.value)} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>How is he/she related to you?</label>
                <input type="text" placeholder="e.g. Sister, Employer, Friend" value={form.relationshipDescription} onChange={(e) => update('relationshipDescription', e.target.value)} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Do you know him/her as a Christian?</label>
                <YesNo value={form.knownAsChristian} onChange={(v) => update('knownAsChristian', v)} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Can you explain briefly his/her character?</label>
                <textarea value={form.characterDescription} onChange={(e) => update('characterDescription', e.target.value)} rows={3} className={inputClass} />
              </div>

              <div className="space-y-3 pt-4 border-t border-[#e0bfbf]/20">
                <label className={labelClass}>Personal Knowledge Matrix on the Applicant</label>
                <KnowledgeMatrix value={matrix} onChange={(trait, rating) => setMatrix((prev) => ({ ...prev, [trait]: rating }))} />
              </div>

              <button
                disabled={status === 'LOADING'}
                className="w-full py-5 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#800020] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === 'LOADING' ? 'Submitting...' : <>Submit Reference <Send size={14} /></>}
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
