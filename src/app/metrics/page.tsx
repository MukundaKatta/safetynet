"use client";

import Sidebar from "@/components/Sidebar";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, PieChart, Pie, Cell } from "recharts";

const publicationGrowth = [
  { year: "2018", papers: 45 }, { year: "2019", papers: 82 }, { year: "2020", papers: 120 },
  { year: "2021", papers: 180 }, { year: "2022", papers: 310 }, { year: "2023", papers: 520 },
  { year: "2024", papers: 780 }, { year: "2025", papers: 1050 },
];

const fundingByArea = [
  { area: "Alignment", amount: 180 },
  { area: "Interpretability", amount: 95 },
  { area: "Governance", amount: 75 },
  { area: "Robustness", amount: 60 },
  { area: "Evaluation", amount: 45 },
  { area: "Ethics", amount: 25 },
];

const researcherGrowth = [
  { year: "2020", researchers: 350 }, { year: "2021", researchers: 520 },
  { year: "2022", researchers: 850 }, { year: "2023", researchers: 1200 },
  { year: "2024", researchers: 1700 }, { year: "2025", researchers: 2340 },
];

const orgDistribution = [
  { name: "Academic", value: 45, color: "#ec4899" },
  { name: "Industry Labs", value: 30, color: "#8b5cf6" },
  { name: "Nonprofits", value: 15, color: "#3b82f6" },
  { name: "Government", value: 10, color: "#22c55e" },
];

const keyMetrics = [
  { label: "Total Publications (All Time)", value: "3,087" },
  { label: "Active Researchers", value: "2,340" },
  { label: "Research Organizations", value: "185" },
  { label: "Total Funding (2025)", value: "$480M" },
  { label: "PhD Students in Safety", value: "420" },
  { label: "Countries with Safety Research", value: "38" },
];

export default function FieldMetrics() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Field Metrics</h1>
          <p className="text-gray-400 mt-1">State of AI safety research field</p>
        </div>

        <div className="grid grid-cols-6 gap-3 mb-8">
          {keyMetrics.map((m) => (
            <div key={m.label} className="card text-center">
              <p className="text-lg font-bold text-white">{m.value}</p>
              <p className="text-xs text-gray-500">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Publication Growth</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={publicationGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="papers" stroke="#ec4899" strokeWidth={2} dot={{ fill: "#ec4899" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Researcher Growth</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={researcherGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
                <Line type="monotone" dataKey="researchers" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Funding by Research Area ($M)</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={fundingByArea}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="area" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #374151", borderRadius: "8px" }} />
                <Bar dataKey="amount" fill="#ec4899" radius={[4, 4, 0, 0]} name="Funding ($M)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4">Organization Types</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={orgDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={100} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                  {orgDistribution.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
