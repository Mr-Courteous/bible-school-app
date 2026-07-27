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

export default function PastorReferencePage() {
  const { candidateId } = useParams<{ candidateId: string }>();
  const [candidateName, setCandidateName] = useState('');
  const [loadError, setLoadError] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const [form, setForm] = useState({
    refereeName: '',
    refereeContact: '',
    yearsKnown: '',
    monthsKnown: '',
    familiarityLevel: '',
    isGenuinelyBornAgain: '',
    isBaptizedInWater: '',
    isBaptizedInHolySpirit: '',
    christianExperience: '',
    readyForTraining: '',
    activeInChurchWork: '',
    maritalLifeComment: '',
    socialBackgroundComment: '',
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
        body: JSON.stringify({ candidateId, type: 'PASTOR', ...form, knowledgeMatrix: matrix }),
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
            <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.3em] block mb-4">Pastor's Reference Form</span>
            <h1 className="font-serif text-3xl text-[#570013] mb-4">
              Reference for {candidateName || '...'}
            </h1>
            <p className="text-[#584141] opacity-60 text-sm">
              The applicant has waived their right to review this reference. Please answer candidly.
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className={labelClass}>Years Known</label>
                  <input type="number" min="0" value={form.yearsKnown} onChange={(e) => update('yearsKnown', e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>Months Known</label>
                  <input type="number" min="0" max="11" value={form.monthsKnown} onChange={(e) => update('monthsKnown', e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>How well do you know him/her?</label>
                <div className="flex gap-3">
                  {['Casually', 'Fairly well', 'Very well'].map((opt) => (
                    <button type="button" key={opt} onClick={() => update('familiarityLevel', opt)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${form.familiarityLevel === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Is the applicant genuinely born again?</label>
                <YesNo value={form.isGenuinelyBornAgain} onChange={(v) => update('isGenuinelyBornAgain', v)} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Has he/she been baptized in water by immersion?</label>
                <YesNo value={form.isBaptizedInWater} onChange={(v) => update('isBaptizedInWater', v)} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Has he/she been baptized in the Holy Spirit with evidence of speaking in tongues?</label>
                <YesNo value={form.isBaptizedInHolySpirit} onChange={(v) => update('isBaptizedInHolySpirit', v)} />
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Which describes this applicant's Christian experience?</label>
                <div className="flex flex-wrap gap-2">
                  {['Profound', 'Contagious', 'Superficial', 'Genuine and growing', 'Over-emotional'].map((opt) => (
                    <button type="button" key={opt} onClick={() => update('christianExperience', opt)} className={`px-4 py-2 text-xs font-bold border transition-colors ${form.christianExperience === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Do you consider the applicant ready for ministerial training?</label>
                <div className="flex flex-wrap gap-2">
                  {['Unhesitatingly', 'With hesitation', 'Perhaps at last time', 'No'].map((opt) => (
                    <button type="button" key={opt} onClick={() => update('readyForTraining', opt)} className={`px-4 py-2 text-xs font-bold border transition-colors ${form.readyForTraining === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className={labelClass}>Is he/she active in church work or ministerial duty? Please explain.</label>
                <textarea value={form.activeInChurchWork} onChange={(e) => update('activeInChurchWork', e.target.value)} rows={2} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Family life: is his/her marital life with dowry and Godly approached?</label>
                <textarea value={form.maritalLifeComment} onChange={(e) => update('maritalLifeComment', e.target.value)} rows={2} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Comment briefly on his/her social background</label>
                <textarea value={form.socialBackgroundComment} onChange={(e) => update('socialBackgroundComment', e.target.value)} rows={2} className={inputClass} />
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
