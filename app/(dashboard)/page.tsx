"use client";

import React, { useState } from "react";
import {
  Ticket,
  Wallet,
  Calendar,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  Eye,
  Download,
  Share,
} from "lucide-react";

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const stats = [
    {
      icon: Ticket,
      label: "Tickets Owned",
      value: "8",
      change: "+2 this month",
      color: "purple",
    },
    {
      icon: Wallet,
      label: "Total Spent",
      value: "1.2 ETH",
      change: "Avg. 0.15 ETH/ticket",
      color: "green",
    },
    {
      icon: Calendar,
      label: "Events Attended",
      value: "5",
      change: "3 upcoming",
      color: "blue",
    },
    {
      icon: Star,
      label: "Favorite Genre",
      value: "Music",
      change: "5 events",
      color: "pink",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      location: "Madison Square Garden, NY",
      ticketId: "#NFT-2341",
      price: "0.08 ETH",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      qrCode: "QR_CODE_PLACEHOLDER",
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      date: "Aug 20, 2026",
      location: "Convention Center, SF",
      ticketId: "#NFT-2342",
      price: "0.05 ETH",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      qrCode: "QR_CODE_PLACEHOLDER",
    },
    {
      id: 3,
      title: "Jazz Night Premium",
      date: "Sep 10, 2026",
      location: "Blue Note Jazz Club, NYC",
      ticketId: "#NFT-2343",
      price: "0.025 BTC",
      status: "confirmed",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
      qrCode: "QR_CODE_PLACEHOLDER",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Electronic Dreams Festival",
      date: "Dec 15, 2025",
      location: "Las Vegas Convention Center",
      ticketId: "#NFT-2101",
      price: "12.5 SOL",
      status: "attended",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      review: 5,
    },
    {
      id: 5,
      title: "Rock Concert 2025",
      date: "Nov 20, 2025",
      location: "Staples Center, LA",
      ticketId: "#NFT-1987",
      price: "0.1 ETH",
      status: "attended",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      review: 4,
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
      attended: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      cancelled: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    const icons = {
      confirmed: CheckCircle,
      attended: CheckCircle,
      cancelled: Clock,
    };
    const Icon = icons[status as keyof typeof icons];

    return (
      <span
        className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${
          styles[status as keyof typeof styles]
        }`}
      >
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-slate-600"
        }`}
      />
    ));
  };

  return (
    <>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome back, Alex! 👋
        </h1>
        <p className="text-slate-400">
          Manage your NFT tickets and discover new events.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-500/20`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className={`text-${stat.color}-400 text-xs font-semibold`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-purple-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeTab === "past"
                ? "bg-purple-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Past Events
          </button>
        </div>

        {activeTab === "upcoming" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold mb-2 line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-400 mb-3">
                    <p>📅 {event.date}</p>
                    <p>📍 {event.location}</p>
                    <p>🎫 {event.ticketId}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                    <div>
                      <p className="text-slate-400 text-xs">Price Paid</p>
                      <p className="text-purple-400 font-bold">{event.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Status</p>
                      <p className="text-green-400 font-bold">Confirmed</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      View Ticket
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold mb-2 line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-400 mb-3">
                    <p>📅 {event.date}</p>
                    <p>📍 {event.location}</p>
                    <p>🎫 {event.ticketId}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm mb-3 pb-3 border-b border-slate-700">
                    <div>
                      <p className="text-slate-400 text-xs">Price Paid</p>
                      <p className="text-purple-400 font-bold">{event.price}</p>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(event.review)}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-2 rounded-lg transition-all flex items-center justify-center gap-1">
                      <Share className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer>
        <p className="text-center text-slate-500 text-sm py-4">
          &copy; 2024 NFT Ticketing Platform. All rights reserved.
        </p>
      </footer>
    </>
  );
}
