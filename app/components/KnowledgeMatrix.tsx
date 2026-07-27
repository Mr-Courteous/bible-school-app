"use client";

import React from 'react';

export const MATRIX_TRAITS = [
  'Reliable',
  'Mental Alertness',
  'Cooperation',
  'Christian Service',
  'Disposition',
  'Health',
  'Initiative',
  'Personal Appearance',
  'Social Adaptability',
  'Concern for Others',
  'Leadership Ability',
  'Emotional Stability',
  'Financial Stability',
  'Ability to Follow',
  'Judgement',
  'Family Relationship',
  'Personal Discipline',
  'Department (Conduct)',
  'Ability to Accept Correction',
  'Spiritual Experience',
  'Reputation with Non-Christians',
  'Teachableness',
  'Attitude Towards Rules',
  'Respect for Authority',
  'Relationship to Opposite Sex',
];

export const MATRIX_RATINGS = [
  'Superior',
  'Above Average',
  'Average',
  'B/A',
  'Inferior / No opportunity to assess',
];

export function KnowledgeMatrix({
  value,
  onChange,
}: {
  value: Record<string, string>;
  onChange: (trait: string, rating: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="border-b border-[#e0bfbf]/30">
            <th className="text-left py-2 pr-2 text-[#775a19] font-bold uppercase tracking-widest text-[9px]">Area</th>
            {MATRIX_RATINGS.map((r) => (
              <th key={r} className="text-center py-2 px-1 text-[#775a19] font-bold uppercase tracking-widest text-[9px]">
                {r}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MATRIX_TRAITS.map((trait) => (
            <tr key={trait} className="border-b border-[#e0bfbf]/10">
              <td className="py-2 pr-2 text-[#584141]">{trait}</td>
              {MATRIX_RATINGS.map((rating) => (
                <td key={rating} className="text-center py-2 px-1">
                  <input
                    type="radio"
                    name={trait}
                    checked={value[trait] === rating}
                    onChange={() => onChange(trait, rating)}
                    className="accent-[#570013] cursor-pointer"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
