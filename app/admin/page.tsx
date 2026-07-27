"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import {
  RefreshCw, Trash2, CheckCircle, XCircle, Clock, LogOut,
  Search, X, ChevronLeft, ChevronRight, Eye,
} from 'lucide-react';

interface ReferenceRecord {
  id: string;
  type: 'PASTOR' | 'RELATIVE';
  refereeName?: string | null;
  refereeContact?: string | null;
  yearsKnown?: number | null;
  monthsKnown?: number | null;
  familiarityLevel?: string | null;
  isGenuinelyBornAgain?: boolean | null;
  isBaptizedInWater?: boolean | null;
  isBaptizedInHolySpirit?: boolean | null;
  christianExperience?: string | null;
  readyForTraining?: string | null;
  activeInChurchWork?: string | null;
  maritalLifeComment?: string | null;
  socialBackgroundComment?: string | null;
  relationshipDuration?: string | null;
  relationshipDescription?: string | null;
  knownAsChristian?: boolean | null;
  characterDescription?: string | null;
  knowledgeMatrix?: Record<string, string> | null;
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
  spousePhone?: string | null;
  kindOfMarriage?: string | null;
  secularOccupation?: string | null;
  placeOfWork?: string | null;
  isRegenerated?: boolean | null;
  regenerationExperience?: string | null;
  churchName?: string | null;
  pastorName?: string | null;
  pastorPhone?: string | null;
  roleInChurch?: string | null;
  baptizedInWater?: boolean | null;
  baptizedByImmersion?: boolean | null;
  baptizedInHolySpirit?: boolean | null;
  spiritualGifts?: string | null;
  educationalBackground?: string | null;
  spiritualBackground?: string | null;
  ordinationDate?: string | null;
  servicePosts?: { station?: string; post?: string; date?: string }[] | null;
  presentStationPost?: string | null;
  recognizedAsPastorOrEvangelist?: boolean | null;
  currentlyPastoring?: boolean | null;
  calledToEstablishMinistry?: boolean | null;
  spouseSupportsMinistry?: boolean | null;
  currentAddress?: string | null;
  occupation?: string | null;
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

function DetailRow({ label, value }: { label: string; value?: React.ReactNode }) {
  if (value === undefined || value === null || value === '') return null;
  return (
    <div>
      <div className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest">{label}</div>
      <div className="text-xs text-[#584141] mt-0.5">{value}</div>
    </div>
  );
}

function MatrixTable({ matrix }: { matrix?: Record<string, string> | null }) {
  const entries = matrix ? Object.entries(matrix).filter(([, v]) => v) : [];
  if (entries.length === 0) return <p className="text-xs text-[#584141] opacity-40 italic">No matrix ratings submitted.</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1">
      {entries.map(([trait, rating]) => (
        <div key={trait} className="flex justify-between text-xs border-b border-[#e0bfbf]/10 py-1">
          <span className="text-[#584141] opacity-70">{trait}</span>
          <span className="font-bold text-[#570013]">{rating}</span>
        </div>
      ))}
    </div>
  );
}

function ReferenceDetail({ reference }: { reference: ReferenceRecord }) {
  const isPastor = reference.type === 'PASTOR';
  return (
    <div className="bg-white border border-[#e0bfbf]/30 p-6 space-y-4">
      <h4 className="font-serif text-base text-[#570013]">
        {isPastor ? "Pastor's Reference" : "Relative's Reference"}
        {reference.submittedAt && (
          <span className="ml-2 text-[10px] font-sans font-normal text-[#584141] opacity-50">
            submitted {new Date(reference.submittedAt).toLocaleString()}
          </span>
        )}
      </h4>
      <div className="grid grid-cols-3 gap-4">
        <DetailRow label="Referee Name" value={reference.refereeName} />
        <DetailRow label="Contact" value={reference.refereeContact} />
        {isPastor ? (
          <>
            <DetailRow label="Years / Months Known" value={`${reference.yearsKnown ?? '—'} yrs, ${reference.monthsKnown ?? '—'} mos`} />
            <DetailRow label="Familiarity" value={reference.familiarityLevel} />
            <DetailRow label="Genuinely Born Again" value={yn(reference.isGenuinelyBornAgain)} />
            <DetailRow label="Baptized in Water" value={yn(reference.isBaptizedInWater)} />
            <DetailRow label="Baptized in Holy Spirit" value={yn(reference.isBaptizedInHolySpirit)} />
            <DetailRow label="Christian Experience" value={reference.christianExperience} />
            <DetailRow label="Ready for Training" value={reference.readyForTraining} />
          </>
        ) : (
          <>
            <DetailRow label="Relationship Duration" value={reference.relationshipDuration} />
            <DetailRow label="Relationship" value={reference.relationshipDescription} />
            <DetailRow label="Known as Christian" value={yn(reference.knownAsChristian)} />
          </>
        )}
      </div>
      {isPastor && (
        <>
          <DetailRow label="Active in Church Work" value={reference.activeInChurchWork} />
          <DetailRow label="Marital Life Comment" value={reference.maritalLifeComment} />
          <DetailRow label="Social Background Comment" value={reference.socialBackgroundComment} />
        </>
      )}
      {!isPastor && <DetailRow label="Character Description" value={reference.characterDescription} />}
      <div className="pt-3 border-t border-[#e0bfbf]/20">
        <div className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest mb-2">Personal Knowledge Matrix</div>
        <MatrixTable matrix={reference.knowledgeMatrix} />
      </div>
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

function CandidateModal({ candidate, onClose, onChanged }: { candidate: Candidate; onClose: () => void; onChanged: () => void }) {
  const pastorRef = candidate.references?.find((r) => r.type === 'PASTOR');
  const relativeRef = candidate.references?.find((r) => r.type === 'RELATIVE');

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-6" onClick={onClose}>
      <div
        className="bg-[#faf9f5] w-full max-w-4xl my-8 shadow-2xl border border-[#e0bfbf]/20 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-[#e0bfbf]/20 px-8 py-5 flex justify-between items-center z-10">
          <div>
            <h2 className="font-serif text-2xl text-[#570013]">{candidate.fullName}</h2>
            <p className="text-[10px] text-[#584141] opacity-50 uppercase tracking-widest mt-1">
              Applied {new Date(candidate.createdAt).toLocaleDateString()} • {candidate.program}
            </p>
          </div>
          <button onClick={onClose} className="p-2 text-[#584141] hover:bg-[#efeeea] rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="px-8 py-8 space-y-8">
          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">Personal & Contact Data</h3>
            <div className="grid grid-cols-4 gap-4">
              <DetailRow label="Email" value={candidate.email} />
              <DetailRow label="Phone" value={candidate.phone} />
              <DetailRow label="Residential Address" value={candidate.residentialAddress} />
              <DetailRow label="Home Town" value={candidate.homeTownAddress} />
              <DetailRow label="Nationality" value={candidate.nationality} />
              <DetailRow label="Place of Birth" value={candidate.placeOfBirth} />
              <DetailRow label="Date of Birth" value={candidate.dateOfBirth ? new Date(candidate.dateOfBirth).toLocaleDateString() : undefined} />
              <DetailRow label="Marital Status" value={candidate.maritalStatus} />
              <DetailRow label="Spouse" value={candidate.spouseName} />
              <DetailRow label="Spouse's Phone" value={candidate.spousePhone} />
              <DetailRow label="Kind of Marriage" value={candidate.kindOfMarriage} />
              <DetailRow label="Occupation" value={candidate.secularOccupation} />
              <DetailRow label="Place of Work" value={candidate.placeOfWork} />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">Spiritual Data</h3>
            <div className="grid grid-cols-4 gap-4">
              <DetailRow label="Regenerated" value={yn(candidate.isRegenerated)} />
              <DetailRow label="Church" value={candidate.churchName} />
              <DetailRow label="Role in Church" value={candidate.roleInChurch} />
              <DetailRow label="Pastor" value={candidate.pastorName} />
              <DetailRow label="Pastor's Phone" value={candidate.pastorPhone} />
              <DetailRow label="Baptized in Water" value={yn(candidate.baptizedInWater)} />
              <DetailRow label="Baptized by Immersion" value={yn(candidate.baptizedByImmersion)} />
              <DetailRow label="Baptized in Holy Spirit" value={yn(candidate.baptizedInHolySpirit)} />
              <DetailRow label="Educational Background" value={candidate.educationalBackground} />
            </div>
            <DetailRow label="Regeneration Experience" value={candidate.regenerationExperience} />
            <DetailRow label="Spiritual Gifts" value={candidate.spiritualGifts} />
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">Ministerial Background</h3>
            <div className="grid grid-cols-4 gap-4">
              <DetailRow label="Present Station/Post" value={candidate.presentStationPost} />
              <DetailRow label="Ordination Date" value={candidate.ordinationDate ? new Date(candidate.ordinationDate).toLocaleDateString() : undefined} />
              <DetailRow label="Recognized as Pastor/Evangelist" value={yn(candidate.recognizedAsPastorOrEvangelist)} />
              <DetailRow label="Currently Pastoring" value={yn(candidate.currentlyPastoring)} />
              <DetailRow label="Called to Establish Ministry" value={yn(candidate.calledToEstablishMinistry)} />
              <DetailRow label="Spouse Supports Ministry" value={yn(candidate.spouseSupportsMinistry)} />
            </div>
            <DetailRow label="Spiritual Background" value={candidate.spiritualBackground} />
            {candidate.servicePosts && candidate.servicePosts.length > 0 && (
              <div className="mt-2">
                <div className="text-[9px] font-bold text-[#775a19] uppercase tracking-widest mb-1">Stations / Service Posts</div>
                <ul className="text-xs text-[#584141] list-disc list-inside space-y-0.5">
                  {candidate.servicePosts.map((p, i) => (
                    <li key={i}>{[p.station, p.post, p.date].filter(Boolean).join(' — ')}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">Medical Fitness & Sponsorship</h3>
            <div className="grid grid-cols-4 gap-4">
              <DetailRow label="Illnesses" value={candidate.illnesses && candidate.illnesses.length > 0 ? candidate.illnesses.join(', ') : 'None declared'} />
              <DetailRow label="Declared Free from Illness" value={yn(candidate.freeFromIllness)} />
              <DetailRow label="Sponsorship" value={candidate.sponsorshipType === 'SELF' ? 'Self-sponsored' : candidate.sponsorshipType === 'SPONSORED' ? 'Sponsored' : undefined} />
              <DetailRow label="Sponsor" value={candidate.sponsorName} />
              <DetailRow label="Sponsor Address" value={candidate.sponsorAddress} />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">Rules & Consequences</h3>
            <div className="grid grid-cols-4 gap-4">
              <DetailRow label="Agreed to Rules" value={yn(candidate.agreedToRules)} />
              <DetailRow label="Agreed to Consequences" value={yn(candidate.agreedToConsequences)} />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#570013] mb-3">References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pastorRef ? (
                <ReferenceDetail reference={pastorRef} />
              ) : (
                <div className="bg-white border border-dashed border-[#e0bfbf]/40 p-6 text-xs text-[#584141] opacity-50 italic">
                  No Pastor's Reference on file.
                </div>
              )}
              {relativeRef ? (
                <ReferenceDetail reference={relativeRef} />
              ) : (
                <div className="bg-white border border-dashed border-[#e0bfbf]/40 p-6 text-xs text-[#584141] opacity-50 italic">
                  No Relative's Reference on file.
                </div>
              )}
            </div>
          </div>

          {candidate.status === 'APPROVED' && (
            <AcceptanceForm candidateId={candidate.id} acceptance={candidate.acceptance} onSaved={onChanged} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const router = useRouter();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Candidate | null>(null);

  const [searchInput, setSearchInput] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const fetchCandidates = async (opts?: { q?: string; page?: number }) => {
    setLoading(true);
    try {
      const q = opts?.q ?? query;
      const p = opts?.page ?? page;
      const params = new URLSearchParams({ page: String(p) });
      if (q) params.set('q', q);
      const res = await fetch(`/api/admin/candidates?${params.toString()}`);
      const data = await res.json();
      setCandidates(data.candidates || []);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const runSearch = () => {
    setQuery(searchInput);
    setPage(1);
    fetchCandidates({ q: searchInput, page: 1 });
  };

  const clearSearch = () => {
    setSearchInput('');
    setQuery('');
    setPage(1);
    fetchCandidates({ q: '', page: 1 });
  };

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    fetchCandidates({ page: p });
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/candidates/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchCandidates();
      setSelected((prev) => (prev && prev.id === id ? { ...prev, status: status as Candidate['status'] } : prev));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCandidate = async (id: string) => {
    if (!confirm('Are you sure you want to delete this registration?')) return;
    try {
      await fetch(`/api/admin/candidates/${id}`, { method: 'DELETE' });
      setSelected((prev) => (prev && prev.id === id ? null : prev));
      fetchCandidates();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCandidates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f5] font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-widest block mb-2">Admin Portal</span>
            <h1 className="font-serif text-4xl text-[#570013]">Registrations</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={() => fetchCandidates()} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest hover:bg-[#efeeea] transition-colors">
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest text-[#570013] hover:bg-[#efeeea] transition-colors">
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#775a19] opacity-60" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && runSearch()}
              placeholder="Search by name, phone, or email..."
              className="w-full bg-white border border-[#e0bfbf]/30 pl-10 pr-4 py-3 text-xs outline-none focus:border-[#775a19]"
            />
          </div>
          <button onClick={runSearch} className="px-6 py-3 bg-[#570013] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#800020] transition-colors">
            Search
          </button>
          {query && (
            <button onClick={clearSearch} className="px-4 py-3 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest text-[#584141] hover:bg-[#efeeea] transition-colors">
              Clear
            </button>
          )}
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
                    {query ? `No registrations match "${query}".` : 'No registrations found.'}
                  </td>
                </tr>
              ) : (
                candidates.map((c) => {
                  const pastorRef = c.references?.find((r) => r.type === 'PASTOR');
                  const relativeRef = c.references?.find((r) => r.type === 'RELATIVE');
                  return (
                    <tr key={c.id} className="hover:bg-[#faf9f5]/50 transition-colors">
                      <td className="px-6 py-6">
                        <div className="font-bold text-[#570013] text-sm">{c.fullName}</div>
                        <div className="text-[10px] opacity-40 uppercase tracking-tighter mt-1">Applied: {new Date(c.createdAt).toLocaleDateString()}</div>
                        <div className="text-[10px] opacity-50 mt-0.5">{c.email} • {c.phone}</div>
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
                      <td className="px-6 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => setSelected(c)} className="p-2 text-[#570013] hover:bg-[#efeeea] rounded transition-colors" title="View Details">
                            <Eye size={18} />
                          </button>
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
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {total > 0 && (
          <div className="flex justify-between items-center mt-6">
            <p className="text-[10px] text-[#584141] opacity-50 uppercase tracking-widest">
              Page {page} of {totalPages} • {total} total
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page <= 1}
                className="flex items-center gap-1 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest text-[#584141] hover:bg-[#efeeea] transition-colors disabled:opacity-30"
              >
                <ChevronLeft size={14} /> Prev
              </button>
              <button
                onClick={() => goToPage(page + 1)}
                disabled={page >= totalPages}
                className="flex items-center gap-1 px-4 py-2 bg-white border border-[#e0bfbf]/30 text-[10px] font-bold uppercase tracking-widest text-[#584141] hover:bg-[#efeeea] transition-colors disabled:opacity-30"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </main>

      {selected && (
        <CandidateModal
          candidate={selected}
          onClose={() => setSelected(null)}
          onChanged={() => fetchCandidates()}
        />
      )}
    </div>
  );
}
