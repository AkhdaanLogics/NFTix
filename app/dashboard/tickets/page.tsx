"use client";

import React, { useState } from "react";
import {
  Ticket,
  Filter,
  Search,
  Calendar,
  MapPin,
  Eye,
  Download,
  Share,
  CheckCircle,
  Clock,
  XCircle,
  Star,
} from "lucide-react";

export default function MyTicketsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample tickets data
  const tickets = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      location: "Madison Square Garden, NY",
      ticketId: "#NFT-2341",
      price: "0.08 ETH",
      status: "confirmed",
      type: "upcoming",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      date: "Aug 20, 2026",
      location: "Convention Center, SF",
      ticketId: "#NFT-2342",
      price: "0.05 ETH",
      status: "confirmed",
      type: "upcoming",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 3,
      title: "Jazz Night Premium",
      date: "Sep 10, 2026",
      location: "Blue Note Jazz Club, NYC",
      ticketId: "#NFT-2343",
      price: "0.025 BTC",
      status: "confirmed",
      type: "upcoming",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
    },
    {
      id: 4,
      title: "Electronic Dreams Festival",
      date: "Dec 15, 2025",
      location: "Las Vegas Convention Center",
      ticketId: "#NFT-2101",
      price: "12.5 SOL",
      status: "attended",
      type: "past",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      rating: 5,
    },
    {
      id: 5,
      title: "Rock Concert 2025",
      date: "Nov 20, 2025",
      location: "Staples Center, LA",
      ticketId: "#NFT-1987",
      price: "0.1 ETH",
      status: "attended",
      type: "past",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      rating: 4,
    },
    {
      id: 6,
      title: "Cancelled Event",
      date: "Oct 5, 2025",
      location: "Some Venue",
      ticketId: "#NFT-1800",
      price: "0.03 ETH",
      status: "cancelled",
      type: "past",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    },
  ];

  // Filter options
  const filters = [
    { key: "all", label: "All Tickets", count: tickets.length },
    {
      key: "upcoming",
      label: "Upcoming",
      count: tickets.filter((t) => t.type === "upcoming").length,
    },
    {
      key: "past",
      label: "Past Events",
      count: tickets.filter((t) => t.type === "past").length,
    },
    {
      key: "confirmed",
      label: "Confirmed",
      count: tickets.filter((t) => t.status === "confirmed").length,
    },
    {
      key: "attended",
      label: "Attended",
      count: tickets.filter((t) => t.status === "attended").length,
    },
  ];

  // Filter tickets based on active filter and search
  const filteredTickets = tickets.filter((ticket) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "upcoming" && ticket.type === "upcoming") ||
      (activeFilter === "past" && ticket.type === "past") ||
      (activeFilter === "confirmed" && ticket.status === "confirmed") ||
      (activeFilter === "attended" && ticket.status === "attended");

    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.ticketId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Status badge component
  const getStatusBadge = (status: string) => {
    const config = {
      confirmed: {
        style: "bg-green-500/20 text-green-400 border-green-500/30",
        icon: CheckCircle,
        label: "Confirmed",
      },
      attended: {
        style: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        icon: CheckCircle,
        label: "Attended",
      },
      cancelled: {
        style: "bg-red-500/20 text-red-400 border-red-500/30",
        icon: XCircle,
        label: "Cancelled",
      },
    };

    const { style, icon: Icon, label } = config[status as keyof typeof config];

    return (
      <span
        className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full border ${style}`}
      >
        <Icon className="w-3 h-3" />
        {label}
      </span>
    );
  };

  // Render stars for rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-slate-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">My Tickets</h1>
          <p className="text-slate-400">Manage and view all your NFT tickets</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>
      </div>

      {/* Filter Menu */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-slate-400" />
          <h2 className="text-lg font-semibold text-white">Filter Tickets</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {filter.label}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.key
                    ? "bg-white/20 text-white"
                    : "bg-slate-700 text-slate-500"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tickets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
          >
            {/* Ticket Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={ticket.image}
                alt={ticket.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                {getStatusBadge(ticket.status)}
              </div>
            </div>

            {/* Ticket Details */}
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-3 line-clamp-2">
                {ticket.title}
              </h3>

              <div className="space-y-2 text-sm text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{ticket.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="line-clamp-1">{ticket.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4" />
                  <span>{ticket.ticketId}</span>
                </div>
              </div>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div>
                  <p className="text-slate-400 text-xs mb-1">Price Paid</p>
                  <p className="text-purple-400 font-bold text-lg">
                    {ticket.price}
                  </p>
                </div>
                {ticket.rating && (
                  <div className="text-right">
                    <p className="text-slate-400 text-xs mb-1">Your Rating</p>
                    {renderStars(ticket.rating)}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold p-3 rounded-xl transition-all">
                  <Download className="w-4 h-4" />
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white font-semibold p-3 rounded-xl transition-all">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTickets.length === 0 && (
        <div className="text-center py-12">
          <Ticket className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No tickets found
          </h3>
          <p className="text-slate-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Ticket Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400">
              {tickets.length}
            </p>
            <p className="text-slate-400 text-sm">Total Tickets</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-400">
              {tickets.filter((t) => t.status === "confirmed").length}
            </p>
            <p className="text-slate-400 text-sm">Confirmed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-400">
              {tickets.filter((t) => t.status === "attended").length}
            </p>
            <p className="text-slate-400 text-sm">Attended</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-400">
              {tickets.filter((t) => t.status === "cancelled").length}
            </p>
            <p className="text-slate-400 text-sm">Cancelled</p>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-center text-slate-500 text-sm py-4">
          &copy; 2024 NFT Ticketing Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
