"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { BookMarked, Users, Calendar, Plus } from "lucide-react";

const groups = [
  { id: "rg1", name: "Alignment Forum Weekly", topic: "Alignment", members: 45, schedule: "Wednesdays 6pm ET", nextPaper: "Weak-to-Strong Generalization (Burns et al.)", location: "Online (Zoom)", description: "Weekly discussion of latest alignment research papers." },
  { id: "rg2", name: "Interpretability Reading Group", topic: "Interpretability", members: 32, schedule: "Tuesdays 2pm PT", nextPaper: "Scaling Monosemanticity (Anthropic)", location: "Online (Discord)", description: "Deep dives into mechanistic interpretability papers." },
  { id: "rg3", name: "AI Governance Journal Club", topic: "Governance", members: 28, schedule: "Thursdays 10am GMT", nextPaper: "Regulatory Sandboxes for AI (Ranchordas)", location: "Oxford + Online", description: "Discussion of AI governance and policy papers." },
  { id: "rg4", name: "Bay Area AI Safety", topic: "General Safety", members: 65, schedule: "Saturdays 11am PT", nextPaper: "Sleeper Agents (Hubinger et al.)", location: "SF, CA (in-person)", description: "In-person AI safety discussions in San Francisco." },
  { id: "rg5", name: "Robustness & Security Club", topic: "Robustness", members: 22, schedule: "Fridays 3pm ET", nextPaper: "Universal Adversarial Triggers (Wallace et al.)", location: "Online (Google Meet)", description: "Focus on adversarial robustness and security of ML systems." },
  { id: "rg6", name: "AI Ethics Roundtable", topic: "Ethics", members: 38, schedule: "Mondays 4pm ET", nextPaper: "On the Dangers of Stochastic Parrots (Bender et al.)", location: "Online (Zoom)", description: "Interdisciplinary discussion of AI ethics papers." },
];

export default function ReadingGroups() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div><h1 className="text-2xl font-bold text-white">Reading Groups</h1><p className="text-gray-400 mt-1">Join AI safety paper discussion groups</p></div>
          <button className="btn-primary flex items-center gap-2"><Plus className="w-4 h-4" /> Create Group</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {groups.map((group) => (
            <div key={group.id} className="card">
              <div className="flex items-center gap-3 mb-3">
                <BookMarked className="w-6 h-6 text-pink-400" />
                <div>
                  <h3 className="text-sm font-bold text-white">{group.name}</h3>
                  <span className="badge-pink">{group.topic}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">{group.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2"><Users className="w-3 h-3 text-gray-500" /><span className="text-gray-400">{group.members} members</span></div>
                <div className="flex items-center gap-2"><Calendar className="w-3 h-3 text-gray-500" /><span className="text-gray-400">{group.schedule}</span></div>
                <div className="text-xs text-gray-500">{group.location}</div>
              </div>
              <div className="mt-3 p-2 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">Next paper:</p>
                <p className="text-sm text-pink-300">{group.nextPaper}</p>
              </div>
              <button className="btn-primary w-full mt-3 text-sm">Join Group</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
