"use client";

import Sidebar from "@/components/Sidebar";
import { Network, BookOpen, Users, DollarSign, Briefcase, TrendingUp } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const publicationTrend = [
  { year: "2020", papers: 120 }, { year: "2021", papers: 180 }, { year: "2022", papers: 310 },
  { year: "2023", papers: 520 }, { year: "2024", papers: 780 }, { year: "2025", papers: 1050 },
];

const researchAreas = [
  { area: "Alignment", papers: 280, color: "#ec4899" },
  { area: "Interpretability", papers: 210, color: "#8b5cf6" },
  { area: "Robustness", papers: 180, color: "#3b82f6" },
  { area: "Governance", papers: 150, color: "#22c55e" },
  { area: "Evaluation", papers: 130, color: "#f97316" },
  { area: "Ethics", papers: 100, color: "#eab308" },
];

const recentPapers = [
  { title: "Scalable Oversight of Superhuman AI Systems", authors: "Chen et al.", venue: "NeurIPS 2025", date: "2026-03-14", area: "Alignment" },
  { title: "Mechanistic Interpretability at Scale", authors: "Patel, Kim, Li", venue: "ICML 2026", date: "2026-03-12", area: "Interpretability" },
  { title: "Red Teaming Language Models with Language Models", authors: "Smith et al.", venue: "arXiv", date: "2026-03-10", area: "Evaluation" },
  { title: "Constitutional AI: Harmlessness from AI Feedback v2", authors: "Anthropic Research", venue: "arXiv", date: "2026-03-08", area: "Alignment" },
  { title: "Toward Auditable AI Systems: A Governance Framework", authors: "Garcia, Zhang", venue: "FAccT 2026", date: "2026-03-05", area: "Governance" },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">AI Safety Research Community</h1>
          <p className="text-gray-400 mt-1">Connecting researchers, tracking progress, advancing the field</p>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="card"><BookOpen className="w-5 h-5 text-pink-400 mb-2" /><p className="text-2xl font-bold text-white">1,050</p><p className="text-sm text-gray-400">Papers in 2025</p></div>
          <div className="card"><Users className="w-5 h-5 text-pink-400 mb-2" /><p className="text-2xl font-bold text-white">2,340</p><p className="text-sm text-gray-400">Researchers</p></div>
          <div className="card"><DollarSign className="w-5 h-5 text-pink-400 mb-2" /><p className="text-2xl font-bold text-white">$480M</p><p className="text-sm text-gray-400">Active Grants</p></div>
          <div className="card"><Briefcase className="w-5 h-5 text-pink-400 mb-2" /><p className="text-2xl font-bold text-white">156</p><p className="text-sm text-gray-400">Open Positions</p></div>
          <div className="card"><Network className="w-5 h-5 text-pink-400 mb-2" /><p className="text-2xl font-bold text-white">42</p><p className="text-sm text-gray-400">Reading Groups</p></div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Publication Growth</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={publicationTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="papers" stroke="#ec4899" strokeWidth={2} dot={{ fill: "#ec4899" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Research Areas</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={researchAreas} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis type="category" dataKey="area" stroke="#9ca3af" width={100} />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
                <Bar dataKey="papers" radius={[0, 4, 4, 0]}>
                  {researchAreas.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Papers</h3>
          <div className="space-y-3">
            {recentPapers.map((paper, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <div>
                  <p className="text-sm text-white">{paper.title}</p>
                  <p className="text-xs text-gray-500">{paper.authors} &middot; {paper.venue}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="badge-pink">{paper.area}</span>
                  <span className="text-xs text-gray-500">{paper.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
