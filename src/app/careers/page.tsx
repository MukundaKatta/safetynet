"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Search, Briefcase, MapPin, ExternalLink } from "lucide-react";

const jobs = [
  { id: "j1", title: "Research Scientist - AI Safety", company: "Anthropic", location: "San Francisco, CA", type: "Full-time", level: "Senior", salary: "$300K-$500K", areas: ["Alignment", "Interpretability"], posted: "2026-03-15" },
  { id: "j2", title: "AI Safety Researcher", company: "DeepMind", location: "London, UK", type: "Full-time", level: "Mid-Senior", salary: "Competitive", areas: ["Alignment", "Robustness"], posted: "2026-03-14" },
  { id: "j3", title: "Machine Learning Engineer - Safety", company: "OpenAI", location: "San Francisco, CA", type: "Full-time", level: "Senior", salary: "$350K-$600K", areas: ["Evaluation", "Red Teaming"], posted: "2026-03-12" },
  { id: "j4", title: "AI Governance Researcher", company: "GovAI (Oxford)", location: "Oxford, UK", type: "Full-time", level: "Post-Doc", salary: "$85K", areas: ["Governance", "Policy"], posted: "2026-03-10" },
  { id: "j5", title: "PhD Student - Mechanistic Interpretability", company: "MIT CSAIL", location: "Cambridge, MA", type: "PhD", level: "Entry", salary: "Stipend", areas: ["Interpretability"], posted: "2026-03-08" },
  { id: "j6", title: "AI Safety Engineer", company: "Google DeepMind", location: "Mountain View, CA", type: "Full-time", level: "Mid", salary: "$250K-$400K", areas: ["Robustness", "Evaluation"], posted: "2026-03-05" },
  { id: "j7", title: "Technical AI Policy Advisor", company: "UK AI Safety Institute", location: "London, UK", type: "Full-time", level: "Senior", salary: "$120K", areas: ["Governance", "Evaluation"], posted: "2026-03-03" },
  { id: "j8", title: "Research Intern - AI Alignment", company: "Redwood Research", location: "Remote", type: "Internship", level: "Entry", salary: "Stipend", areas: ["Alignment"], posted: "2026-03-01" },
];

const typeColors: Record<string, string> = { "Full-time": "badge-green", PhD: "badge-blue", Internship: "badge-yellow" };

export default function Careers() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const types = [...new Set(jobs.map((j) => j.type))];

  const filtered = jobs.filter((j) => {
    if (filterType !== "all" && j.type !== filterType) return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Career Board</h1>
          <p className="text-gray-400 mt-1">AI safety jobs, internships, and PhD positions</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1"><Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search jobs..." className="input-field w-full pl-10" /></div>
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="input-field">
            <option value="all">All Types</option>
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="space-y-3">
          {filtered.map((job) => (
            <div key={job.id} className="card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Briefcase className="w-8 h-8 text-pink-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">{job.title}</h3>
                  <p className="text-xs text-gray-400">{job.company}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-gray-600" /><span className="text-xs text-gray-500">{job.location}</span></div>
                    <span className={typeColors[job.type]}>{job.type}</span>
                    <span className="text-xs text-gray-500">{job.level}</span>
                    <span className="text-xs text-gray-500">{job.salary}</span>
                  </div>
                  <div className="flex gap-1 mt-1">{job.areas.map((a) => <span key={a} className="badge-pink">{a}</span>)}</div>
                </div>
              </div>
              <div className="text-right">
                <button className="btn-primary text-sm flex items-center gap-1"><ExternalLink className="w-3 h-3" /> Apply</button>
                <p className="text-xs text-gray-600 mt-2">{job.posted}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
