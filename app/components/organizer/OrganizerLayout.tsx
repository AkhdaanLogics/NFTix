"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  TrendingUp,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  User,
  Plus,
  BarChart3,
  LogOut,
  Router,
  Scan,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface OrganizerLayoutProps {
  children: React.ReactNode;
}
const handleLogout = () => {
  if (confirm("Are you sure you want to logout?")) {
    // Handle logout logic here
    window.location.href = "/login";
    alert("Logged out successfully");
  }
};
export default function OrganizerLayout({ children }: OrganizerLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/organizer" },
    { icon: Calendar, label: "My Events", href: "/organizer/events" },
    { icon: TrendingUp, label: "Sales", href: "/organizer/sales" },
    { icon: BarChart3, label: "Analytics", href: "/organizer/analytics" },
    { icon: Scan, label: "Add Scanner", href: "/organizer/scan" },
    { icon: Settings, label: "Settings", href: "/organizer/settings" },
  ];

  const closeSidebar = () => setIsSidebarOpen(false);
  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 z-50 flex items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <Link
            href="/organizer"
            className="flex items-center gap-3"
            onClick={closeSidebar}
          >
            <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold">NFTix Organizer</span>
              <p className="text-xs text-slate-400">Event Management</p>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search events, sales..."
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-slate-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/organizer/settings"
            className="flex items-center gap-2 bg-slate-800/50 rounded-xl px-3 py-2 border border-slate-700 hover:border-slate-600 transition-all"
          >
            <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-white hidden lg:block">
              Alex Johnson
            </span>
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-slate-800 z-40 transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 space-y-2">
          {/* Create Event Button */}
          <Link
            href="/organizer/events/create"
            onClick={closeSidebar}
            className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 mb-4"
          >
            <Plus className="w-5 h-5" />
            Create Event
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive(item.href)
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-slate-700">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all w-full"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Help Card */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-linear-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-4 border border-purple-500/30">
            <p className="text-sm text-white font-semibold mb-2">Need Help?</p>
            <p className="text-xs text-slate-300 mb-3">
              Contact support for assistance
            </p>
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto p-4 lg:p-8">{children}</div>
      </main>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
}
