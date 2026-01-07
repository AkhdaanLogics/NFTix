"use client";

import React, { useState } from "react";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  MoreVertical,
  Plus,
  Filter,
} from "lucide-react";
import Link from "next/link";

export default function MyEvents() {
  const [filter, setFilter] = useState("all");

  const myEvents = [
    {
      id: 1,
      title: "Summer Music Festival 2026",
      date: "Jul 15, 2026",
      location: "Madison Square Garden",
      ticketsSold: 450,
      totalTickets: 500,
      revenue: "12.5 ETH",
      status: "approved",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 2,
      title: "Tech Conference 2026",
      date: "Aug 20, 2026",
      location: "Convention Center",
      ticketsSold: 180,
      totalTickets: 300,
      revenue: "5.4 ETH",
      status: "pending",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    },
    {
      id: 3,
      title: "Art Exhibition Night",
      date: "Sep 5, 2026",
      location: "Downtown Gallery",
      ticketsSold: 0,
      totalTickets: 200,
      revenue: "0 ETH",
      status: "rejected",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
    {
      id: 4,
      title: "Winter Jazz Night",
      date: "Dec 10, 2026",
      location: "Blue Note Jazz Club",
      ticketsSold: 120,
      totalTickets: 150,
      revenue: "8.2 ETH",
      status: "approved",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    },
    {
      id: 5,
      title: "Startup Pitch Event",
      date: "Oct 15, 2026",
      location: "Silicon Valley Hub",
      ticketsSold: 75,
      totalTickets: 100,
      revenue: "3.1 ETH",
      status: "pending",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400",
    },
    {
      id: 6,
      title: "Food Festival 2026",
      date: "Nov 20, 2026",
      location: "Central Park",
      ticketsSold: 0,
      totalTickets: 400,
      revenue: "0 ETH",
      status: "approved",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    },
  ];

  const filteredEvents = myEvents.filter((event) =>
    filter === "all" ? true : event.status === filter
  );

  const getStatusBadge = (status: string) => {
    const styles = {
      approved: "bg-green-500/20 text-green-400 border-green-500/30",
      pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      rejected: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    const icons = {
      approved: CheckCircle,
      pending: Clock,
      rejected: XCircle,
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

  const filterOptions = [
    { value: "all", label: "All Events" },
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "rejected", label: "Rejected" },
  ];

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">My Events</h1>
          <p className="text-slate-400">
            Manage and track all your events in one place.
          </p>
        </div>
        <Link
          href="/organizer/events/create"
          className="bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Create Event
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === option.value
                ? "bg-purple-500 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                {getStatusBadge(event.status)}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {event.title}
              </h3>
              <div className="space-y-1 text-sm text-slate-400 mb-4">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
              </div>

              <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-slate-700">
                <div>
                  <p className="text-slate-400 text-xs">Sold</p>
                  <p className="text-white font-bold">
                    {event.ticketsSold}/{event.totalTickets}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-slate-400 text-xs">Revenue</p>
                  <p className="text-purple-400 font-bold">{event.revenue}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No events found</div>
          <p className="text-slate-500">
            Try adjusting your filters or create a new event.
          </p>
        </div>
      )}
    </>
  );
}
