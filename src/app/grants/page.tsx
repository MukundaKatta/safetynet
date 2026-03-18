"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { DollarSign, Search, Clock, ExternalLink } from "lucide-react";

const grants = [
  { id: "g1", title: "Alignment Research Grants", funder: "Open Philanthropy", amount: "$5M", deadline: "2026-06-01", areas: ["Alignment", "Interpretability"], status: "open", description: "Funding for technical alignment research, including reward modeling, scalable oversight, and interpretability." },
  { id: "g2", title: "AI Safety Research Program", funder: "Long-Term Future Fund", amount: "$2M", deadline: "2026-05-15", areas: ["Alignment", "Governance"], status: "open", description: "Grants for individual researchers working on reducing existential risk from AI." },
  { id: "g3", title: "Responsible AI Grants", funder: "NSF", amount: "$10M", deadline: "2026-04-30", areas: ["Ethics", "Fairness", "Robustness"], status: "open", description: "Federal funding for responsible AI research including fairness, transparency, and robustness." },
  { id: "g4", title: "AI Governance Research Fund", funder: "GovAI (Oxford)", amount: "$3M", deadline: "2026-07-01", areas: ["Governance", "Policy"], status: "open", description: "Research on AI governance, international coordination, and regulatory frameworks." },
  { id: "g5", title: "Frontier Safety Research", funder: "Anthropic", amount: "$1M", deadline: "2026-04-15", areas: ["Alignment", "Evaluation"], status: "closing_soon", description: "Grants for external researchers working on frontier model safety evaluation and red teaming." },
  { id: "g6", title: "AI Safety Fellowship 2026", funder: "MIRI", amount: "$200K/year", deadline: "Closed", areas: ["Alignment", "Decision Theory"], status: "closed", description: "One-year fellowships for promising AI safety researchers." },
];

const statusColors: Record<string, string> = { open: "badge-green", closing_soon: "badge-yellow", closed: "badge-red" };

export default function Grants() {
  const [search, setSearch] = useState("");
  const filtered = grants.filter((g) => !search || g.title.toLowerCase().includes(search.toLowerCase()) || g.funder.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Grant Tracker</h1>
          <p className="text-gray-400 mt-1">AI safety research funding opportunities</p>
        </div>

        <div className="mb-6">
          <div className="relative max-w-md"><Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search grants..." className="input-field w-full pl-10" /></div>
        </div>

        <div className="space-y-4">
          {filtered.map((grant) => (
            <div key={grant.id} className="card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-pink-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white">{grant.title}</h3>
                    <p className="text-xs text-gray-500">{grant.funder}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-pink-400">{grant.amount}</span>
                  <span className={statusColors[grant.status]}>{grant.status.replace("_", " ")}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">{grant.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {grant.areas.map((a) => <span key={a} className="badge-pink">{a}</span>)}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" /> Deadline: {grant.deadline}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
