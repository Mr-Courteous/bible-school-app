"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { FloatingBubbles, MovingGradient } from '../components/AnimatedSection';
import { Send, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { KnowledgeMatrix } from '../components/KnowledgeMatrix';

const ILLNESS_OPTIONS = [
  'Severe Headache',
  'Stomach Ache',
  'Reoccurrence Fever',
  'Diabetes',
  'Diarrhea',
  'Cancer',
];

const COURSE_OPTIONS = [
  'Certificate in Mission Evangelism',
  'Diploma in Theology',
  'Bachelor in Biblical Art and Theology',
  'Masters in Ecclesiology / Prophetic Theology',
  'Doctor of Divinity',
];

const RULES = [
  'Punctuality at lectures is compulsory. Failure to attend for two consecutive weeks without formal permission may cause suspension.',
  'All school fees must be paid at the stipulated time, directly by the individual. Joint payment is prohibited.',
  'Students should dress normally and decently to classes.',
  'Students should conduct themselves as Disciples of Christ with humility and obedience to college authority.',
  'Eating and drinking in classes during lectures is prohibited.',
  'Distraction during lectures such as gossip, noisemaking, or physical disturbance is not allowed.',
  'Quarreling and fighting among students are forbidden.',
  'Phones and handsets should be turned off during lectures.',
  'Lateness to classes is not allowed.',
  'Attendance at all official meetings of the College, such as All Night Service, is compulsory.',
  'Unionism and conspiracy are not allowed.',
  'All practical exercises must be well observed without any excuse.',
];

const CONSEQUENCES = [
  'Lateness to the lecture room attracts kneeling down for 30 minutes without leniency.',
  'Failure to obtain proper written approval before absenting from lectures or programmes will attract discipline.',
  'Failure to turn off your handset during lecture hours attracts a fine of N500 on the spot, or seizure for two weeks.',
  'Eating or sleeping in the lecture room leads to a N500 fine on the spot.',
  'Fighting on the school premises attracts 50 cement blocks and 1 bag of cement; property damage must be repaired.',
  'Failure to appear in school uniform attracts a fine of N1,000.',
  'Failure to sign the attendance register means absconding lecture and will attract 1 bag of cement and other discipline.',
  'Stealing will lead to suspension or expulsion as deemed fit.',
  'Failure to attend practical services regularly may lead to loss of the opportunity to graduate with your set that year.',
  'Assignments earn up to 30 marks; irregularity and lateness will reduce your marks.',
];

const emptyServicePost = { station: '', post: '', date: '' };

const initialFormData = {
  // Personal & contact
  fullName: '',
  residentialAddress: '',
  email: '',
  phone: '',
  homeTownAddress: '',
  nationality: '',
  placeOfBirth: '',
  dateOfBirth: '',
  maritalStatus: '',
  spouseName: '',
  spousePhone: '',
  kindOfMarriage: '',
  secularOccupation: '',
  placeOfWork: '',

  // Spiritual data
  isRegenerated: '',
  regenerationExperience: '',
  churchName: '',
  pastorName: '',
  pastorPhone: '',
  roleInChurch: '',
  baptizedInWater: '',
  baptizedByImmersion: '',
  baptizedInHolySpirit: '',
  spiritualGifts: '',
  educationalBackground: '',

  // Ministerial background
  spiritualBackground: '',
  ordinationDate: '',
  servicePosts: [{ ...emptyServicePost }],
  presentStationPost: '',
  recognizedAsPastorOrEvangelist: '',
  currentlyPastoring: '',
  calledToEstablishMinistry: '',
  spouseSupportsMinistry: '',

  // Course of interest
  program: '',

  // Personal data / medical fitness
  currentAddress: '',
  occupation: '',
  illnesses: [] as string[],
  freeFromIllness: false,

  // Sponsorship
  sponsorshipType: '',
  sponsorName: '',
  sponsorAddress: '',

  // Rules & consequences
  agreedToRules: false,
  agreedToConsequences: false,

  // Pastor's Reference (filled by the applicant's pastor, in the same sitting)
  pastorRef: {
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
  },
  pastorMatrix: {} as Record<string, string>,

  // Relative's Reference (filled by a relative/friend/boss, in the same sitting)
  relativeRef: {
    refereeName: '',
    refereeContact: '',
    relationshipDuration: '',
    relationshipDescription: '',
    knownAsChristian: '',
    characterDescription: '',
  },
  relativeMatrix: {} as Record<string, string>,
};

const STEPS = [
  'Personal & Contact Data',
  'Spiritual Data',
  'Ministerial Background',
  'Course of Interest',
  'Medical Fitness',
  'Sponsorship',
  'Rules, Regulations & Consequences',
  "Pastor's Reference",
  'Relative\'s Reference',
];

const inputClass =
  'w-full bg-[#f4f4f0]/50 p-4 text-sm outline-none border border-transparent focus:border-[#775a19] focus:bg-white transition-all';
const labelClass = 'text-[10px] font-bold text-[#775a19] uppercase tracking-widest';

function YesNo({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-3">
      {['Yes', 'No'].map((opt) => (
        <button
          type="button"
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${
            value === opt
              ? 'bg-[#570013] text-white border-[#570013]'
              : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: string, value: any) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const updateServicePost = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const posts = [...prev.servicePosts];
      posts[index] = { ...posts[index], [field]: value };
      return { ...prev, servicePosts: posts };
    });
  };

  const addServicePost = () =>
    setFormData((prev) => ({
      ...prev,
      servicePosts: [...prev.servicePosts, { ...emptyServicePost }],
    }));

  const removeServicePost = (index: number) =>
    setFormData((prev) => ({
      ...prev,
      servicePosts: prev.servicePosts.filter((_, i) => i !== index),
    }));

  const toggleIllness = (illness: string) => {
    setFormData((prev) => {
      const exists = prev.illnesses.includes(illness);
      return {
        ...prev,
        illnesses: exists
          ? prev.illnesses.filter((i) => i !== illness)
          : [...prev.illnesses, illness],
      };
    });
  };

  const updatePastorRef = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, pastorRef: { ...prev.pastorRef, [field]: value } }));

  const updateRelativeRef = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, relativeRef: { ...prev.relativeRef, [field]: value } }));

  const isStepValid = () => {
    switch (step) {
      case 0:
        return !!(formData.fullName && formData.residentialAddress && formData.email && formData.phone);
      case 3:
        return !!formData.program;
      case 5:
        return !!formData.sponsorshipType;
      case 6:
        return formData.agreedToRules && formData.agreedToConsequences;
      case 7:
        return !!(formData.pastorRef.refereeName && formData.pastorRef.refereeContact);
      case 8:
        return !!(formData.relativeRef.refereeName && formData.relativeRef.refereeContact);
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStepValid()) return;
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

        <div className="max-w-2xl w-full mx-6">
          <div className="bg-white/80 backdrop-blur-xl p-12 shadow-2xl border border-[#e0bfbf]/20 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#570013] via-[#775a19] to-[#570013]" />

            <div className="text-center mb-10">
              <span className="text-[10px] font-bold text-[#775a19] uppercase tracking-[0.3em] block mb-4">
                Enrollment 2026
              </span>
              <h1 className="font-serif text-4xl text-[#570013] mb-4">Candidate Application</h1>
              <p className="text-[#584141] opacity-60 text-sm">
                Join our community of scholarly soldiers for Christ.
              </p>
            </div>

            {status === 'SUCCESS' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h2 className="font-serif text-2xl text-[#570013] mb-4">Application Received</h2>
                <p className="text-[#584141] opacity-70 mb-8">
                  Your application, along with your pastor's and relative's references, has been
                  successfully submitted. Our admissions team will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setFormData(initialFormData);
                    setStep(0);
                    setStatus('IDLE');
                  }}
                  className="px-8 py-3 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#800020] transition-colors"
                >
                  Start Another Application
                </button>
              </div>
            ) : (
              <>
                {/* Progress */}
                <div className="mb-10">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#775a19] mb-2">
                    <span>Step {step + 1} of {STEPS.length}</span>
                    <span>{STEPS[step]}</span>
                  </div>
                  <div className="w-full h-1 bg-[#efeeea]">
                    <div
                      className="h-1 bg-[#570013] transition-all"
                      style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'ERROR' && (
                    <div className="p-4 bg-red-50 text-red-600 text-xs flex items-center gap-3 border-l-4 border-red-600">
                      <AlertCircle size={16} />
                      {errorMessage}
                    </div>
                  )}

                  {/* STEP 0: Personal & Contact Data */}
                  {step === 0 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className={labelClass}>Full Name *</label>
                        <input required type="text" value={formData.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="John Doe" className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Residential Address *</label>
                        <input required type="text" value={formData.residentialAddress} onChange={(e) => update('residentialAddress', e.target.value)} placeholder="Street, City, State" className={inputClass} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Email Address *</label>
                          <input required type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="john@example.com" className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Phone Number *</label>
                          <input required type="tel" value={formData.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+234 ..." className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Home Town / State</label>
                          <input type="text" value={formData.homeTownAddress} onChange={(e) => update('homeTownAddress', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Nationality</label>
                          <input type="text" value={formData.nationality} onChange={(e) => update('nationality', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Place of Birth</label>
                          <input type="text" value={formData.placeOfBirth} onChange={(e) => update('placeOfBirth', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Date of Birth</label>
                          <input type="date" value={formData.dateOfBirth} onChange={(e) => update('dateOfBirth', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Marital Status</label>
                        <select value={formData.maritalStatus} onChange={(e) => update('maritalStatus', e.target.value)} className={`${inputClass} appearance-none cursor-pointer`}>
                          <option value="">Select...</option>
                          <option>Single</option>
                          <option>Married</option>
                          <option>Widowed</option>
                          <option>Divorced</option>
                        </select>
                      </div>
                      {formData.maritalStatus === 'Married' && (
                        <div className="space-y-6 border-l-2 border-[#e0bfbf]/30 pl-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className={labelClass}>Name of Spouse</label>
                              <input type="text" value={formData.spouseName} onChange={(e) => update('spouseName', e.target.value)} className={inputClass} />
                            </div>
                            <div className="space-y-2">
                              <label className={labelClass}>Spouse's Phone</label>
                              <input type="tel" value={formData.spousePhone} onChange={(e) => update('spousePhone', e.target.value)} className={inputClass} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className={labelClass}>Kind of Marriage</label>
                            <div className="flex gap-3">
                              {['With dowry', 'Without dowry'].map((opt) => (
                                <button type="button" key={opt} onClick={() => update('kindOfMarriage', opt)} className={`px-5 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${formData.kindOfMarriage === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Secular Occupation</label>
                          <input type="text" value={formData.secularOccupation} onChange={(e) => update('secularOccupation', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Place of Work</label>
                          <input type="text" value={formData.placeOfWork} onChange={(e) => update('placeOfWork', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 1: Spiritual Data */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className={labelClass}>Have you been regenerated (born again)?</label>
                        <YesNo value={formData.isRegenerated} onChange={(v) => update('isRegenerated', v)} />
                      </div>
                      {formData.isRegenerated === 'Yes' && (
                        <div className="space-y-2">
                          <label className={labelClass}>State your experience</label>
                          <textarea value={formData.regenerationExperience} onChange={(e) => update('regenerationExperience', e.target.value)} rows={3} className={inputClass} />
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Name of Your Church</label>
                          <input type="text" value={formData.churchName} onChange={(e) => update('churchName', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Role in the Church</label>
                          <input type="text" value={formData.roleInChurch} onChange={(e) => update('roleInChurch', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Name of Your Pastor</label>
                          <input type="text" value={formData.pastorName} onChange={(e) => update('pastorName', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Pastor's GSM No.</label>
                          <input type="tel" value={formData.pastorPhone} onChange={(e) => update('pastorPhone', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Are you baptized in water?</label>
                        <YesNo value={formData.baptizedInWater} onChange={(v) => update('baptizedInWater', v)} />
                      </div>
                      {formData.baptizedInWater === 'Yes' && (
                        <div className="space-y-2">
                          <label className={labelClass}>By immersion?</label>
                          <YesNo value={formData.baptizedByImmersion} onChange={(v) => update('baptizedByImmersion', v)} />
                        </div>
                      )}
                      <div className="space-y-2">
                        <label className={labelClass}>Are you baptized in the Holy Spirit?</label>
                        <YesNo value={formData.baptizedInHolySpirit} onChange={(v) => update('baptizedInHolySpirit', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Any gifts of the Spirit that flow through you?</label>
                        <textarea value={formData.spiritualGifts} onChange={(e) => update('spiritualGifts', e.target.value)} rows={2} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Educational Background</label>
                        <textarea value={formData.educationalBackground} onChange={(e) => update('educationalBackground', e.target.value)} rows={2} className={inputClass} />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Ministerial Background */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className={labelClass}>What is your spiritual background?</label>
                        <textarea value={formData.spiritualBackground} onChange={(e) => update('spiritualBackground', e.target.value)} rows={3} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Ordination Date (if any)</label>
                        <input type="date" value={formData.ordinationDate} onChange={(e) => update('ordinationDate', e.target.value)} className={inputClass} />
                      </div>

                      <div className="space-y-3">
                        <label className={labelClass}>Your Stations / Service Posts with Date</label>
                        {formData.servicePosts.map((post, i) => (
                          <div key={i} className="grid grid-cols-[1fr_1fr_1fr_auto] gap-2 items-center">
                            <input type="text" placeholder="Station" value={post.station} onChange={(e) => updateServicePost(i, 'station', e.target.value)} className={inputClass} />
                            <input type="text" placeholder="Post" value={post.post} onChange={(e) => updateServicePost(i, 'post', e.target.value)} className={inputClass} />
                            <input type="date" value={post.date} onChange={(e) => updateServicePost(i, 'date', e.target.value)} className={inputClass} />
                            {formData.servicePosts.length > 1 && (
                              <button type="button" onClick={() => removeServicePost(i)} className="p-2 text-[#584141] opacity-50 hover:opacity-100">
                                <X size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                        <button type="button" onClick={addServicePost} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#775a19] hover:text-[#570013]">
                          <Plus size={14} /> Add another post
                        </button>
                      </div>

                      <div className="space-y-2">
                        <label className={labelClass}>Your Present Station and Post Held</label>
                        <input type="text" value={formData.presentStationPost} onChange={(e) => update('presentStationPost', e.target.value)} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Are you recognized as a Pastor or Evangelist?</label>
                        <YesNo value={formData.recognizedAsPastorOrEvangelist} onChange={(v) => update('recognizedAsPastorOrEvangelist', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Are you pastoring a church now?</label>
                        <YesNo value={formData.currentlyPastoring} onChange={(v) => update('currentlyPastoring', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Are you called to establish a ministry?</label>
                        <YesNo value={formData.calledToEstablishMinistry} onChange={(v) => update('calledToEstablishMinistry', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Does your spouse support your mission?</label>
                        <YesNo value={formData.spouseSupportsMinistry} onChange={(v) => update('spouseSupportsMinistry', v)} />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Course of Interest */}
                  {step === 3 && (
                    <div className="space-y-3">
                      <label className={labelClass}>Tick Your Course of Interest *</label>
                      {COURSE_OPTIONS.map((course) => (
                        <button
                          type="button"
                          key={course}
                          onClick={() => update('program', course)}
                          className={`w-full text-left p-4 text-sm border transition-colors ${
                            formData.program === course
                              ? 'bg-[#570013] text-white border-[#570013]'
                              : 'bg-[#f4f4f0]/50 text-[#584141] border-transparent hover:border-[#775a19]'
                          }`}
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* STEP 4: Medical Fitness */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Current Address</label>
                          <input type="text" value={formData.currentAddress} onChange={(e) => update('currentAddress', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Occupation</label>
                          <input type="text" value={formData.occupation} onChange={(e) => update('occupation', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className={labelClass}>Please indicate any of the following illnesses that apply to you</label>
                        <div className="grid grid-cols-2 gap-2">
                          {ILLNESS_OPTIONS.map((illness) => (
                            <label key={illness} className="flex items-center gap-3 p-3 bg-[#f4f4f0]/50 text-sm text-[#584141] cursor-pointer">
                              <input
                                type="checkbox"
                                checked={formData.illnesses.includes(illness)}
                                onChange={() => toggleIllness(illness)}
                                className="accent-[#570013]"
                              />
                              {illness}
                            </label>
                          ))}
                        </div>
                      </div>
                      <label className="flex items-start gap-3 p-4 bg-[#f4f4f0]/50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.freeFromIllness}
                          onChange={(e) => update('freeFromIllness', e.target.checked)}
                          className="mt-0.5 accent-[#570013]"
                        />
                        <span className="text-xs text-[#584141]">
                          I declare that, apart from what I have indicated above, I am free from any of the listed conditions.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* STEP 5: Sponsorship */}
                  {step === 5 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className={labelClass}>Sponsorship *</label>
                        <div className="flex gap-3">
                          {[
                            { key: 'SELF', label: 'I will sponsor myself' },
                            { key: 'SPONSORED', label: 'I have a sponsor' },
                          ].map((opt) => (
                            <button
                              type="button"
                              key={opt.key}
                              onClick={() => update('sponsorshipType', opt.key)}
                              className={`flex-1 p-4 text-xs font-bold uppercase tracking-widest border transition-colors ${
                                formData.sponsorshipType === opt.key
                                  ? 'bg-[#570013] text-white border-[#570013]'
                                  : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      {formData.sponsorshipType === 'SPONSORED' && (
                        <div className="space-y-6 border-l-2 border-[#e0bfbf]/30 pl-6">
                          <div className="space-y-2">
                            <label className={labelClass}>Name of Your Sponsor</label>
                            <input type="text" value={formData.sponsorName} onChange={(e) => update('sponsorName', e.target.value)} className={inputClass} />
                          </div>
                          <div className="space-y-2">
                            <label className={labelClass}>Sponsor's Address</label>
                            <input type="text" value={formData.sponsorAddress} onChange={(e) => update('sponsorAddress', e.target.value)} className={inputClass} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* STEP 6: Rules, Regulations & Consequences */}
                  {step === 6 && (
                    <div className="space-y-6">
                      <div className="max-h-48 overflow-y-auto p-4 bg-[#f4f4f0]/50 text-xs text-[#584141] space-y-2">
                        <p className="font-bold text-[#775a19] uppercase tracking-widest text-[10px] mb-2">Rules and Regulations</p>
                        <ol className="list-decimal list-inside space-y-1">
                          {RULES.map((rule, i) => <li key={i}>{rule}</li>)}
                        </ol>
                      </div>
                      <label className="flex items-start gap-3 p-4 bg-white border border-[#e0bfbf]/30 cursor-pointer">
                        <input type="checkbox" checked={formData.agreedToRules} onChange={(e) => update('agreedToRules', e.target.checked)} className="mt-0.5 accent-[#570013]" />
                        <span className="text-xs text-[#584141]">
                          I hereby accept to abide by the above rules and regulations, may God help me in Jesus' name.
                        </span>
                      </label>

                      <div className="max-h-48 overflow-y-auto p-4 bg-[#f4f4f0]/50 text-xs text-[#584141] space-y-2">
                        <p className="font-bold text-[#775a19] uppercase tracking-widest text-[10px] mb-2">Consequences for Breaking Any of the Rules</p>
                        <ol className="list-decimal list-inside space-y-1">
                          {CONSEQUENCES.map((c, i) => <li key={i}>{c}</li>)}
                        </ol>
                      </div>
                      <label className="flex items-start gap-3 p-4 bg-white border border-[#e0bfbf]/30 cursor-pointer">
                        <input type="checkbox" checked={formData.agreedToConsequences} onChange={(e) => update('agreedToConsequences', e.target.checked)} className="mt-0.5 accent-[#570013]" />
                        <span className="text-xs text-[#584141]">
                          I am ready to face the consequences for breaking any of the above rules if I do.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* STEP 7: Pastor's Reference */}
                  {step === 7 && (
                    <div className="space-y-6">
                      <p className="text-xs text-[#584141] opacity-70 -mt-2">
                        To be completed by the applicant's pastor. The applicant waives their right
                        to review this reference — please answer candidly.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Pastor's Name *</label>
                          <input required type="text" value={formData.pastorRef.refereeName} onChange={(e) => updatePastorRef('refereeName', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Pastor's Phone / Email *</label>
                          <input required type="text" value={formData.pastorRef.refereeContact} onChange={(e) => updatePastorRef('refereeContact', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Years Known</label>
                          <input type="number" min="0" value={formData.pastorRef.yearsKnown} onChange={(e) => updatePastorRef('yearsKnown', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Months Known</label>
                          <input type="number" min="0" max="11" value={formData.pastorRef.monthsKnown} onChange={(e) => updatePastorRef('monthsKnown', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>How well do you know him/her?</label>
                        <div className="flex gap-3">
                          {['Casually', 'Fairly well', 'Very well'].map((opt) => (
                            <button type="button" key={opt} onClick={() => updatePastorRef('familiarityLevel', opt)} className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border transition-colors ${formData.pastorRef.familiarityLevel === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Is the applicant genuinely born again?</label>
                        <YesNo value={formData.pastorRef.isGenuinelyBornAgain} onChange={(v) => updatePastorRef('isGenuinelyBornAgain', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Has he/she been baptized in water by immersion?</label>
                        <YesNo value={formData.pastorRef.isBaptizedInWater} onChange={(v) => updatePastorRef('isBaptizedInWater', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Has he/she been baptized in the Holy Spirit with evidence of speaking in tongues?</label>
                        <YesNo value={formData.pastorRef.isBaptizedInHolySpirit} onChange={(v) => updatePastorRef('isBaptizedInHolySpirit', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Which describes this applicant's Christian experience?</label>
                        <div className="flex flex-wrap gap-2">
                          {['Profound', 'Contagious', 'Superficial', 'Genuine and growing', 'Over-emotional'].map((opt) => (
                            <button type="button" key={opt} onClick={() => updatePastorRef('christianExperience', opt)} className={`px-4 py-2 text-xs font-bold border transition-colors ${formData.pastorRef.christianExperience === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Do you consider the applicant ready for ministerial training?</label>
                        <div className="flex flex-wrap gap-2">
                          {['Unhesitatingly', 'With hesitation', 'Perhaps at last time', 'No'].map((opt) => (
                            <button type="button" key={opt} onClick={() => updatePastorRef('readyForTraining', opt)} className={`px-4 py-2 text-xs font-bold border transition-colors ${formData.pastorRef.readyForTraining === opt ? 'bg-[#570013] text-white border-[#570013]' : 'bg-white text-[#584141] border-[#e0bfbf]/40 hover:border-[#775a19]'}`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Is he/she active in church work or ministerial duty? Please explain.</label>
                        <textarea value={formData.pastorRef.activeInChurchWork} onChange={(e) => updatePastorRef('activeInChurchWork', e.target.value)} rows={2} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Family life: is his/her marital life with dowry and Godly approached?</label>
                        <textarea value={formData.pastorRef.maritalLifeComment} onChange={(e) => updatePastorRef('maritalLifeComment', e.target.value)} rows={2} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Comment briefly on his/her social background</label>
                        <textarea value={formData.pastorRef.socialBackgroundComment} onChange={(e) => updatePastorRef('socialBackgroundComment', e.target.value)} rows={2} className={inputClass} />
                      </div>
                      <div className="space-y-3 pt-4 border-t border-[#e0bfbf]/20">
                        <label className={labelClass}>Personal Knowledge Matrix on the Applicant</label>
                        <KnowledgeMatrix
                          value={formData.pastorMatrix}
                          onChange={(trait, rating) => update('pastorMatrix', { ...formData.pastorMatrix, [trait]: rating })}
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 8: Relative's Reference */}
                  {step === 8 && (
                    <div className="space-y-6">
                      <p className="text-xs text-[#584141] opacity-70 -mt-2">
                        To be completed by a relative, friend, or employer of the applicant.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className={labelClass}>Their Name *</label>
                          <input required type="text" value={formData.relativeRef.refereeName} onChange={(e) => updateRelativeRef('refereeName', e.target.value)} className={inputClass} />
                        </div>
                        <div className="space-y-2">
                          <label className={labelClass}>Their Phone / Email *</label>
                          <input required type="text" value={formData.relativeRef.refereeContact} onChange={(e) => updateRelativeRef('refereeContact', e.target.value)} className={inputClass} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>How long have you known the applicant?</label>
                        <input type="text" placeholder="e.g. 5 years" value={formData.relativeRef.relationshipDuration} onChange={(e) => updateRelativeRef('relationshipDuration', e.target.value)} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>How is he/she related to you?</label>
                        <input type="text" placeholder="e.g. Sister, Employer, Friend" value={formData.relativeRef.relationshipDescription} onChange={(e) => updateRelativeRef('relationshipDescription', e.target.value)} className={inputClass} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Do you know him/her as a Christian?</label>
                        <YesNo value={formData.relativeRef.knownAsChristian} onChange={(v) => updateRelativeRef('knownAsChristian', v)} />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClass}>Can you explain briefly his/her character?</label>
                        <textarea value={formData.relativeRef.characterDescription} onChange={(e) => updateRelativeRef('characterDescription', e.target.value)} rows={3} className={inputClass} />
                      </div>
                      <div className="space-y-3 pt-4 border-t border-[#e0bfbf]/20">
                        <label className={labelClass}>Personal Knowledge Matrix on the Applicant</label>
                        <KnowledgeMatrix
                          value={formData.relativeMatrix}
                          onChange={(trait, rating) => update('relativeMatrix', { ...formData.relativeMatrix, [trait]: rating })}
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between pt-6">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-[#e0bfbf]/40 text-[#584141] font-bold text-[10px] uppercase tracking-widest hover:bg-[#efeeea] transition-colors"
                      >
                        <ChevronLeft size={14} /> Back
                      </button>
                    ) : <span />}

                    {step < STEPS.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!isStepValid()}
                        className="flex items-center gap-2 px-8 py-3 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#800020] transition-all disabled:opacity-40"
                      >
                        Next <ChevronRight size={14} />
                      </button>
                    ) : (
                      <button
                        disabled={status === 'LOADING' || !isStepValid()}
                        className="flex items-center gap-2 px-8 py-3 bg-[#570013] text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#800020] transition-all disabled:opacity-40"
                      >
                        {status === 'LOADING' ? 'Submitting...' : <>Submit Application <Send size={14} /></>}
                      </button>
                    )}
                  </div>
                </form>
              </>
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
