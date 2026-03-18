"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Search, Users, MapPin, Mail } from "lucide-react";

interface Researcher { id: string; name: string; affiliation: string; location: string; interests: string[]; lookingFor: string[]; avatar: string; papers: number; }

const researchers: Researcher[] = [
  { id: "r1", name: "Dr. Alice Zhang", affiliation: "MIT CSAIL", location: "Cambridge, MA", interests: ["Alignment", "Reward Modeling", "RLHF"], lookingFor: ["Co-authors for alignment paper", "PhD students"], avatar: "AZ", papers: 45 },
  { id: "r2", name: "Dr. Marcus Rivera", affiliation: "DeepMind Safety", location: "London, UK", interests: ["Interpretability", "Mechanistic Interpretability"], lookingFor: ["Research collaborators", "Visiting researchers"], avatar: "MR", papers: 38 },
  { id: "r3", name: "Prof. Yuki Tanaka", affiliation: "University of Tokyo", location: "Tokyo, Japan", interests: ["Robustness", "Adversarial ML", "Formal Verification"], lookingFor: ["International collaboration", "Workshop co-organizers"], avatar: "YT", papers: 62 },
  { id: "r4", name: "Dr. Sarah Okonkwo", affiliation: "DAIR Institute", location: "San Francisco, CA", interests: ["AI Ethics", "Fairness", "Participatory AI"], lookingFor: ["Field study partners", "Policy collaborators"], avatar: "SO", papers: 28 },
  { id: "r5", name: "Dr. James Chen", affiliation: "Anthropic", location: "San Francisco, CA", interests: ["Constitutional AI", "Scalable Oversight", "Red Teaming"], lookingFor: ["External red team participants", "Academic partnerships"], avatar: "JC", papers: 35 },
  { id: "r6", name: "Prof. Elena Voronova", affiliation: "ETH Zurich", location: "Zurich, Switzerland", interests: ["Governance", "International Policy", "Risk Assessment"], lookingFor: ["Policy researchers", "Cross-disciplinary projects"], avatar: "EV", papers: 55 },
];

export default function Collaborate() {
  const [search, setSearch] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");

  const allInterests = [...new Set(researchers.flatMap((r) => r.interests))];
  const filtered = researchers.filter((r) => {
    if (filterInterest !== "all" && !r.interests.includes(filterInterest)) return false;
    if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Collaboration Finder</h1>
          <p className="text-gray-400 mt-1">Find researchers to collaborate with on AI safety problems</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1"><Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search researchers..." className="input-field w-full pl-10" /></div>
          <select value={filterInterest} onChange={(e) => setFilterInterest(e.target.value)} className="input-field">
            <option value="all">All Interests</option>
            {allInterests.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filtered.map((r) => (
            <div key={r.id} className="card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold">{r.avatar}</div>
                <div>
                  <h3 className="text-sm font-bold text-white">{r.name}</h3>
                  <p className="text-xs text-gray-400">{r.affiliation}</p>
                  <div className="flex items-center gap-1 mt-1"><MapPin className="w-3 h-3 text-gray-600" /><span className="text-xs text-gray-500">{r.location}</span></div>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-bold text-white">{r.papers}</p>
                  <p className="text-xs text-gray-500">papers</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Research Interests</p>
                <div className="flex flex-wrap gap-1">{r.interests.map((i) => <span key={i} className="badge-pink">{i}</span>)}</div>
              </div>
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Looking For</p>
                <div className="flex flex-wrap gap-1">{r.lookingFor.map((l) => <span key={l} className="badge-blue">{l}</span>)}</div>
              </div>
              <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm"><Mail className="w-3 h-3" /> Connect</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
