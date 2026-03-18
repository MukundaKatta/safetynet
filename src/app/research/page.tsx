"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Search, ExternalLink, BookOpen } from "lucide-react";

interface Paper { id: string; title: string; authors: string; abstract: string; venue: string; date: string; area: string; citations: number; url: string; }

const papers: Paper[] = [
  { id: "p1", title: "Scalable Oversight of Superhuman AI Systems", authors: "Chen, Li, Park, Johnson", abstract: "We propose a novel approach to maintaining meaningful human oversight of AI systems that exceed human capabilities in specific domains. Our method combines recursive reward modeling with debate-based verification.", venue: "NeurIPS 2025", date: "2026-03-14", area: "Alignment", citations: 45, url: "#" },
  { id: "p2", title: "Mechanistic Interpretability at Scale: Understanding Transformer Circuits", authors: "Patel, Kim, Li, Zhang", abstract: "This work extends mechanistic interpretability techniques to models with over 100B parameters, identifying key circuits responsible for safety-relevant behaviors.", venue: "ICML 2026", date: "2026-03-12", area: "Interpretability", citations: 32, url: "#" },
  { id: "p3", title: "Adversarial Robustness of Large Language Models: A Comprehensive Survey", authors: "Garcia, Brown, Wilson", abstract: "A systematic survey of adversarial attacks and defenses for LLMs, covering prompt injection, jailbreaking, and data poisoning with taxonomy and benchmarks.", venue: "ACM Computing Surveys", date: "2026-03-10", area: "Robustness", citations: 78, url: "#" },
  { id: "p4", title: "Democratic AI Governance: Mechanisms for Inclusive Decision-Making", authors: "Okafor, Muller, Tanaka", abstract: "We present governance mechanisms that enable broad stakeholder participation in AI policy decisions, drawing on deliberative democracy principles.", venue: "FAccT 2026", date: "2026-03-08", area: "Governance", citations: 19, url: "#" },
  { id: "p5", title: "Evaluating Dangerous Capabilities in Frontier AI Models", authors: "Smith, Lee, Patel, Chen", abstract: "A framework and benchmark suite for evaluating potentially dangerous capabilities in frontier AI models, including cyber, bio, and autonomous action capabilities.", venue: "AAAI 2026", date: "2026-03-05", area: "Evaluation", citations: 56, url: "#" },
  { id: "p6", title: "Constitutional AI v2: Improved Harmlessness Through Scalable Feedback", authors: "Anthropic Research Team", abstract: "An updated approach to constitutional AI with improved scalability, covering more harm categories and achieving better harmlessness-helpfulness tradeoffs.", venue: "arXiv", date: "2026-03-01", area: "Alignment", citations: 120, url: "#" },
];

const areas = [...new Set(papers.map((p) => p.area))];

export default function Research() {
  const [search, setSearch] = useState("");
  const [filterArea, setFilterArea] = useState("all");
  const [selected, setSelected] = useState<string>(papers[0].id);

  const filtered = papers.filter((p) => {
    if (filterArea !== "all" && p.area !== filterArea) return false;
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.authors.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const paper = papers.find((p) => p.id === selected)!;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Research Hub</h1>
          <p className="text-gray-400 mt-1">AI safety research papers and publications</p>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1"><Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search papers..." className="input-field w-full pl-10" /></div>
          <select value={filterArea} onChange={(e) => setFilterArea(e.target.value)} className="input-field">
            <option value="all">All Areas</option>
            {areas.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-2">
            {filtered.map((p) => (
              <button key={p.id} onClick={() => setSelected(p.id)}
                className={`w-full text-left p-4 rounded-xl border transition-colors ${p.id === selected ? "bg-pink-600/20 border-pink-500/50" : "bg-gray-900 border-gray-800 hover:border-gray-700"}`}>
                <p className="text-sm font-medium text-white line-clamp-2">{p.title}</p>
                <p className="text-xs text-gray-500 mt-1">{p.authors}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge-pink">{p.area}</span>
                  <span className="text-xs text-gray-600">{p.citations} citations</span>
                </div>
              </button>
            ))}
          </div>

          <div className="col-span-2 space-y-6">
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-2">{paper.title}</h2>
              <p className="text-sm text-gray-400 mb-2">{paper.authors}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="badge-pink">{paper.area}</span>
                <span className="badge-blue">{paper.venue}</span>
                <span className="text-xs text-gray-500">{paper.date}</span>
                <span className="text-xs text-gray-500">{paper.citations} citations</span>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Abstract</h3>
                <p className="text-sm text-gray-300">{paper.abstract}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="btn-primary flex items-center gap-2"><ExternalLink className="w-4 h-4" /> Read Paper</button>
                <button className="btn-secondary">Save to Library</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
