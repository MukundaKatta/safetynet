"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ChevronDown, ChevronRight } from "lucide-react";

interface ProblemNode { id: string; name: string; description: string; openProblems: number; children?: ProblemNode[]; }

const taxonomy: ProblemNode[] = [
  { id: "align", name: "Alignment", description: "Ensuring AI systems pursue intended goals", openProblems: 24, children: [
    { id: "a1", name: "Reward Modeling", description: "Learning human preferences accurately", openProblems: 8, children: [
      { id: "a1a", name: "Reward Hacking", description: "Preventing gaming of reward signals", openProblems: 3 },
      { id: "a1b", name: "Preference Aggregation", description: "Combining diverse human preferences", openProblems: 2 },
    ] },
    { id: "a2", name: "Scalable Oversight", description: "Maintaining oversight of superhuman systems", openProblems: 6 },
    { id: "a3", name: "Goal Specification", description: "Precisely specifying intended behavior", openProblems: 5 },
    { id: "a4", name: "Corrigibility", description: "Ensuring systems remain correctable", openProblems: 5 },
  ] },
  { id: "interp", name: "Interpretability", description: "Understanding how AI systems work", openProblems: 18, children: [
    { id: "i1", name: "Mechanistic Interpretability", description: "Understanding internal computations", openProblems: 8 },
    { id: "i2", name: "Feature Visualization", description: "Visualizing learned representations", openProblems: 4 },
    { id: "i3", name: "Concept-Based Explanations", description: "High-level behavioral explanations", openProblems: 6 },
  ] },
  { id: "robust", name: "Robustness", description: "Reliable behavior under distribution shift", openProblems: 15, children: [
    { id: "r1", name: "Adversarial Robustness", description: "Resistance to adversarial inputs", openProblems: 6 },
    { id: "r2", name: "Distribution Shift", description: "Handling novel situations", openProblems: 5 },
    { id: "r3", name: "Calibration", description: "Accurate uncertainty estimation", openProblems: 4 },
  ] },
  { id: "gov", name: "Governance", description: "Policy and institutional frameworks", openProblems: 12, children: [
    { id: "g1", name: "Regulation Design", description: "Effective AI regulation approaches", openProblems: 4 },
    { id: "g2", name: "International Coordination", description: "Global AI governance cooperation", openProblems: 5 },
    { id: "g3", name: "Democratic Input", description: "Public participation in AI decisions", openProblems: 3 },
  ] },
  { id: "eval", name: "Evaluation", description: "Measuring AI safety and capabilities", openProblems: 10 },
  { id: "ethics", name: "Ethics", description: "Moral and philosophical considerations", openProblems: 8 },
];

function TaxNode({ node, depth = 0 }: { node: ProblemNode; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 1);
  const has = node.children && node.children.length > 0;
  return (
    <div className={depth > 0 ? "ml-6 border-l border-gray-800 pl-4" : ""}>
      <div className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors ${depth === 0 ? "bg-gray-900 border border-gray-800 mb-2" : "mb-1"}`}
        onClick={() => setExpanded(!expanded)}>
        {has ? (expanded ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />) : <div className="w-4" />}
        <div className="flex-1">
          <span className={`font-medium ${depth === 0 ? "text-white text-base" : "text-gray-200 text-sm"}`}>{node.name}</span>
          <p className="text-xs text-gray-500">{node.description}</p>
        </div>
        <span className="badge-pink">{node.openProblems} open</span>
      </div>
      {expanded && has && node.children!.map((c) => <TaxNode key={c.id} node={c} depth={depth + 1} />)}
    </div>
  );
}

export default function Taxonomy() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Problem Taxonomy</h1>
          <p className="text-gray-400 mt-1">Hierarchical map of AI safety research problems</p>
        </div>
        <div className="grid grid-cols-6 gap-3 mb-8">
          {taxonomy.map((t) => (
            <div key={t.id} className="card text-center">
              <p className="text-lg font-bold text-white">{t.openProblems}</p>
              <p className="text-xs text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">{taxonomy.map((n) => <TaxNode key={n.id} node={n} />)}</div>
      </main>
    </div>
  );
}
