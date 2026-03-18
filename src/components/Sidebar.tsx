"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Network, Grid3X3, BookOpen, List, Users, DollarSign, Briefcase, BookMarked, BarChart3 } from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: Grid3X3 },
  { href: "/research", label: "Research Hub", icon: BookOpen },
  { href: "/taxonomy", label: "Problem Taxonomy", icon: List },
  { href: "/collaborate", label: "Collaboration Finder", icon: Users },
  { href: "/grants", label: "Grant Tracker", icon: DollarSign },
  { href: "/careers", label: "Career Board", icon: Briefcase },
  { href: "/reading-groups", label: "Reading Groups", icon: BookMarked },
  { href: "/metrics", label: "Field Metrics", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-8 px-2">
        <Network className="w-8 h-8 text-pink-500" />
        <div><h1 className="text-lg font-bold text-white">SafetyNet</h1><p className="text-xs text-gray-500">AI Safety Community</p></div>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-pink-600/20 text-pink-400" : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"}`}>
              <Icon className="w-4 h-4" />{item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-800"><p className="text-xs text-gray-600 px-2">SafetyNet v1.0</p></div>
    </aside>
  );
}
