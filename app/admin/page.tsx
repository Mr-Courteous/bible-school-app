"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { RefreshCw, Trash2, CheckCircle, XCircle, Clock, LogOut, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';

interface ReferenceRecord {
  id: string;
  type: 'PASTOR' | 'RELATIVE';
  refereeName?: string | null;
  submittedAt?: string | null;
}

interface Acceptance {
  dateOfResumption?: string | null;
  dislikes?: string | null;
  refereeGuarantorInfo?: string | null;
  officialPost?: string | null;
  directorSignedAt?: string | null;
  registrarSignedAt?: string | null;
}

interface Candidate {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  program: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  residentialAddress?: string;
  homeTownAddress?: string | null;
  nationality?: string | null;
  placeOfBirth?: string | null;
  dateOfBirth?: string | null;
  maritalStatus?: string | null;
  spouseName?: string | null;
  kindOfMarriage?: string | null;
  secularOccupation?: string | null;
  placeOfWork?: string | null;
  isRegenerated?: boolean | null;
  churchName?: string | null;
  pastorName?: string | null;
  pastorPhone?: string | null;
  baptizedInWater?: boolean | null;
  baptizedInHolySpirit?: boolean | null;
  spiritualBackground?: string | null;
  presentStationPost?: string | null;
  recognizedAsPastorOrEvangelist?: boolean | null;
  currentlyPastoring?: boolean | null;
  illnesses?: string[];
  freeFromIllness?: boolean | null;
  sponsorshipType?: string | null;
  sponsorName?: string | null;
  sponsorAddress?: string | null;
  agreedToRules?: boolean;
  agreedToConsequences?: boolean;
  references: ReferenceRecord[];
  acceptance: Acceptance | null;
}

const yn = (v?: boolean | null) => (v === true ? 'Yes' : v === false ? 'No' : '—');

function CopyLink({ label, url }: { label: string; url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex items-center gap-2 px-3 py-2 bg-[#f4f4f0]/60 text-[10px] font-bold uppercase tracking-widest text-[#775a19] hover:bg-[#efeeea] transition-colors"
    >
      {copied ? <Check size={12} /> : <Copy size={12} />} {label}
    </button>
  );
}

function DetailRow({ label, value }: { label: string; value?: React.ReactNode }) {
  if (value === undefined || value === null || value === '') return null;
  return (
    <div>
      <div className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">{label}</div>
      <div className="text-xs text-[#584141] mt-0.5">{value}</div>
    </div>
  );
}

function AcceptanceForm({ candidateId, acceptance, onSaved }: { candidateId: string; acceptance: Acceptance | null; onSaved: () => void }) {
  const [form, setForm] = useState({
    dateOfResumption: acceptance?.dateOfResumption ? acceptance.dateOfResumption.slice(0, 10) : '',
    dislikes: acceptance?.dislikes || '',
    refereeGuarantorInfo: acceptance?.refereeGuarantorInfo || '',
    officialPost: acceptance?.officialPost || '',
  });
  const [saving, setSaving] = useState(false);

  const save = async (extra: Record<string, boolean> = {}) => {
    setSaving(true);
    try {
      await fetch(`/api/admin/candidates/${candidateId}/acceptance`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, ...extra }),
      });
      onSaved();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white border border-[#e0bfbf]/30 p-6 space-y-4">
      <h3 className="font-serif text-lg text-[#570013]">Acceptance Form</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">Date of Resumption</label>
          <input type="date" value={form.dateOfResumption} onChange={(e) => setForm({ ...form, dateOfResumption: e.target.value })} className="w-full bg-[#f4f4f0]/50 p-2 text-xs" />
        </div>
        <div className="space-y-1">
          <label className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">Official Post in College</label>
          <input type="text" value={form.officialPost} onChange={(e) => setForm({ ...form, officialPost: e.target.value })} className="w-full bg-[#f4f4f0]/50 p-2 text-xs" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">State Anything You Dislike</label>
        <textarea value={form.dislikes} onChange={(e) => setForm({ ...form, dislikes: e.target.value })} rows={2} className="w-full bg-[#f4f4f0]/50 p-2 text-xs" />
      </div>
      <div className="space-y-1">
        <label className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">Name of Referee/Guarantor & Address with Phone No.</label>
        <textarea value={form.refereeGuarantorInfo} onChange={(e) => setForm({ ...form, refereeGuarantorInfo: e.target.value })} rows={2} className="w-full bg-[#f4f4f0]/50 p-2 text-xs" />
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <button type="button" disabled={saving} onClick={() => save()} className="px-4 py-2 bg-[#efeeea] text-[10px] font-bold uppercase tracking-widest text-[#584141] hover:bg-[#e0bfbf]/30">
          Save Details
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save({ directorSigned: true })}
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${acceptance?.directorSignedAt ? 'bg-green-100 text-green-700' : 'bg-white border border-[#e0bfbf]/40 text-[#584141] hover:bg-[#efeeea]'}`}
        >
          {acceptance?.directorSignedAt ? 'Signed by Director ✓' : 'Sign as Director of Studies'}
        </button>
        <button
          type="button"
          disabled={saving}
          onClick={() => save({ registrarSigned: true })}
          className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${acceptance?.registrarSignedAt ? 'bg-green-100 text-green-700' : 'bg-white border border-[#e0bfbf]/40 text-[#584141] hover:bg-[#efeeea]'}`}
        >
          {acceptance?.registrarSignedAt ? 'Signed by Registrar ✓' : 'Sign as Registrar'}
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

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
          <div className="flex gap-3">
            <button onClick={fetchCandidates} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest hover:bg-[#efeeea] transition-colors">
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest text-[#570013] hover:bg-[#efeeea] transition-colors">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        <div className="bg-white shadow-sm border border-[#e0bfbf]/20 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-[#efeeea]/50 border-b border-[#e0bfbf]/20">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Candidate</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">Program</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-[#775a19]">References</th>
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
                candidates.map((c) => {
                  const pastorRef = c.references?.find((r) => r.type === 'PASTOR');
                  const relativeRef = c.references?.find((r) => r.type === 'RELATIVE');
                  const isOpen = expanded === c.id;
                  return (
                    <React.Fragment key={c.id}>
                      <tr className="hover:bg-[#faf9f5]/50 transition-colors cursor-pointer" onClick={() => setExpanded(isOpen ? null : c.id)}>
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            {isOpen ? <ChevronUp size={14} className="text-[#775a19]" /> : <ChevronDown size={14} className="text-[#775a19]" />}
                            <div>
                              <div className="font-bold text-[#570013] text-sm">{c.fullName}</div>
                              <div className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">Applied: {new Date(c.createdAt).toLocaleDateString()}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6 text-xs text-[#584141]">{c.program}</td>
                        <td className="px-6 py-6 text-xs text-[#584141]">
                          <span className={pastorRef ? 'text-green-700' : 'opacity-40'}>Pastor {pastorRef ? '✓' : '—'}</span>
                          {' / '}
                          <span className={relativeRef ? 'text-green-700' : 'opacity-40'}>Relative {relativeRef ? '✓' : '—'}</span>
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
                        <td className="px-6 py-6 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex justify-end gap-2">
                            <button onClick={() => updateStatus(c.id, 'APPROVED')} className="p-2 text-green-600 hover:bg-green-50 rounded transition-colors" title="Approve">
                              <CheckCircle size={18} />
                            </button>
                            <button onClick={() => updateStatus(c.id, 'REJECTED')} className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors" title="Reject">
                              <XCircle size={18} />
                            </button>
                            <button onClick={() => deleteCandidate(c.id)} className="p-2 text-gray-400 hover:bg-gray-100 rounded transition-colors ml-2" title="Delete">
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {isOpen && (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 bg-[#faf9f5]">
                            <div className="space-y-8">
                              {/* Reference links to share */}
                              <div className="flex flex-wrap gap-3">
                                <CopyLink label="Copy Pastor Reference Link" url={`${origin}/reference/pastor/${c.id}`} />
                                <CopyLink label="Copy Relative Reference Link" url={`${origin}/reference/relative/${c.id}`} />
                              </div>

                              {/* Personal & contact */}
                              <div>
                                <h3 className="font-serif text-lg text-[#570013] mb-3">Personal & Contact Data</h3>
                                <div className="grid grid-cols-4 gap-4">
                                  <DetailRow label="Email" value={c.email} />
                                  <DetailRow label="Phone" value={c.phone} />
                                  <DetailRow label="Residential Address" value={c.residentialAddress} />
                                  <DetailRow label="Home Town" value={c.homeTownAddress} />
                                  <DetailRow label="Nationality" value={c.nationality} />
                                  <DetailRow label="Place of Birth" value={c.placeOfBirth} />
                                  <DetailRow label="Date of Birth" value={c.dateOfBirth ? new Date(c.dateOfBirth).toLocaleDateString() : undefined} />
                                  <DetailRow label="Marital Status" value={c.maritalStatus} />
                                  <DetailRow label="Spouse" value={c.spouseName} />
                                  <DetailRow label="Kind of Marriage" value={c.kindOfMarriage} />
                                  <DetailRow label="Occupation" value={c.secularOccupation} />
                                  <DetailRow label="Place of Work" value={c.placeOfWork} />
                                </div>
                              </div>

                              {/* Spiritual / ministerial */}
                              <div>
                                <h3 className="font-serif text-lg text-[#570013] mb-3">Spiritual & Ministerial Background</h3>
                                <div className="grid grid-cols-4 gap-4">
                                  <DetailRow label="Regenerated" value={yn(c.isRegenerated)} />
                                  <DetailRow label="Church" value={c.churchName} />
                                  <DetailRow label="Pastor" value={c.pastorName} />
                                  <DetailRow label="Pastor's Phone" value={c.pastorPhone} />
                                  <DetailRow label="Baptized in Water" value={yn(c.baptizedInWater)} />
                                  <DetailRow label="Baptized in Holy Spirit" value={yn(c.baptizedInHolySpirit)} />
                                  <DetailRow label="Present Station/Post" value={c.presentStationPost} />
                                  <DetailRow label="Recognized as Pastor/Evangelist" value={yn(c.recognizedAsPastorOrEvangelist)} />
                                  <DetailRow label="Currently Pastoring" value={yn(c.currentlyPastoring)} />
                                </div>
                                <DetailRow label="Spiritual Background" value={c.spiritualBackground} />
                              </div>

                              {/* Medical / sponsorship */}
                              <div>
                                <h3 className="font-serif text-lg text-[#570013] mb-3">Medical Fitness & Sponsorship</h3>
                                <div className="grid grid-cols-4 gap-4">
                                  <DetailRow label="Illnesses" value={c.illnesses && c.illnesses.length > 0 ? c.illnesses.join(', ') : 'None declared'} />
                                  <DetailRow label="Declared Free from Illness" value={yn(c.freeFromIllness)} />
                                  <DetailRow label="Sponsorship" value={c.sponsorshipType === 'SELF' ? 'Self-sponsored' : c.sponsorshipType === 'SPONSORED' ? 'Sponsored' : undefined} />
                                  <DetailRow label="Sponsor" value={c.sponsorName} />
                                  <DetailRow label="Sponsor Address" value={c.sponsorAddress} />
                                </div>
                              </div>

                              {/* Rules acceptance */}
                              <div>
                                <h3 className="font-serif text-lg text-[#570013] mb-3">Rules & Consequences</h3>
                                <div className="grid grid-cols-4 gap-4">
                                  <DetailRow label="Agreed to Rules" value={yn(c.agreedToRules)} />
                                  <DetailRow label="Agreed to Consequences" value={yn(c.agreedToConsequences)} />
                                </div>
                              </div>

                              {/* Acceptance form, only for approved candidates */}
                              {c.status === 'APPROVED' && (
                                <AcceptanceForm candidateId={c.id} acceptance={c.acceptance} onSaved={fetchCandidates} />
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
